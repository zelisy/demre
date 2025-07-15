import React from "react";

export default function Hakkimizda() {
  return (
    <>
      {/* Shared Background with header */}
      <div className="absolute top-0 left-0 w-full" style={{ height: 'calc(60vh + 5rem)', zIndex: 0 }}>
        <img
          src="/sera1.jpg"
          alt="Sera"
          className="object-cover w-full h-full opacity-60"
          style={{ filter: 'brightness(0.7) blur(1px)', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-custom-turquoise/80 to-custom-darkgreen/80" />
      </div>
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 overflow-hidden" style={{ zIndex: 1, paddingTop: 0, marginTop: 0 }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full bg-white/10 border-2 border-green-200/60 rounded-xl shadow-lg backdrop-blur-sm py-8 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans text-center drop-shadow-lg">Hakkımızda</h1>
          <p className="text-lg md:text-xl text-white mb-8 text-center max-w-2xl mx-auto font-sans">
            Sera Takip, modern tarımın dijital anahtarı olarak seracılık süreçlerini kolaylaştırmak ve verimliliği artırmak amacıyla geliştirilmiş bir platformdur. Amacımız, çiftçilerimizin teknolojiyi en verimli şekilde kullanarak üretim süreçlerini daha şeffaf, izlenebilir ve yönetilebilir hale getirmektir.
          </p>
          <div className="bg-gradient-to-r from-custom-turquoise to-custom-darkgreen rounded-lg p-6 shadow-inner w-full max-w-xl">
            <h2 className="text-2xl font-semibold text-custom-darkgreen mb-2 font-sans">Misyonumuz</h2>
            <p className="text-gray-600 text-base md:text-lg font-sans">
              Tarımda dijital dönüşümü destekleyerek, sürdürülebilir ve yenilikçi çözümler sunmak. Çiftçilerimizin iş yükünü azaltmak, veriyle yönetimi kolaylaştırmak ve tarımsal üretimde kaliteyi artırmak için buradayız.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 