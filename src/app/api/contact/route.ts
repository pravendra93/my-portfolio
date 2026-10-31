import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailService";
import { CONTACT_EMAIL_BCC, CONTACT_EMAIL_TO, createContactPostHandler } from "@/lib/contactSubmission";

export const POST = createContactPostHandler(sendEmail, CONTACT_EMAIL_TO, (body, init) =>
  NextResponse.json(body, init),
  CONTACT_EMAIL_BCC,
);
