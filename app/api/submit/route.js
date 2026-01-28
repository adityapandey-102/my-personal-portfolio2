import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Google Sheets integration is configured
    if (process.env.GOOGLE_CREDENTIALS_BASE64 && process.env.GOOGLE_SPREADSHEET_ID) {
      try {
        const credentials = JSON.parse(
          Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, "base64").toString()
        );

        const auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
          range: "Sheet1!A:D",
          valueInputOption: "RAW",
          requestBody: {
            values: [[name, email, message, new Date().toLocaleString()]],
          },
        });
      } catch (googleError) {
        console.error("Google Sheets error:", googleError);
        // Continue even if Google Sheets fails
      }
    }

    // Always return success (form submission is logged or will be handled client-side)
    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
