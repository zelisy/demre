'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
    if (data.message === 'Giriş başarılı') {
      router.push('/admin');
    }
  };

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
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full bg-white/10 border-2 border-custom-turquoise/60 rounded-xl shadow-lg backdrop-blur-sm py-10 max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-sans text-center drop-shadow-lg">Giriş Yap</h1>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <input
              type="email"
              placeholder="Email"
              className="border border-custom-turquoise/60 bg-white/20 text-white placeholder-white/80 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-custom-turquoise backdrop-blur-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifre"
              className="border border-custom-turquoise/60 bg-white/20 text-white placeholder-white/80 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-custom-turquoise backdrop-blur-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-gradient-to-r from-custom-turquoise to-custom-darkgreen text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform w-full">Giriş Yap</button>
          </form>
          {message && <p className="mt-6 text-base text-white font-semibold drop-shadow-lg">{message}</p>}
        </div>
      </section>
    </>
  );
}
