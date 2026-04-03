import { sendEmail } from './mailService';
import path from 'path';

// Waitlist Template
const generateWaitlistHTML = () => `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 40px; background-color: #0A0A0A; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1);">
  <div style="text-align: center; margin-bottom: 40px;">
    <h1 style="font-size: 32px; font-weight: 900; margin: 0; letter-spacing: -2px;">RakriLabs <span style="color: #6D28D9;">Innovations</span></h1>
  </div>
  <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 24px;">You're on the RakriLabs waitlist 🚀</h2>
  <p style="font-size: 16px; color: #999999; line-height: 1.6;">Thank you for joining our early access queue! We're building the next generation of AI-driven systems.</p>
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 24px; margin: 32px 0;">
    <h3 style="font-size: 12px; font-weight: 900; color: #6D28D9; text-transform: uppercase; margin-bottom: 16px; letter-spacing: 2px;">Core Laboratory Services</h3>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 12px; font-weight: 600;">✨ AI SaaS Development</li>
      <li style="margin-bottom: 12px; font-weight: 600;">🧠 High-Performance RAG Systems</li>
      <li style="margin-bottom: 12px; font-weight: 600;">🤖 Business Automation Agents</li>
    </ul>
  </div>
  <div style="text-align: center; margin-top: 40px;">
    <a href="https://rakrilabs.zohobookings.in/#/421636000000040050" style="display: inline-block; padding: 20px 40px; background-color: #FFFFFF; color: #000000; font-weight: 900; border-radius: 20px; text-decoration: none; text-transform: uppercase; font-size: 14px;">Book Strategy Call</a>
  </div>
</div>
`;

// Blueprint Template
const generateBlueprintHTML = () => `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 40px; background-color: #0A0A0A; color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1);">
  <div style="text-align: center; margin-bottom: 40px;">
    <h1 style="font-size: 32px; font-weight: 900; margin: 0; letter-spacing: -2px;">RakriLabs <span style="color: #06B6D4;">Blueprint</span></h1>
  </div>
  
  <p style="font-size: 16px; color: #FFFFFF; font-weight: 600; margin-bottom: 24px;">Hey,</p>
  
  <p style="font-size: 16px; color: #999999; line-height: 1.6; margin-bottom: 24px;">
    Most AI projects fail because they try to do too much too early. 
    Our approach is different.
  </p>

  <p style="font-size: 16px; color: #FFFFFF; font-weight: 800; margin-bottom: 16px;">We focus on:</p>
  
  <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 24px; margin: 24px 0;">
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li style="margin-bottom: 12px; font-weight: 600; color: #FFFFFF;">🚀 Core functionality first</li>
      <li style="margin-bottom: 12px; font-weight: 600; color: #FFFFFF;">⚡ Fast MVP launch</li>
      <li style="margin-bottom: 12px; font-weight: 600; color: #FFFFFF;">📈 Real user feedback</li>
    </ul>
  </div>

  <p style="font-size: 16px; color: #999999; line-height: 1.6; margin-bottom: 32px;">
    That’s how we go from <strong>idea → production in weeks</strong>. 
    <br/><br/>
    If you’re serious about building:
  </p>

  <div style="text-align: center; margin-top: 40px;">
    <a href="https://rakrilabs.zohobookings.in/#/421636000000040050" style="display: inline-block; padding: 20px 40px; background-color: #06B6D4; color: #000000; font-weight: 900; border-radius: 20px; text-decoration: none; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">Let’s map your project</a>
  </div>

  <div style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); pt: 24px;">
    <p style="font-size: 14px; color: #FFFFFF; font-weight: 800; margin-bottom: 4px;">Akshay</p>
    <p style="font-size: 12px; color: #06B6D4; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">RakriLabs</p>
  </div>
</div>
`;

/**
 * sendWaitlistEmail - Helper to send specific waitlist/blueprint emails
 */
export async function sendWaitlistEmail(toEmail: string, isBlueprint: boolean = false) {
  const subject = isBlueprint 
    ? "How we build AI products in weeks (not months)" 
    : "You're on the RakriLabs waitlist 🚀";
  
  const html = isBlueprint ? generateBlueprintHTML() : generateWaitlistHTML();
  
  const attachments = isBlueprint ? [
    {
      filename: 'ai-product-blueprint.pdf',
      path: path.join(process.cwd(), 'public', 'ai-product-blueprint.pdf')
    }
  ] : [];

  try {
    const result = await sendEmail({
      to: toEmail,
      subject,
      html,
      attachments
    });
    
    if (result.success) {
      console.log(`✅ ${isBlueprint ? 'Blueprint' : 'Waitlist'} email sent to ${toEmail}`);
    }
  } catch (error: any) {
    console.error('❌ Failed to send waitlist confirmation:', error.message);
    throw error;
  }
}
