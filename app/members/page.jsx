"use client";
import { useEffect, useState } from "react";

export default function MembersPage() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://farid-production.up.railway.app/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Üyeler</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m) => (
          <div
            key={m.id}
            className="bg-light/20 rounded-xl p-4 flex items-center space-x-4 shadow hover:shadow-lg transition"
          >
            <img
              src={m.avatar}
              alt={m.username}
              className="w-12 h-12 rounded-full border-2 border-light"
            />
            <div>
              <p className="font-semibold">{m.username}</p>
              <p className="text-sm opacity-80">#{m.discriminator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
