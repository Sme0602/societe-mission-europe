import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";

export const dynamic = "force-dynamic";

const SECTIONS = [
  {
    title: "Mailing Lists",
    lists: [
      { dbValue: "newsletter", slug: "generale", label: "Liste générale", description: "Newsletter & événements", color: "bg-orange-500" },
      { dbValue: "partenaires", slug: "partenaires", label: "Partenaires", description: "Partenaires institutionnels", color: "bg-rose-600" },
    ],
  },
  {
    title: "Groupes de Travail",
    lists: [
      { dbValue: "gt_territoire", slug: "gt-territoire", label: "GT Territoire (HDF)", description: "Hauts-de-France", color: "bg-jaune-400" },
      { dbValue: "gt_national", slug: "gt-national", label: "GT National (France)", description: "Échelle nationale", color: "bg-rose-600" },
      { dbValue: "gt_europe", slug: "gt-europe", label: "GT Europe", description: "Échelle européenne", color: "bg-blue-600" },
    ],
  },
  {
    title: "Conseils Scientifiques",
    lists: [
      { dbValue: "cs_territoire", slug: "cs-territoire", label: "CS Territoire", description: "Conseil scientifique HDF", color: "bg-emerald-600" },
      { dbValue: "cs_national", slug: "cs-national", label: "CS National", description: "Conseil scientifique national", color: "bg-emerald-600" },
      { dbValue: "cs_europe", slug: "cs-europe", label: "CS Europe", description: "Conseil scientifique européen", color: "bg-emerald-600" },
    ],
  },
];

export default async function AdminDashboard() {
  const supabase = createServerSupabaseClient();

  const { data: allContacts } = await supabase
    .from("contributeurs")
    .select("groupes");

  const { count: webCount } = await supabase
    .from("newsletter_subscribers")
    .select("*", { count: "exact", head: true });

  const totalCount = allContacts?.length ?? 0;

  const countByGroup = (dbValue: string) =>
    (allContacts ?? []).filter((c) => c.groupes?.includes(dbValue)).length;

  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-800 mb-2">Dashboard</h1>
      <p className="text-navy-700 mb-8">
        Gestion des mailing lists et groupes de travail.
      </p>

      {/* Total */}
      <div className="bg-white rounded-card p-6 border border-beige-200 shadow-sm mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-navy-600">Total contacts uniques</p>
            <p className="text-4xl font-bold text-navy-800">{totalCount}</p>
          </div>
        </div>
      </div>

      {/* Demandes web */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-navy-800 mb-4">
          Demandes via site web
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/demandes-web"
            className="bg-white rounded-card p-5 border border-beige-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xl mb-3">
              {webCount ?? 0}
            </div>
            <p className="text-sm font-bold text-navy-800">
              Nouvelles demandes
            </p>
            <p className="text-xs text-navy-600 mt-1">
              Inscriptions via le formulaire du site
            </p>
          </Link>
        </div>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.title} className="mb-8">
          <h2 className="text-lg font-bold text-navy-800 mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.lists.map((liste) => {
              const count = countByGroup(liste.dbValue);
              return (
                <Link
                  key={liste.dbValue}
                  href={`/admin/mailing-lists/${liste.slug}`}
                  className="bg-white rounded-card p-5 border border-beige-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${liste.color} text-white flex items-center justify-center font-bold text-xl mb-3`}
                  >
                    {count}
                  </div>
                  <p className="text-sm font-bold text-navy-800">
                    {liste.label}
                  </p>
                  <p className="text-xs text-navy-600 mt-1">
                    {liste.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
