"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const links = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/actualites", label: "Actualités", icon: "📰" },
  { href: "/admin/newsletters-pdf", label: "Newsletters PDF", icon: "📄" },
  { href: "/admin/newsletter", label: "Abonnés", icon: "📧" },
  { href: "/admin/messages", label: "Messages", icon: "💬" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="w-64 bg-navy-800 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-navy-700">
        <Link href="/" className="block">
          <span className="text-orange-300 font-bold text-sm block">
            Société à Mission
          </span>
          <span className="text-rose-300 font-bold text-xs">
            Europe — Admin
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-rose-600 text-white"
                  : "text-white/70 hover:bg-navy-700 hover:text-white"
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-navy-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-navy-700 hover:text-white transition-colors w-full"
        >
          <span>🚪</span>
          <span>Déconnexion</span>
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 mt-1 rounded-lg text-xs text-white/50 hover:text-white/70 transition-colors"
        >
          ← Retour au site
        </Link>
      </div>
    </aside>
  );
}
