import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // src/lib/prisma.ts içindeki dosyayı kullanıyoruz

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: "user",
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Kullanıcı oluşturulurken hata oluştu" },
      { status: 500 }
    );
  }
}
