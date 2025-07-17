'use client';

import React, { useState } from 'react';

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mesajı backend'e gönder
    await fetch('/api/messages/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary/10 py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">İletişim</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-primary/40 rounded px-4 py-2 focus:outline-none focus:border-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-primary/40 rounded px-4 py-2 focus:outline-none focus:border-primary"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon Numaranız"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-primary/40 rounded px-4 py-2 focus:outline-none focus:border-primary"
            required
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-primary/40 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:border-primary"
            required
          />
          <button type="submit" className="w-full bg-primary text-textlight py-2 rounded hover:bg-secondary font-semibold transition">Gönder</button>
        </form>
        {sent && <div className="mt-4 text-green-600 text-center font-semibold">Mesajınız iletildi! Teşekkürler.</div>}
        <div className="mt-8 border-t pt-6 text-center text-gray-700">
          <div><span className="font-bold">Telefon:</span> 0 (555) 123 45 67</div>
          <div><span className="font-bold">E-posta:</span> info@seratakip.com</div>
          <div><span className="font-bold">Adres:</span> Demre, Antalya</div>
        </div>
      </div>
    </div>
  );
} 