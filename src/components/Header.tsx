export default function Header() {
  return (
    <header className="w-full h-20 bg-green-800 text-white shadow-lg border-b border-green-900/40">
      <div className="flex justify-between items-center h-full px-4 md:px-10">
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide font-sans select-none">
          Sera Takip
        </span>
        <nav className="flex space-x-4 md:space-x-8 text-base md:text-lg font-semibold uppercase tracking-wider">
          <a href="/" className="hover:text-green-300 hover:underline underline-offset-4 transition">Ana Sayfa</a>
          <a href="#hakkinda" className="hover:text-green-300 hover:underline underline-offset-4 transition">Hakkında</a>
          <a href="#ürünler" className="hover:text-green-300 hover:underline underline-offset-4 transition">Ürünler</a>
          <a href="/login" className="hover:bg-green-700 hover:text-white px-3 py-1 rounded transition border border-green-700">Giriş Yap</a>
        </nav>
      </div>
    </header>
  );
} 