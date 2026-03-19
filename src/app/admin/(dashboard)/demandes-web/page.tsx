import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function DemandesWebPage() {
  const supabase = createServerSupabaseClient();

  const { data: subscribers, error } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false });

  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-800 mb-2">
        Nouvelles demandes via site web
      </h1>
      <p className="text-navy-700 mb-8">
        Personnes inscrites via le formulaire du site. Ces adresses ne sont pas
        ajoutées automatiquement aux mailing lists.
      </p>

      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-card p-4 text-red-700 text-sm">
          Erreur de chargement : {error.message}
        </div>
      ) : !subscribers || subscribers.length === 0 ? (
        <div className="bg-white rounded-card p-8 border border-beige-200 shadow-sm text-center text-navy-600">
          Aucune inscription pour le moment.
        </div>
      ) : (
        <>
          <div className="bg-white rounded-card p-4 border border-beige-200 shadow-sm mb-6">
            <p className="text-sm text-navy-600">
              Total : <span className="font-bold text-navy-800">{subscribers.length}</span> inscription(s)
            </p>
          </div>

          <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-beige-50 border-b border-beige-200">
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">
                    Date d&apos;inscription
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub) => (
                  <tr
                    key={sub.id ?? sub.email}
                    className="border-b border-beige-100 hover:bg-beige-50"
                  >
                    <td className="px-4 py-3 text-navy-800">
                      <a
                        href={`mailto:${sub.email}`}
                        className="text-rose-600 hover:underline"
                      >
                        {sub.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-navy-600">
                      {sub.subscribed_at
                        ? new Date(sub.subscribed_at).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
