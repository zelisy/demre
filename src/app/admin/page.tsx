import React from "react";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex bg-primary">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-primary text-textlight flex flex-col shadow-xl z-10">
        <div className="h-20 flex items-center justify-center font-bold text-2xl tracking-wide border-b border-primary select-none bg-primary">
          Panel
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-secondary transition font-semibold">Üretici</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-secondary transition font-semibold">Üretim Alan Bilgisi</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-secondary transition font-semibold">Dikim Öncesi Dönem</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-secondary transition font-semibold">Hasat Bilgileri</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-secondary transition font-semibold">Sera Kontrol</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen bg-primary">
        <div className="w-full bg-white shadow-md h-20 flex items-center px-8 mb-8">
          <h1 className="text-2xl font-bold text-primary">Admin Paneli</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-0 m-0">
          <div className="w-full h-full bg-white rounded-none shadow-none p-0 m-0 border-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-sans text-center drop-shadow-lg">Hoş Geldiniz!</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center w-full font-sans">
              Sol menüden bir başlık seçerek ilgili sera yönetim işlemlerini başlatabilirsiniz.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 