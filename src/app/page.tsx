import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Header + Hero Shared Background */}
      <div className="absolute top-0 left-0 w-full" style={{ height: 'calc(100vh + 5rem)', zIndex: 0 }}>
        <img
          src="/sera1.jpg"
          alt="Sera"
          className="object-cover w-full h-full opacity-80"
          style={{ filter: 'brightness(0.9)', height: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80" />
      </div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden" style={{ zIndex: 1 }}>
        <div className="flex flex-col items-center justify-center z-10 text-center px-4 w-full bg-white/10 border-2 border-primary/60 rounded-xl shadow-lg backdrop-blur-sm py-8 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg font-sans">
            Sera Takip
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white max-w-2xl mx-auto font-sans">
            Modern tarımın dijital anahtarı: Sera süreçlerinizi kolayca yönetin, verimliliği artırın.
          </p>
        </div>
      </section>

      {/* Hakkında Section */}
      <section className="w-full py-16 px-4 bg-white flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#14532d] mb-4 font-sans">Sera Takip Sistemi Nedir?</h2>
        <p className="max-w-2xl text-gray-700 text-base md:text-lg text-center font-sans">
          Sera Takip Sistemi, seracılık süreçlerini dijital ortamda izleyip yönetmenizi sağlayan modern bir platformdur. Dikimden hasada kadar tüm aşamaları kolayca takip edebilir, verilerinizi güvenle saklayabilir ve raporlayabilirsiniz.
        </p>
      </section>

      {/* Özellikler Section */}
      <section className="w-full py-16 px-4 bg-[#f3f4f6] flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#14532d] mb-8 font-sans">Özellikler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {/* Özellik Kartları */}
          <FeatureCard
            title="Dikim Öncesi"
            icon="🌱"
            desc="Toprak hazırlığı, tohum seçimi ve planlama adımlarını kolayca yönetin."
          />
          <FeatureCard
            title="Besleme Süreci"
            icon="💧"
            desc="Sulama, gübreleme ve iklim kontrolünü dijital olarak takip edin."
          />
          <FeatureCard
            title="Hasat Kontrolü"
            icon="🧺"
            desc="Hasat zamanını, miktarını ve kalite kontrolünü kaydedin."
          />
          <FeatureCard
            title="Fotoğraf & Raporlama"
            icon="📷"
            desc="Her aşamada fotoğraf ekleyin, detaylı raporlar oluşturun."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, icon, desc }: { title: string; icon: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-[#e5e7eb] hover:shadow-lg transition-shadow min-h-[220px]">
      <div className="text-4xl mb-3 select-none">{icon}</div>
      <h3 className="text-lg font-semibold text-[#14532d] mb-2 font-sans">{title}</h3>
      <p className="text-gray-600 text-sm font-sans">{desc}</p>
    </div>
  );
}
