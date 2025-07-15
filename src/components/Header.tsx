import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 bg-transparent text-white shadow-lg border-b border-teal-500/40 relative z-20">
      <div className="flex justify-between items-center h-full px-4 md:px-10">
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide font-sans select-none">
          Sera Takip
        </span>
        <nav className="flex space-x-4 md:space-x-8 text-base md:text-lg font-semibold uppercase tracking-wider">
          <Link href="/" className="text-white hover:text-green-300 hover:underline underline-offset-4 transition">Ana Sayfa</Link>
          <Link href="/hakkimizda" className="text-white hover:text-green-300 hover:underline underline-offset-4 transition">Hakkımızda</Link>
          <a href="#ürünler" className="text-white hover:text-green-300 hover:underline underline-offset-4 transition">Ürünler</a>
          <Link href="/login" className="text-white hover:bg-green-700 hover:text-white px-3 py-1 rounded transition border border-green-700">Giriş Yap</Link>
        </nav>
      </div>
    </header>
  );
} 