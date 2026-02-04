import { NextRequest, NextResponse } from "next/server";

interface WaitlistData {
  email: string;
  company?: string;
  name?: string;
  adBudget?: string;
  currentSetup?: string;
  note?: string;
}

const AD_BUDGET_LABELS: Record<string, string> = {
  under50: "50万円未満",
  "50to100": "50〜100万円",
  "100to300": "100〜300万円",
  over300: "300万円以上",
};

const CURRENT_SETUP_LABELS: Record<string, string> = {
  inhouse: "自社運用",
  agency: "代理店委託",
  both: "両方",
  starting: "これから始める",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeString(value: unknown, maxLength = 1000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function labelForBudget(value: string): string {
  if (!value) return "未選択";
  return AD_BUDGET_LABELS[value] ?? value;
}

function labelForSetup(value: string): string {
  if (!value) return "未選択";
  return CURRENT_SETUP_LABELS[value] ?? value;
}

async function sendToGoogleSheets(data: WaitlistData, timestamp: string) {
  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const webhookSecret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

  if (!webhookUrl) {
    throw new Error("GOOGLE_APPS_SCRIPT_URL is not configured");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret: webhookSecret ?? "",
      timestamp,
      email: data.email,
      company: data.company ?? "",
      name: data.name ?? "",
      adBudget: data.adBudget ?? "",
      adBudgetLabel: labelForBudget(data.adBudget ?? ""),
      currentSetup: data.currentSetup ?? "",
      currentSetupLabel: labelForSetup(data.currentSetup ?? ""),
      note: data.note ?? "",
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Google Sheets webhook failed: ${response.status} ${body}`);
  }

  const body = await response.text();
  try {
    const result = JSON.parse(body);
    if (result.ok === false) {
      throw new Error(
        `Google Sheets webhook rejected: ${result.error ?? body}`,
      );
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      // Non-JSON response (e.g. HTML) – treat as success if HTTP status was ok
      return;
    }
    throw e;
  }
}

async function sendToSlack(data: WaitlistData, timestamp: string) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL is not configured. Skip Slack notification.");
    return;
  }

  const text = [
    "🆕 先行登録がありました",
    `日時: ${timestamp}`,
    `メール: ${data.email}`,
    `会社名: ${data.company || "未入力"}`,
    `名前: ${data.name || "未入力"}`,
    `月額広告費: ${labelForBudget(data.adBudget || "")}`,
    `運用体制: ${labelForSetup(data.currentSetup || "")}`,
    `自由記入: ${data.note || "未入力"}`,
  ].join("\n");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Slack webhook failed: ${response.status} ${body}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const input = (await request.json()) as WaitlistData;
    const data: WaitlistData = {
      email: normalizeString(input.email, 320),
      company: normalizeString(input.company, 200),
      name: normalizeString(input.name, 100),
      adBudget: normalizeString(input.adBudget, 40),
      currentSetup: normalizeString(input.currentSetup, 40),
      note: normalizeString(input.note, 2000),
    };

    // Validate email
    if (!data.email || !EMAIL_REGEX.test(data.email)) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 },
      );
    }

    const timestamp = new Date().toISOString();
    await sendToGoogleSheets(data, timestamp);

    try {
      await sendToSlack(data, timestamp);
    } catch (error) {
      // Slack should not block submissions after Sheets is saved.
      console.error("Slack notify error:", error);
    }

    return NextResponse.json(
      { message: "登録が完了しました" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
}
