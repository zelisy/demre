import React from "react";

export default function Hakkimizda() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 bg-white/80 rounded-xl shadow-lg mt-10 mb-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-[#14532d] mb-6 font-sans text-center drop-shadow-lg">Hakkımızda</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl mx-auto font-sans">
        Sera Takip, modern tarımın dijital anahtarı olarak seracılık süreçlerini kolaylaştırmak ve verimliliği artırmak amacıyla geliştirilmiş bir platformdur. Amacımız, çiftçilerimizin teknolojiyi en verimli şekilde kullanarak üretim süreçlerini daha şeffaf, izlenebilir ve yönetilebilir hale getirmektir.
      </p>
      <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-6 shadow-inner w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-[#22c55e] mb-2 font-sans">Misyonumuz</h2>
        <p className="text-gray-600 text-base md:text-lg font-sans">
          Tarımda dijital dönüşümü destekleyerek, sürdürülebilir ve yenilikçi çözümler sunmak. Çiftçilerimizin iş yükünü azaltmak, veriyle yönetimi kolaylaştırmak ve tarımsal üretimde kaliteyi artırmak için buradayız.
        </p>
      </div>
    </section>
  );
} 