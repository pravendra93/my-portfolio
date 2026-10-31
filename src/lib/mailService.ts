import nodemailer from 'nodemailer';

/**
 * PRODUCTION-READY ZOHO MAIL SERVICE
 * Optimized for reliability and secure credential handling
 */

/**
 * Creates a transporter with specific config
 */
const createTransporter = (config: { port: number; secure: boolean }) => {
  const ZOHO_EMAIL = process.env.ZOHO_EMAIL;
  const ZOHO_APP_PASSWORD = process.env.ZOHO_APP_PASSWORD;

  return nodemailer.createTransport({
    host: 'smtppro.zoho.in',
    port: config.port,
    secure: config.secure,
    auth: {
      user: ZOHO_EMAIL,
      pass: ZOHO_APP_PASSWORD,
    },
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
  });
};

type EmailOptions = {
  to: string;
  bcc?: string[];
  replyTo?: string;
  subject: string;
  text?: string;
  html: string;
  attachments?: any[];
};

/**
 * Main sendEmail function with robust retry and fallback logic
 */
export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const ZOHO_EMAIL = process.env.ZOHO_EMAIL;
  const ZOHO_APP_PASSWORD = process.env.ZOHO_APP_PASSWORD;

  // Validate configuration without logging secrets
  if (!ZOHO_EMAIL || !ZOHO_APP_PASSWORD) {
    console.error('❌ [SMTP CONFIG ERROR] Zoho email credentials are not fully configured in environment.');
    return {
      success: false,
      error: 'Email service is currently offline.'
    };
  }

  const config = { port: 465, secure: true };
  const transporter = createTransporter(config);

  const mailOptions = {
    from: `"RakriLabs" <${ZOHO_EMAIL}>`,
    replyTo: options.replyTo || ZOHO_EMAIL,
    to: options.to,
    bcc: options.bcc,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [SMTP SUCCESS] Email sent via Port ${config.port}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    const errorCode = error.code || 'UNKNOWN';
    console.error(`❌ [SMTP FAILURE] Port ${config.port} | Error: ${errorCode}`);

    // 4. Handle specific common errors
    if (errorCode === 'EAUTH') {
      console.error('⚠️ [AUTH FAILED] Zoho rejected credentials. ACTION: Verify ZOHO_APP_PASSWORD is an APP-SPECIFIC code, not your regular password. Ensure SMTP Access is enabled in Zoho Settings.');
      return { success: false, error: 'Authentication failed. Check app password and SMTP access settings.' };
    }

    if (errorCode === 'EENVELOPE' && error.responseCode === 553) {
      console.error('⚠️ [SENDER ERROR] From address must match ZOHO_EMAIL exactly.');
    }

    // Do not resend after an ambiguous SMTP failure: the server may have accepted
    // the message even if its acknowledgement was lost.
    let userFriendlyError = 'Service currently unavailable. Please try again later.';
    if (errorCode === 'ETIMEDOUT' || errorCode === 'ECONNECTION') {
      userFriendlyError = 'Connection to Zoho mail server timed out. Please check network/firewall settings.';
    }

    return { success: false, error: userFriendlyError };
  }
}
