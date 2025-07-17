'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Kayıt Ol</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="İsim"
          className="border p-2 w-full"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Şifre"
          className="border p-2 w-full"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-primary text-textlight px-4 py-2 rounded hover:bg-secondary">Kayıt Ol</button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
