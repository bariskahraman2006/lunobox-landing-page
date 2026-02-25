// KRİTİK KURAL: googleapis paketi kullanıldığı için Edge runtime KULLANILAMAZ.
export const runtime = "nodejs"; //

import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { z } from 'zod';

// Formdan gelecek verinin yapısı (Honeypot "company" alanı dahil)
const schema = z.object({
  email: z.string().email('Geçerli bir email giriniz'),
  company: z.string().optional(), // Honeypot alanı
});

async function getGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      // .env içindeki \n karakterlerinin düzgün çalışması için replace işlemi
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, company } = schema.parse(body);

    // 1. SPAM KORUMASI (Honeypot)
    // Eğer gizli "company" alanı doluysa, bu bir bottur. Kaydetme ama başarılı dön.
    if (company) {
      return NextResponse.json({ success: true });
    }

    const sheets = await getGoogleSheets();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const normalizedEmail = email.toLowerCase().trim(); //

    // 2. KOPYA KONTROLÜ (Duplicate Email Protection)
    // A sütunundaki mevcut mailleri çekiyoruz
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:A',
    });

    const rows = response.data.values;
    if (rows) {
      const existingEmails = rows.map(row => row[0]?.toLowerCase().trim());
      if (existingEmails.includes(normalizedEmail)) {
        // Mail zaten var, temiz tutmak için tekrar ekleme ama başarılı dön
        return NextResponse.json({ success: true });
      }
    }

    // 3. YENİ KAYIT EKLEME
    // Email | ISO timestamp | website formatında kaydediyoruz
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          normalizedEmail,
          new Date().toISOString(),
          'website'
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Geçersiz email' },
        { status: 400 }
      );
    }
    console.error('Waitlist API Hatası:', error);
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu, lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}