import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { NewsletterSubscriber } from "@/lib/types/database";

export const dynamic = "force-dynamic";

export default async function NewsletterAdminPage() {
  const supabase = createServerSupabaseClient();

  const { data: subscribers } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false });

  const list = (subscribers ?? []) as NewsletterSubscriber[];

  const csvData = list
    .map((s) => `${s.email},${s.subscribed_at},${s.is_active}`)
    .join("\n");
  const csvHeader = "email,date_inscription,actif";
  const csvContent = `${csvHeader}\n${csvData}`;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy-800">Newsletter</h1>
          <p className="text-navy-700 mt-1">
            {list.length} abonné{list.length > 1 ? "s" : ""}
          </p>
        </div>
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`}
          download="newsletter-subscribers.csv"
          className="btn-outline text-sm"
        >
          📥 Exporter CSV
        </a>
      </div>

      <div className="bg-white rounded-card border border-beige-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-beige-50 border-b border-beige-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Email
              </th>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Date d&apos;inscription
              </th>
              <th className="text-left px-6 py-3 text-sm font-bold text-navy-800">
                Statut
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-beige-200">
            {list.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-10 text-center text-navy-700"
                >
                  Aucun abonné pour le moment.
                </td>
              </tr>
            ) : (
              list.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-beige-50">
                  <td className="px-6 py-4 text-sm text-navy-800 font-medium">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-navy-700">
                    {new Date(subscriber.subscribed_at).toLocaleDateString(
                      "fr-FR",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                        subscriber.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {subscriber.is_active ? "Actif" : "Inactif"}
                    </span>
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
