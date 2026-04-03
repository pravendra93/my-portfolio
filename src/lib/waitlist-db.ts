import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'waitlist.json');

export type WaitlistEntry = {
  email: string;
  timestamp: string;
  product?: string;
};

export async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function addToWaitlist(entry: WaitlistEntry): Promise<void> {
  const waitlist = await getWaitlist();

  // Prevent duplicate entries but return success silently for a better UX
  if (waitlist.some(e => e.email.toLowerCase() === entry.email.toLowerCase())) {
    return;
  }

  waitlist.push(entry);
  await fs.writeFile(DB_PATH, JSON.stringify(waitlist, null, 2), 'utf-8');
}
