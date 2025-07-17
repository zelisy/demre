'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push('/admin');
    } else {
      setMessage("Giriş başarısız. Bilgilerinizi kontrol edin.");
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: 'url(/sera1.jpg)', filter: 'brightness(0.7) blur(1px)' }} />
      <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-primary/80 to-secondary/80 z-10 pointer-events-none" />
      <main className="relative flex flex-col items-center justify-center flex-1 min-h-screen px-4 z-20">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full bg-white/10 border-2 border-primary/60 rounded-xl shadow-lg backdrop-blur-sm py-10 max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">Giriş Yap</h1>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Şifre"
              className="border p-2 w-full rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="bg-primary text-white px-4 py-2 rounded w-full hover:bg-secondary">Giriş Yap</button>
          </form>
          {message && <p className="mt-4 text-sm text-red-700">{message}</p>}
        </div>
      </main>
    </div>
  );
}
