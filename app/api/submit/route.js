import { google } from "googleapis";
import { NextResponse } from "next/server";
import credentials from "@/psyched-zone-386408-6b11eb825912.json"; // Place your JSON key in `/src` and import it

const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, "base64").toString()
);

export async function POST(req) {
  try {
    const { fullname, email, message } = await req.json();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID; // Use env variable


  
    const range = "Sheet1!A:C"; // Update as needed

    // Append new row to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[fullname, email, message, new Date().toLocaleString()]],
      },
    });

    return NextResponse.json({ success: true, message: "Data submitted successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
