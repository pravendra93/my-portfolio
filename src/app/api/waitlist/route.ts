import { NextResponse } from 'next/server';
import { addToWaitlist } from '@/lib/waitlist-db';
import { sendWaitlistEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email, product } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const isBlueprint = product?.toLowerCase().includes('blueprint');
    
    // Save to "database"
    await addToWaitlist({ email, timestamp, product });

    // Send confirmation email
    await sendWaitlistEmail(email, isBlueprint);

    return NextResponse.json({ 
      success: true, 
      message: isBlueprint ? "Blueprint sent! Check your inbox 📑" : "Welcome to RakriLabs! 🚀 Check your inbox."
    }, { status: 200 });
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json({ error: error.message || 'Something went wrong.' }, { status: 500 });
  }
}
