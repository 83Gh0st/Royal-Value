import { NextRequest, NextResponse } from "next/server";

export type ContactPayload = {
  name: string;
  phone: string;
  emirate?: string;
  project?: string;
  message?: string;
};

/**
 * Handles the "Book a free site visit" form.
 *
 * This currently validates the submission and logs it server-side so the
 * form works end to end out of the box. Before going live, wire this up to
 * a real email/CRM provider — for example:
 *
 *   - Resend (https://resend.com) — a few lines with their Node SDK
 *   - Web3Forms (https://web3forms.com) — drop-in, no backend code needed
 *   - Your own SMTP relay via nodemailer
 *
 * Forward `payload` to whichever you choose in place of the console.log below.
 */
export async function POST(req: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const phone = (payload.phone ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and mobile / WhatsApp number are required." },
      { status: 422 }
    );
  }

  // [EDIT] Replace with a real email/CRM integration before going live.
  console.log("New RV Group enquiry:", {
    name,
    phone,
    emirate: payload.emirate ?? "",
    project: payload.project ?? "",
    message: (payload.message ?? "").trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
