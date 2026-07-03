// Google Sheets integration via Google Apps Script Web App.
//
// HOW TO SET UP (one-time, ~3 minutes):
// 1. Open the Google Sheet you want leads to land in (logged in as
//    1nt23is071.deepak@nmit.ac.in or whichever account owns the sheet).
// 2. Extensions → Apps Script. Paste the script below, save, then Deploy →
//    "New deployment" → Type: Web app → Execute as: Me, Who has access: Anyone.
//    Copy the deployed Web app URL.
// 3. Paste that URL into SHEETS_WEBHOOK_URL below.
//
// Apps Script (paste into Apps Script editor):
// -----------------------------------------------------------------------------
// const LEAD_SHEET   = 'Leads';      // tab for popup leads
// const FRANCHISE_SHEET = 'Franchise';
// function doPost(e) {
//   const data = e.parameter;
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheetName = data.formType === 'franchise' ? FRANCHISE_SHEET : LEAD_SHEET;
//   let sheet = ss.getSheetByName(sheetName);
//   if (!sheet) sheet = ss.insertSheet(sheetName);
//   if (sheet.getLastRow() === 0) {
//     if (sheetName === FRANCHISE_SHEET) {
//       sheet.appendRow(['Date','Time','Name','Email','Phone','City','State','Experience','Budget','Timeline','Comments','Page']);
//     } else {
//       sheet.appendRow(['Date','Time','Name','Phone','Email','Course','Page']);
//     }
//   }
//   const d = new Date();
//   const date = Utilities.formatDate(d, Session.getScriptTimeZone(), 'yyyy-MM-dd');
//   const time = Utilities.formatDate(d, Session.getScriptTimeZone(), 'HH:mm:ss');
//   if (sheetName === FRANCHISE_SHEET) {
//     sheet.appendRow([date,time,data.name||'',data.email||'',data.phone||'',data.city||'',data.state||'',data.experience||'',data.budget||'',data.timeline||'',data.comments||'',data.page||'']);
//   } else {
//     sheet.appendRow([date,time,data.name||'',data.phone||'',data.email||'',data.course||'',data.page||'']);
//   }
//   return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
// }
// -----------------------------------------------------------------------------

export const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbw9CNEbaHdz6URvqFr3meEb8g_dw6Tj9CCNOASHKf-pX0W7mFXq-GdD1Qib8hSI94sl/exec";

export type SheetsPayload = Record<string, string>;

/**
 * Posts data to the Google Apps Script web app.
 * Uses `application/x-www-form-urlencoded` so the browser does NOT send a
 * CORS preflight and Apps Script accepts the request without CORS headers.
 * Returns true on a network-successful submission (Apps Script always 200s).
 */
export const submitToSheets = async (payload: SheetsPayload): Promise<boolean> => {
  if (!SHEETS_WEBHOOK_URL || SHEETS_WEBHOOK_URL.includes("REPLACE_WITH_YOUR")) {
    console.warn("[sheets] SHEETS_WEBHOOK_URL not configured — skipping remote save.");
    return true; // don't block the UX in dev/preview
  }
  try {
    const body = new URLSearchParams(payload).toString();
    await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body,
      // Apps Script returns JSON but its CORS headers are spotty — opaque is fine.
      mode: "no-cors",
    });
    return true;
  } catch (err) {
    console.error("[sheets] submission failed", err);
    return false;
  }
};
