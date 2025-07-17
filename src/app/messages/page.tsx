import React from "react";

async function getMessages() {
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL
      ? process.env.NEXT_PUBLIC_BASE_URL
      : "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/messages/contact`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold mb-6 text-primary">İletişim Mesajları</h1>
      {messages.length === 0 ? (
        <p className="text-gray-500">Henüz mesaj yok.</p>
      ) : (
        <div className="space-y-6">
          {messages.map((msg: any) => (
            <div key={msg.id} className="border border-primary/30 rounded-lg p-4 shadow-sm bg-primary/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <span className="font-semibold text-primary">{msg.name}</span>
                <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
              </div>
              <div className="text-sm text-gray-700 mb-1"><span className="font-bold">E-posta:</span> {msg.email}</div>
              <div className="text-sm text-gray-700 mb-1"><span className="font-bold">Telefon:</span> {msg.phone}</div>
              <div className="text-base text-gray-900 mt-2 whitespace-pre-line">{msg.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 