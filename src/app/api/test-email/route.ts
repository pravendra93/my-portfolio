import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailService';

/**
 * TEST EMAIL API
 * POST /api/test-email
 * Usage: curl -X POST http://localhost:3000/api/test-email
 */
export async function POST() {
  const ZOHO_EMAIL = process.env.ZOHO_EMAIL;

  if (!ZOHO_EMAIL) {
    return NextResponse.json({ 
      success: false, 
      error: 'ZOHO_EMAIL is not defined in your environment.' 
    }, { status: 500 });
  }

  try {
    const testOptions = {
      to: ZOHO_EMAIL, // Send to self
      subject: `[DEBUG] Zoho SMTP Test Email - ${new Date().toLocaleTimeString()}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #050505; color: #FFFFFF; border: 1px solid #333; border-radius: 20px;">
          <h2 style="color: #06B6D4">Zoho SMTP Connection Successful 🚀</h2>
          <p>This is a test email triggered from your local agency website.</p>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888">
            <strong>Endpoint:</strong> /api/test-email<br />
            <strong>Timestamp:</strong> ${new Date().toISOString()}
          </p>
        </div>
      `,
      text: "Zoho SMTP Connection Successful! This is a test email."
    };

    const result = await sendEmail(testOptions);

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        messageId: result.messageId, 
        info: 'Test email successfully dispatched to ' + ZOHO_EMAIL
      }, { status: 200 });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: result.error || 'Failed to send test email.'
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Test Email API Critical Error:', error.message);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Critical SMTP system failure.'
    }, { status: 500 });
  }
}
