import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterFormFull } from "@/components/NewsletterForm";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Actualite } from "@/lib/types/database";

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Actualités et publications | Société à Mission Europe',
  description: 'Suivez l\'actualité du programme de recherche Société à Mission Europe : événements, publications, partenariats et avancées du projet.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/actualites' }
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ActualitesPage() {
  const supabase = createServerSupabaseClient();

  const { data } = await supabase
    .from("actualites")
    .select("*")
    .eq("is_published", true)
    .order("date", { ascending: false });

  const actualites = (data ?? []) as Actualite[];
  const featured = actualites.find((a) => a.is_featured);
  const others = actualites.filter((a) => !a.is_featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-medium mb-6">
              Actualités
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Actualités du programme{" "}
              <span className="text-rose-600">Société à Mission Europe</span>
            </h1>
            <p className="text-xl text-navy-700 leading-relaxed">
              Événements, publications, partenariats : restez informé des
              dernières actualités du projet Société à Mission Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 text-white">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    À la une
                  </span>
                  <div className="text-rose-50 text-sm font-medium mb-3">
                    {formatDate(featured.date)} · {featured.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-rose-50 text-lg leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-rose-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    S&apos;inscrire à l&apos;événement
                  </Link>
                </div>
                <div className="hidden lg:flex items-center justify-center bg-rose-700/50 p-16">
                  <div className="bg-white/10 backdrop-blur-sm rounded-card p-10 text-center border border-white/20">
                    <div className="text-7xl font-bold text-white mb-3">
                      {new Date(featured.date).getDate()}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {new Date(featured.date).toLocaleDateString("fr-FR", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="text-rose-50 mb-6">9h00 – 17h00</div>
                    <div className="pt-6 border-t border-white/20">
                      <div className="text-white font-semibold">
                        Wallers Arenberg
                      </div>
                      <div className="text-rose-50 text-sm mt-1">
                        Hauts-de-France
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Liste des actualités */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">
            Toutes les actualités
          </h2>
          <div className="tricolor-separator mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Color bar */}
                <div className="h-1 tricolor-separator" />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rose-600 text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-navy-700">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-rose-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  {article.source_url && (
                    <a
                      href={article.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-navy-700 hover:text-rose-600 text-xs font-medium transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Voir la source
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Restez informé</h2>
          <div className="tricolor-separator mx-auto mb-4" />
          <p className="section-subtitle mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières
            actualités du projet directement dans votre boîte mail.
          </p>
          <NewsletterFormFull />
        </div>
      </section>
    </>
  );
}
