import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 bg-white text-green-800 shadow-lg border-b border-green-200 flex items-center relative z-20">
      <div className="flex justify-between items-center h-full px-4 md:px-10 w-full">
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide font-sans select-none text-green-800">
          Sera Takip
        </span>
        <nav className="flex space-x-4 md:space-x-8 text-base md:text-lg font-semibold uppercase tracking-wider">
          <Link href="/" className="text-green-800 hover:text-green-600 hover:underline underline-offset-4 transition">Ana Sayfa</Link>
          <Link href="/hakkimizda" className="text-green-800 hover:text-green-600 hover:underline underline-offset-4 transition">Hakkımızda</Link>
          <a href="#ürünler" className="text-green-800 hover:text-green-600 hover:underline underline-offset-4 transition">Ürünler</a>
          <Link href="/login" className="text-white bg-green-700 hover:bg-green-800 hover:text-white px-3 py-1 rounded transition border border-green-800 shadow-md">Giriş Yap</Link>
        </nav>
      </div>
    </header>
  );
} 