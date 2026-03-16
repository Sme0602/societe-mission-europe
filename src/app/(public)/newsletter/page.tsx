import type { Metadata } from "next";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Newsletter } from "@/lib/types/database";
import { NewsletterFormFull } from "@/components/NewsletterForm";
import PdfViewer from "@/components/PdfViewer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Newsletters | Société à Mission Europe",
  description:
    "Consultez et téléchargez les newsletters du projet Société à Mission Europe. Restez informé des avancées de la recherche.",
  alternates: {
    canonical: "https://societe-mission-europe.surge.sh/newsletter",
  },
};

export default async function NewsletterPage() {
  const supabase = createServerSupabaseClient();

  const { data } = await supabase
    .from("newsletters")
    .select("*")
    .eq("is_published", true)
    .order("published_date", { ascending: false });

  const newsletters = (data ?? []) as Newsletter[];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              Newsletters
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos{" "}
              <span className="text-rose-600">newsletters</span>
            </h1>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-navy-700 leading-relaxed">
              Retrouvez toutes les newsletters du projet Société à Mission
              Europe. Consultez-les directement en ligne ou téléchargez-les
              au format PDF.
            </p>
          </div>
        </div>
      </section>

      {/* Liste des newsletters */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsletters.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-navy-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                Bientôt disponible
              </h2>
              <p className="text-navy-700 max-w-md mx-auto">
                Notre première newsletter est en cours de préparation.
                Inscrivez-vous ci-dessous pour être notifié(e) dès sa parution.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {newsletters.map((nl) => (
                <div
                  key={nl.id}
                  className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-beige-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {nl.issue_number && (
                            <span className="inline-block px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full">
                              N°{nl.issue_number}
                            </span>
                          )}
                          <span className="text-sm text-navy-700">
                            {new Date(nl.published_date).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-navy-800">
                          {nl.title}
                        </h2>
                        {nl.description && (
                          <p className="text-navy-700 mt-1">{nl.description}</p>
                        )}
                      </div>
                      <a
                        href={nl.pdf_url}
                        download
                        className="btn-primary text-sm shrink-0 inline-flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Télécharger PDF
                      </a>
                    </div>
                  </div>

                  {/* PDF Viewer */}
                  <PdfViewer url={nl.pdf_url} title={nl.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter inscription */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Recevez nos prochaines newsletters</h2>
          <div className="tricolor-separator w-24 mx-auto mb-4" />
          <p className="section-subtitle mb-8">
            Inscrivez-vous pour recevoir les prochains numéros directement dans
            votre boîte mail.
          </p>
          <NewsletterFormFull />
        </div>
      </section>
    </>
  );
}
