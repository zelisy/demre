'use client';

import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Header />
      <main className="max-w-7xl mx-auto p-4 w-full flex-1">{children}</main>
      <Footer />
    </SessionProvider>
  );
} 