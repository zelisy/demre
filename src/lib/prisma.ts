import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as any;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
