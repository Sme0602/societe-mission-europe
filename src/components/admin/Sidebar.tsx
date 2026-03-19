"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function IconDashboard() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h7v9H3V3zm0 12h7v6H3v-6zm11-12h7v6h-7V3zm0 9h7v9h-7v-9z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconPartners() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function IconTerritory() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconNational() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function IconEurope() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconScience() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function IconLogout() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  );
}

function IconBack() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );
}

function IconInbox() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-17.5 0V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v6.75m-19.5 0v4.5A2.25 2.25 0 004.5 20.25h15a2.25 2.25 0 002.25-2.25v-4.5" />
    </svg>
  );
}

const links = [
  { href: "/admin", label: "Dashboard", icon: <IconDashboard /> },
  { href: "/admin/demandes-web", label: "Demandes via site web", icon: <IconInbox /> },
];

const mailingLinks = [
  { href: "/admin/mailing-lists/generale", label: "Liste générale", icon: <IconMail /> },
  { href: "/admin/mailing-lists/partenaires", label: "Partenaires", icon: <IconPartners /> },
];

const gtLinks = [
  { href: "/admin/mailing-lists/gt-territoire", label: "GT Territoire (HDF)", icon: <IconTerritory /> },
  { href: "/admin/mailing-lists/gt-national", label: "GT National (FR)", icon: <IconNational /> },
  { href: "/admin/mailing-lists/gt-europe", label: "GT Europe", icon: <IconEurope /> },
];

function IconPublished() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

const publishedLinks = [
  { href: "/admin/contributeurs-publies/territoire", label: "GT Territoire", icon: <IconPublished /> },
  { href: "/admin/contributeurs-publies/national", label: "GT National", icon: <IconPublished /> },
  { href: "/admin/contributeurs-publies/europe", label: "GT Europe", icon: <IconPublished /> },
];

const csLinks = [
  { href: "/admin/mailing-lists/cs-territoire", label: "CS Territoire", icon: <IconScience /> },
  { href: "/admin/mailing-lists/cs-national", label: "CS National", icon: <IconScience /> },
  { href: "/admin/mailing-lists/cs-europe", label: "CS Europe", icon: <IconScience /> },
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

  const renderLinks = (items: typeof links) =>
    items.map((link) => {
      const isActive = pathname === link.href;
      return (
        <Link
          key={link.href}
          href={link.href}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            isActive
              ? "bg-rose-600 text-white"
              : "text-white/70 hover:bg-navy-700 hover:text-white"
          }`}
        >
          <span className="shrink-0">{link.icon}</span>
          <span>{link.label}</span>
        </Link>
      );
    });

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

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {renderLinks(links)}

        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
            Mailing Lists
          </p>
        </div>
        {renderLinks(mailingLinks)}

        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
            Groupes de Travail
          </p>
        </div>
        {renderLinks(gtLinks)}

        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
            Participants publiés
          </p>
        </div>
        {renderLinks(publishedLinks)}

        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider">
            Conseils Scientifiques
          </p>
        </div>
        {renderLinks(csLinks)}
      </nav>

      <div className="p-4 border-t border-navy-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-navy-700 hover:text-white transition-colors w-full"
        >
          <span className="shrink-0"><IconLogout /></span>
          <span>Déconnexion</span>
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 mt-1 rounded-lg text-xs text-white/50 hover:text-white/70 transition-colors"
        >
          <span className="shrink-0"><IconBack /></span>
          <span>Retour au site</span>
        </Link>
      </div>
    </aside>
  );
}
