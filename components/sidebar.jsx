"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { path: "/", label: "Ana Sayfa" },
  { path: "/members", label: "Üyeler" },
  { path: "/tickets", label: "Ticket" },
  { path: "/bans", label: "Banlılar" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-accent p-6 shadow-xl flex flex-col rounded-r-2xl">
      <h2 className="text-xl font-semibold mb-6">Menüler</h2>
      <nav className="space-y-3">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={`block px-4 py-2 rounded-xl transition ${
              pathname === menu.path
                ? "bg-light text-primary font-bold"
                : "hover:bg-light/40"
            }`}
          >
            {menu.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
