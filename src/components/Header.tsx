'use client';

import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-primary text-textlight shadow-lg border-b border-primary flex items-center relative z-20">
      <div className="flex justify-between items-center h-full px-4 md:px-10 w-full">
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide font-sans select-none text-textlight">
          Sera Takip
        </span>
        <nav className="flex space-x-4 md:space-x-8 text-base md:text-lg font-semibold uppercase tracking-wider items-center">
          <Link href="/" className="text-textlight hover:bg-secondary hover:underline underline-offset-4 transition px-2 py-1 rounded">Ana Sayfa</Link>
          <Link href="/hakkimizda" className="text-textlight hover:bg-secondary hover:underline underline-offset-4 transition px-2 py-1 rounded">Hakkımızda</Link>
          <a href="#ürünler" className="text-textlight hover:bg-secondary hover:underline underline-offset-4 transition px-2 py-1 rounded">Ürünler</a>
          <Link href="/iletisim" className="text-textlight hover:bg-secondary hover:underline underline-offset-4 transition px-2 py-1 rounded">İletişim</Link>
          {!session ? (
            <button
              onClick={() => signIn()}
              className="text-textlight bg-primary hover:bg-secondary hover:text-textlight px-3 py-1 rounded transition border border-primary shadow-md"
            >
              Yönetici Girişi
            </button>
          ) : (
            <div className="relative">
              <button
                className="text-textlight bg-primary hover:bg-secondary px-3 py-1 rounded transition border border-primary shadow-md flex items-center gap-2"
                onClick={() => setMenuOpen((v) => !v)}
              >
                {session.user?.name || 'Admin'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-primary border border-primary rounded shadow-lg z-30">
                  <Link href="/profile" className="block px-4 py-2 text-textlight hover:bg-secondary">Profil</Link>
                  <Link href="/admin" className="block px-4 py-2 text-textlight hover:bg-secondary">Panel</Link>
                  <Link href="/messages" className="block px-4 py-2 text-textlight hover:bg-secondary">Mesajlar</Link>
                  <button onClick={() => signOut({ callbackUrl: '/login' })} className="block w-full text-left px-4 py-2 text-red-700 hover:bg-red-50">Çıkış Yap</button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
} 