import nodemailer from 'nodemailer';

/**
 * PRODUCTION-READY ZOHO MAIL SERVICE
 * Debugged & Optimized for reliability
 */

// Masked values for safer logging
const getMaskedValue = (val: string | undefined) => {
  if (!val) return 'MISSING';
  return `${val.substring(0, 3)}****${val.substring(val.length - 3)}`;
};

/**
 * Creates a transporter with specific config
 */
const createTransporter = (config: { port: number; secure: boolean }) => {
  const ZOHO_EMAIL = process.env.ZOHO_EMAIL;
  const ZOHO_APP_PASSWORD = process.env.ZOHO_APP_PASSWORD;

  return nodemailer.createTransport({
    host: 'smtp.zoho.in', // Using regional .in host for better compatibility
    port: config.port,
    secure: config.secure,
    auth: {
      user: ZOHO_EMAIL,
      pass: ZOHO_APP_PASSWORD,
    },
    // Production pooling settings
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
  });
};

type EmailOptions = {
  to: string;
  subject: string;
  text?: string;
  html: string;
  attachments?: any[];
};

/**
 * Main sendEmail function with robust retry and fallback logic
 */
export async function sendEmail(options: EmailOptions, retryCount = 0): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const ZOHO_EMAIL = process.env.ZOHO_EMAIL;
  const ZOHO_APP_PASSWORD = process.env.ZOHO_APP_PASSWORD;

  // 1. DEBUG LOGS (Masked)
  if (retryCount === 0) {
    console.log(`📡 [EMAIL DEBUG] Initializing mail service...`);
    console.log(`📡 [EMAIL DEBUG] Sender: ${getMaskedValue(ZOHO_EMAIL)}`);
    console.log(`📡 [EMAIL DEBUG] Auth: ${getMaskedValue(ZOHO_APP_PASSWORD)}`);
  }

  // 2. Validate configuration
  if (!ZOHO_EMAIL || !ZOHO_APP_PASSWORD) {
    const missing = [];
    if (!ZOHO_EMAIL) missing.push('ZOHO_EMAIL');
    if (!ZOHO_APP_PASSWORD) missing.push('ZOHO_APP_PASSWORD');

    const errorMsg = `❌ [SMTP CONFIG ERROR] Missing: ${missing.join(', ')} in production environment.`;
    console.error(errorMsg);

    // Graceful failure instead of throwing to prevent API crashes
    return {
      success: false,
      error: 'Email service is currently offline.'
    };
  }

  // 3. Select configuration (Fallback logic)
  // Attempt 465 (SSL) first, then 587 (TLS)
  const isFallback = retryCount > 0;
  const config = isFallback
    ? { port: 587, secure: false } // Fallback to Port 587
    : { port: 465, secure: true }; // Primary Port 465

  const transporter = createTransporter(config);

  const mailOptions = {
    from: `"RakriLabs 🚀" <${ZOHO_EMAIL}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    attachments: options.attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [SMTP SUCCESS] Email sent to ${options.to} via Port ${config.port}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    const errorCode = error.code || 'UNKNOWN';
    const errorMsg = error.message || 'No error message';

    console.error(`❌ [SMTP FAILURE] Port ${config.port} | Error: ${errorCode} | ${errorMsg}`);

    // 4. Handle specific common errors
    if (errorCode === 'EAUTH') {
      console.error('⚠️ [AUTH FAILED] Zoho rejected credentials. ACTION: Verify ZOHO_APP_PASSWORD is an APP-SPECIFIC code, not your regular password. Ensure SMTP Access is enabled in Zoho Settings.');
      return { success: false, error: 'Authentication failed. Check app password and SMTP access settings.' };
    }

    if (errorCode === 'EENVELOPE' && error.responseCode === 553) {
      console.error('⚠️ [SENDER ERROR] From address must match ZOHO_EMAIL exactly.');
    }

    // 5. RETRY LOGIC (Exponential Backoff)
    if (retryCount < 2) { // Total 3 attempts (0, 1, 2)
      const nextRetry = retryCount + 1;
      const delay = Math.pow(2, nextRetry) * 1000; // 2s, 4s backoff

      console.log(`🔄 [RETRY] Attempting retry #${nextRetry} in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return sendEmail(options, nextRetry);
    }

    // Capture meaningful error for the final failure
    let userFriendlyError = 'Service currently unavailable. Please try again later.';
    if (errorCode === 'ETIMEDOUT' || errorCode === 'ECONNECTION') {
      userFriendlyError = 'Connection to Zoho mail server timed out. Please check network/firewall settings.';
    }

    return { success: false, error: userFriendlyError };
  }
}
