import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = createServerSupabaseClient();

  const [
    { count: subscriberCount },
    { count: articleCount },
    { count: messageCount },
    { count: unreadCount },
  ] = await Promise.all([
    supabase
      .from("newsletter_subscribers")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("actualites")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .eq("is_read", false),
  ]);

  const stats = [
    {
      label: "Abonnés newsletter",
      count: subscriberCount ?? 0,
      href: "/admin/newsletter",
      color: "bg-orange-500",
    },
    {
      label: "Articles publiés",
      count: articleCount ?? 0,
      href: "/admin/actualites",
      color: "bg-rose-600",
    },
    {
      label: "Messages reçus",
      count: messageCount ?? 0,
      href: "/admin/messages",
      color: "bg-navy-800",
    },
    {
      label: "Messages non lus",
      count: unreadCount ?? 0,
      href: "/admin/messages",
      color: "bg-jaune-400",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-800 mb-2">Dashboard</h1>
      <p className="text-navy-700 mb-8">
        Bienvenue dans l&apos;administration du site Société à Mission Europe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-card p-6 border border-beige-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`w-10 h-10 rounded-lg ${stat.color} text-white flex items-center justify-center font-bold text-lg mb-3`}
            >
              {stat.count}
            </div>
            <p className="text-sm font-medium text-navy-700">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-card p-6 border border-beige-200">
        <h2 className="text-lg font-bold text-navy-800 mb-4">
          Actions rapides
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/actualites/new" className="btn-primary text-sm">
            + Nouvelle actualité
          </Link>
          <Link href="/admin/newsletter" className="btn-outline text-sm">
            Voir les abonnés
          </Link>
          <Link href="/admin/messages" className="btn-outline text-sm">
            Voir les messages
          </Link>
        </div>
      </div>
    </div>
  );
}
