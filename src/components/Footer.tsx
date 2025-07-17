export default function Footer() {
  return (
    <footer className="w-full bg-primary text-textlight py-8 px-4 flex flex-col items-center justify-center border-t-4 border-secondary shadow-2xl text-base md:text-lg font-semibold bg-opacity-95">
      <div className="flex flex-row gap-4">
        {/* Örnek linkler varsa, hover:bg-secondary ekle */}
        {/* <a href="#" className="hover:bg-secondary px-3 py-2 rounded transition font-bold">Link</a> */}
      </div>
      <div className="mt-3 text-base md:text-lg tracking-wide">© 2024 Sera Takip. Tüm hakları saklıdır.</div>
    </footer>
  );
} 