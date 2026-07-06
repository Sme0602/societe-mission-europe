import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ESPOL — Partenaire | Société à Mission Europe",
  description: "ESPOL (European School of Political and Social Sciences), partenaire du projet Société à Mission Europe. Co-financement d'un doctorat.",
  alternates: { canonical: "https://societe-mission-europe.com/partenaires/espol" },
};

export default function EspolPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/partenaires" className="inline-flex items-center gap-2 text-navy-600 hover:text-rose-600 transition-colors mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Retour aux partenaires
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <Image src="/logos/espol.svg" alt="Logo ESPOL" width={200} height={120} className="h-20 w-auto object-contain" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-bold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                Soutien financier
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                ESPOL
              </h1>
              <p className="text-xl text-navy-700">European School of Political and Social Sciences</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Type de partenariat */}
          <div className="bg-amber-50 border border-amber-200 rounded-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Partenariat avec le projet</h2>
            <div className="tricolor-separator" />
            <div className="flex justify-center">
              <div className="text-center max-w-xs">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <h3 className="font-bold text-navy-800 mb-1">Co-financement doctoral</h3>
                <p className="text-sm text-navy-600">Co-financement d&apos;un doctorat dans le cadre du projet</p>
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Présentation</h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 leading-relaxed">
              L&apos;ESPOL (European School of Political and Social Sciences) est l&apos;école européenne de sciences politiques et sociales de l&apos;Université Catholique de Lille. Elle forme des étudiants aux enjeux politiques, sociaux et économiques européens dans un environnement international et plurilingue.
            </p>
            <p className="text-navy-700 leading-relaxed">
              Dans le cadre du projet Société à Mission Europe, l&apos;ESPOL co-finance un doctorat de recherche consacré à l&apos;analyse du modèle de l&apos;entreprise à mission dans une perspective européenne comparée.
            </p>
          </div>

          {/* Événement */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Événement organisé avec ESPOL</h2>
            <div className="tricolor-separator" />
            <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  Journée d&apos;étude
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                  À venir — 2027
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">
                Société à Mission et ESS : Convergences et Complémentarités
              </h3>
              <p className="text-navy-700 leading-relaxed mb-4">
                Journée d&apos;étude organisée en partenariat avec ESPOL, consacrée aux convergences et complémentarités entre le modèle de la société à mission et l&apos;Économie Sociale et Solidaire (ESS). Cette rencontre réunira chercheurs, praticiens et acteurs institutionnels pour explorer les liens entre ces deux approches de l&apos;entreprise engagée.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>Date et lieu à confirmer — programmée pour 2027 dans le cadre de la deuxième année du projet.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lien externe */}
          <div className="flex flex-wrap gap-4">
            <a href="https://www.univ-catholille.fr/espol" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Visiter le site d&apos;ESPOL
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
            <Link href="/partenaires" className="btn-secondary inline-flex items-center gap-2">
              Tous les partenaires
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
