import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Sadece POST isteği desteklenir" });
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "Bu email ile bir kullanıcı zaten var" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "user", // İstersen burada "admin" de olabilir
      },
    });

    return res.status(201).json({ message: "Kayıt başarılı", user: { id: newUser.id, email: newUser.email } });
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error });
  }
}
