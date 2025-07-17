import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
  }
  const saved = await prisma.contactMessage.create({
    data: { name, email, phone, message },
  });
  return NextResponse.json({ success: true, message: "Mesaj kaydedildi", data: saved });
}

export async function GET() {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(messages);
} 