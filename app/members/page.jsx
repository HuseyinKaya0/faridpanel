"use client";
import { useEffect, useState } from "react";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // API'den veri çek
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/members"); // <- kendi API endpoint'in
        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error("API Hatası:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-950">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Üyeler</h1>

      {members.length === 0 ? (
        <p className="text-center text-gray-400">Hiç üye bulunamadı.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-gray-900 p-5 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-purple-600 mb-3"
              />
              <h2 className="text-xl font-semibold">{m.name}</h2>
              <p className="text-gray-400">{m.tag}</p>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-sm transition">
                Profili Gör
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
