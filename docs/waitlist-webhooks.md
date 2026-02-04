# Waitlist integrations (Google Sheets + Slack)

## 1) Environment variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

- `GOOGLE_APPS_SCRIPT_URL`: Web app URL from Google Apps Script
- `GOOGLE_APPS_SCRIPT_SECRET`: optional shared secret
- `SLACK_WEBHOOK_URL`: Slack Incoming Webhook URL

## 2) Google Apps Script setup

Create a spreadsheet and open `Extensions -> Apps Script`, then paste:

```javascript
const SHEET_NAME = "waitlist";
const WEBHOOK_SECRET = "replace-with-your-secret";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");
    const secret = data.secret || "";
    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "unauthorized" }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "timestamp",
        "email",
        "company",
        "name",
        "adBudget",
        "adBudgetLabel",
        "currentSetup",
        "currentSetupLabel",
        "note",
      ]);
    }

    sheet.appendRow([
      data.timestamp || "",
      data.email || "",
      data.company || "",
      data.name || "",
      data.adBudget || "",
      data.adBudgetLabel || "",
      data.currentSetup || "",
      data.currentSetupLabel || "",
      data.note || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Deploy as Web app:

- Execute as: `Me`
- Who has access: `Anyone`

Use the generated Web app URL as `GOOGLE_APPS_SCRIPT_URL`.

If you want secret auth, set `WEBHOOK_SECRET` and `GOOGLE_APPS_SCRIPT_SECRET` to the same value.

## 3) Slack setup

Create Incoming Webhook in Slack and set its URL to `SLACK_WEBHOOK_URL`.

## 4) Notes

- Submission succeeds when Sheets save is successful.
- Slack notification is best-effort and does not block user submission.
