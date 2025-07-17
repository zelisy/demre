import React from "react";

export default function ProfilePage() {
  // Örnek kullanıcı bilgisi, ileride context ile dinamik yapılacak
  const user = {
    name: "Zeliha Demre",
    email: "zeliha@example.com",
    role: "admin",
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">Profilim</h1>
      <div className="space-y-2">
        <div><span className="font-semibold">İsim:</span> {user.name}</div>
        <div><span className="font-semibold">Email:</span> {user.email}</div>
        <div><span className="font-semibold">Rol:</span> {user.role}</div>
      </div>
      <div className="mt-8">
        <button className="bg-primary text-textlight px-4 py-2 rounded hover:bg-secondary">Bilgileri Düzenle</button>
      </div>
    </div>
  );
} 