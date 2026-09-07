import { createServerSupabaseClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const INTEREST_LABELS: Record<string, string> = {
  partenaire: "Devenir partenaire",
  "groupe-travail": "Rejoindre un GT",
  informe: "Rester informé",
};

const GT_LABELS: Record<string, string> = {
  europe: "Europe",
  national: "National",
  territorial: "Territorial",
};

export default async function DemandesContactPage() {
  const supabase = createServerSupabaseClient();

  const { data: demandes, error } = await supabase
    .from("demandes_contact")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">Demandes de contact</h1>
          <p className="text-navy-500 text-sm mt-1">
            Messages reçus via le formulaire de contact du site
          </p>
        </div>
      </div>

      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          Erreur de chargement : {error.message}
        </div>
      ) : !demandes || demandes.length === 0 ? (
        <div className="bg-white rounded-xl p-12 border border-beige-200 shadow-sm text-center">
          <svg className="w-12 h-12 text-navy-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <p className="text-navy-600 font-medium">Aucune demande de contact pour le moment.</p>
          <p className="text-navy-400 text-sm mt-1">Les prochaines demandes envoyées via le formulaire apparaîtront ici.</p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-xl p-4 border border-beige-200 shadow-sm mb-6">
            <p className="text-sm text-navy-600">
              Total : <span className="font-bold text-navy-800">{demandes.length}</span> demande(s)
            </p>
          </div>

          <div className="space-y-4">
            {demandes.map((d) => (
              <div key={d.id} className="bg-white rounded-xl border border-beige-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-navy-800">
                      {d.prenom} {d.nom}
                    </h3>
                    <a href={`mailto:${d.email}`} className="text-sm text-rose-600 hover:underline">
                      {d.email}
                    </a>
                    {d.organisation && (
                      <p className="text-sm text-navy-500 mt-0.5">{d.organisation}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {d.email_sent ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Email envoyé
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 text-xs font-medium rounded-full">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        Email échoué
                      </span>
                    )}
                    <span className="text-xs text-navy-400">
                      {d.created_at
                        ? new Date(d.created_at).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "—"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {(d.interests as string[])?.map((interest: string) => (
                    <span key={interest} className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                      {INTEREST_LABELS[interest] || interest}
                    </span>
                  ))}
                  {d.groupe_travail && (
                    <span className="inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">
                      GT {GT_LABELS[d.groupe_travail] || d.groupe_travail}
                    </span>
                  )}
                </div>

                {d.expertise && (
                  <p className="text-sm text-navy-600 mb-2">
                    <span className="font-medium text-navy-700">Expertise :</span> {d.expertise}
                  </p>
                )}

                {d.message && (
                  <div className="bg-beige-50 rounded-lg p-4 mt-3">
                    <p className="text-sm text-navy-700 whitespace-pre-wrap">{d.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
