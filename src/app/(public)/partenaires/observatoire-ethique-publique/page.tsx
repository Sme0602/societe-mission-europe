import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Observatoire de l'Éthique Publique — Partenaire | Société à Mission Europe",
  description: "L'Observatoire de l'Éthique Publique, partenaire financier et administratif du projet Société à Mission Europe. Think tank dédié à l'éthique publique.",
  alternates: { canonical: "https://societe-mission-europe.com/partenaires/observatoire-ethique-publique" },
};

export default function OEPPage() {
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
            <Image src="/logos/observatoire.png" alt="Logo Observatoire de l'Éthique Publique" width={200} height={120} className="h-20 w-auto object-contain" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-bold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                Soutien financier
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Observatoire de l&apos;Éthique Publique
              </h1>
              <p className="text-xl text-navy-700">Think tank dédié à l&apos;éthique publique</p>
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
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-navy-800 mb-1">Partenaire financier</h3>
                <p className="text-sm text-navy-600">Soutien financier au projet de recherche</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="font-bold text-navy-800 mb-1">Appui administratif</h3>
                <p className="text-sm text-navy-600">Soutien logistique et organisationnel</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="font-bold text-navy-800 mb-1">Publication d&apos;études</h3>
                <p className="text-sm text-navy-600">Diffusion des travaux de recherche</p>
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Présentation</h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 leading-relaxed">
              L&apos;Observatoire de l&apos;Éthique Publique (OEP) est un think tank français fondé et présidé par René Dosière, ancien député. Il est dédié à l&apos;analyse et à la promotion de l&apos;éthique dans la sphère publique et le monde de l&apos;entreprise.
            </p>
            <p className="text-navy-700 leading-relaxed">
              Dans le cadre du projet Société à Mission Europe, l&apos;OEP joue un rôle structurant en tant que partenaire financier, en apportant un appui administratif au projet, et en contribuant à la publication et à la diffusion des études produites par les chercheurs.
            </p>
          </div>

          {/* Études publiées */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Études publiées avec l&apos;OEP</h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 leading-relaxed mb-6">
              L&apos;OEP a ouvert une chaire dédiée au sujet de la société à mission en Europe. Dans ce cadre, l&apos;Observatoire publie des études adjointes au projet afin de relayer les travaux de recherche et de leur donner un retentissement public.
            </p>
            <div className="space-y-4">
              <a href="https://www.observatoireethiquepublique.com/nos-propositions/etudes/une-premiere-typologie-des-modeles-alternatifs-dentreprises-en-europe.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-card border border-beige-200 p-5 hover:shadow-md hover:border-rose-200 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-rose-600 font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-800 group-hover:text-rose-600 transition-colors mb-1">Une première typologie des modèles alternatifs d&apos;entreprises en Europe</h3>
                    <p className="text-sm text-navy-500">Alix Vanmeervenne — 30 avril 2026</p>
                  </div>
                  <svg className="w-5 h-5 text-navy-300 group-hover:text-rose-500 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
              <a href="https://www.observatoireethiquepublique.com/nos-propositions/etudes/revolutionner-lethique-des-affaires-en-creant-la-societe-a-responsabilite-sociale.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-card border border-beige-200 p-5 hover:shadow-md hover:border-orange-200 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-800 group-hover:text-orange-600 transition-colors mb-1">Révolutionner l&apos;éthique des affaires en créant la Société à Responsabilité Sociale (SARS)</h3>
                    <p className="text-sm text-navy-500">Philippe Tonolo — 6 mai 2026</p>
                  </div>
                  <svg className="w-5 h-5 text-navy-300 group-hover:text-orange-500 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
              <a href="https://www.observatoireethiquepublique.com/nos-propositions/etudes/la-societa-benefit-vers-un-nouveau-paradigme-dentreprise.html" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-card border border-beige-200 p-5 hover:shadow-md hover:border-navy-200 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-navy-700 font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-800 group-hover:text-navy-600 transition-colors mb-1">La Società Benefit : vers un nouveau paradigme d&apos;entreprise ?</h3>
                    <p className="text-sm text-navy-500">Noémie Louvet — 18 mai 2026</p>
                  </div>
                  <svg className="w-5 h-5 text-navy-300 group-hover:text-navy-500 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
            </div>
            <div className="mt-6">
              <Link href="/travaux" className="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700 transition-colors">
                Voir toutes les publications du projet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Lien externe */}
          <div className="flex flex-wrap gap-4">
            <a href="https://observatoireethiquepublique.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Visiter le site de l&apos;OEP
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
