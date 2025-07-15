import React from "react";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-green-700 text-white flex flex-col shadow-xl z-10">
        <div className="h-20 flex items-center justify-center font-bold text-2xl tracking-wide border-b border-green-800 select-none bg-green-800">
          Panel
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600 transition font-semibold">Üretici</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600 transition font-semibold">Üretim Alan Bilgisi</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600 transition font-semibold">Dikim Öncesi Dönem</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600 transition font-semibold">Hasat Bilgileri</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600 transition font-semibold">Sera Kontrol</a>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <div className="w-full bg-white shadow-md h-20 flex items-center px-8 mb-8">
          <h1 className="text-2xl font-bold text-green-800">Admin Paneli</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-12 text-center border-2 border-green-200">
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6 font-sans text-center drop-shadow-lg">Hoş Geldiniz!</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto font-sans">
              Sol menüden bir başlık seçerek ilgili sera yönetim işlemlerini başlatabilirsiniz.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 