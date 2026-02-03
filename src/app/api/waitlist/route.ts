import { NextRequest, NextResponse } from "next/server";

interface WaitlistData {
  email: string;
  company?: string;
  name?: string;
  adBudget?: string;
  currentSetup?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: WaitlistData = await request.json();

    // Validate email
    if (!data.email || !data.email.includes("@")) {
      return NextResponse.json(
        { error: "有効なメールアドレスを入力してください" },
        { status: 400 }
      );
    }

    // TODO: Add your email service integration here (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@yourdomain.com',
    //   to: data.email,
    //   subject: 'AdPilot AI 先行登録ありがとうございます',
    //   html: '<p>先行登録いただきありがとうございます。</p>'
    // });

    // TODO: Save to database or spreadsheet
    // Example: Save to a database, Google Sheets, Notion, etc.

    // Log for now (replace with actual storage)
    console.log("New waitlist signup:", {
      email: data.email,
      company: data.company || "N/A",
      name: data.name || "N/A",
      adBudget: data.adBudget || "N/A",
      currentSetup: data.currentSetup || "N/A",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "登録が完了しました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
