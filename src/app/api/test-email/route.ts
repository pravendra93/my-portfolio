import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailService';

/**
 * TEST EMAIL API (Diagnostic Only)
 * POST /api/test-email
 * Disabled by default in production unless protected by INTERNAL_DIAGNOSTIC_SECRET.
 */
export async function POST(req: Request) {
  const isProduction = process.env.NODE_ENV === 'production';
  const diagnosticSecret = process.env.INTERNAL_DIAGNOSTIC_SECRET;
  const allowProdDiagnostic = process.env.ENABLE_PRODUCTION_DIAGNOSTICS === 'true';
  const authHeader = req.headers.get('authorization');
  const expectedAuth = diagnosticSecret ? `Bearer ${diagnosticSecret}` : null;

  // 1. In production: disabled by default. Requires explicit flag AND strong secret.
  if (isProduction) {
    if (!allowProdDiagnostic || !expectedAuth || authHeader !== expectedAuth) {
      return NextResponse.json({ 
        success: false, 
        error: 'Diagnostic endpoint is disabled in production.' 
      }, { status: 403 });
    }
  }

  // 2. In all other environments: protect access with secret. Never expose unauthenticated.
  if (!expectedAuth || authHeader !== expectedAuth) {
    return NextResponse.json({ 
      success: false, 
      error: 'Unauthorized. Set and provide INTERNAL_DIAGNOSTIC_SECRET via Authorization Bearer token.' 
    }, { status: 401 });
  }

  const ZOHO_EMAIL = process.env.ZOHO_EMAIL;

  if (!ZOHO_EMAIL) {
    return NextResponse.json({ 
      success: false, 
      error: 'ZOHO_EMAIL is not configured.' 
    }, { status: 500 });
  }

  try {
    const testOptions = {
      to: ZOHO_EMAIL,
      subject: `[Diagnostic] SMTP Ping Test`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; background-color: #050505; color: #FFFFFF; border: 1px solid #333; border-radius: 20px;">
          <h2 style="color: #06B6D4">Zoho SMTP Connection Successful</h2>
          <p>This is a diagnostic verification email from RakriLabs.</p>
        </div>
      `,
      text: "Zoho SMTP Connection Successful. Diagnostic verification email."
    };

    const result = await sendEmail(testOptions);

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        messageId: result.messageId, 
        info: 'Diagnostic test email dispatched successfully.'
      }, { status: 200 });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: result.error || 'Failed to dispatch diagnostic email.'
      }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ 
      success: false, 
      error: 'SMTP diagnostic failure.' 
    }, { status: 500 });
  }
}
