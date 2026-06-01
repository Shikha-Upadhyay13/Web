import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, phone, message } = parsed.data;

  try {
    await db.lead.create({
      data: {
        type: "contact",
        name,
        email,
        phone,
        message: message || null,
        source: "/contact",
      },
    });
  } catch (err) {
    console.error("Failed to store contact lead:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  // TODO (deploy phase): send email/WhatsApp notification via Resend when configured.

  return NextResponse.json({ ok: true });
}
