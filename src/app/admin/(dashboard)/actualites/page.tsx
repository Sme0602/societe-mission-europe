import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Actualite } from "@/lib/types/database";
import Link from "next/link";
import { DeleteButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function ActualitesAdminPage() {
  const supabase = createServerSupabaseClient();

  const { data: actualites } = await supabase
    .from("actualites")
    .select("*")
    .order("date", { ascending: false });

  const list = (actualites ?? []) as Actualite[];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy-800">Actualités</h1>
          <p className="text-navy-700 mt-1">
            {list.length} article{list.length > 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/admin/actualites/new" className="btn-primary text-sm">
          + Nouvelle actualité
        </Link>
      </div>

      <div className="bg-white rounded-card border border-beige-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-beige-50 border-b border-beige-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Titre
              </th>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Catégorie
              </th>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Date
              </th>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Statut
              </th>
              <th className="text-right px-6 py-3 text-sm font-bold text-navy-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-beige-200">
            {list.map((article) => (
              <tr key={article.id} className="hover:bg-beige-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-navy-800">
                    {article.title}
                  </div>
                  {article.is_featured && (
                    <span className="text-xs text-orange-600 font-bold">
                      ⭐ À la une
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-navy-700">
                  {article.category}
                </td>
                <td className="px-6 py-4 text-sm text-navy-700">
                  {new Date(article.date).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                      article.is_published
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {article.is_published ? "Publié" : "Brouillon"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <Link
                    href={`/admin/actualites/${article.id}/edit`}
                    className="text-sm text-rose-600 hover:underline font-medium"
                  >
                    Modifier
                  </Link>
                  <DeleteButton id={article.id} title={article.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
