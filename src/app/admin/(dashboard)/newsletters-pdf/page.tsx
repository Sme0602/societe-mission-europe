import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Newsletter } from "@/lib/types/database";
import Link from "next/link";
import { DeleteNewsletterButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function NewslettersPdfAdminPage() {
  const supabase = createServerSupabaseClient();

  const { data: newsletters } = await supabase
    .from("newsletters")
    .select("*")
    .order("published_date", { ascending: false });

  const list = (newsletters ?? []) as Newsletter[];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy-800">Newsletters PDF</h1>
          <p className="text-navy-700 mt-1">
            {list.length} newsletter{list.length > 1 ? "s" : ""} publiée{list.length > 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/admin/newsletters-pdf/new" className="btn-primary text-sm">
          + Nouvelle newsletter
        </Link>
      </div>

      <div className="bg-white rounded-card border border-beige-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-beige-50 border-b border-beige-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                N°
              </th>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Titre
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
            {list.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-navy-700">
                  Aucune newsletter pour le moment.
                </td>
              </tr>
            ) : (
              list.map((nl) => (
                <tr key={nl.id} className="hover:bg-beige-50">
                  <td className="px-6 py-4 text-sm font-bold text-navy-800">
                    {nl.issue_number ? `#${nl.issue_number}` : "—"}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-navy-800">
                      {nl.title}
                    </div>
                    {nl.description && (
                      <p className="text-xs text-navy-700 mt-0.5 line-clamp-1">
                        {nl.description}
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-700">
                    {new Date(nl.published_date).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                        nl.is_published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {nl.is_published ? "Publiée" : "Brouillon"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <a
                      href={nl.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-rose-600 hover:underline font-medium"
                    >
                      Voir PDF
                    </a>
                    <DeleteNewsletterButton
                      id={nl.id}
                      title={nl.title}
                      pdfPath={nl.pdf_path}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
