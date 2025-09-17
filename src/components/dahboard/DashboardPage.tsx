"use client";

import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) return <p>Yükleniyor...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-color3 via-color2 to-color4">
      <div className="backdrop-blur-lg bg-white/20 p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Hoş Geldin 👋</h1>
        <p className="mb-2">
          <strong>Kullanıcı:</strong> {session.user?.name}
        </p>
        <p className="mb-6">
          <strong>Email:</strong> {session.user?.email}
        </p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}
