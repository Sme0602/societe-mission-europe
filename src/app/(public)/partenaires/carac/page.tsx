import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carac — Partenaire financier | Société à Mission Europe",
  description: "La Carac, mutuelle d'épargne et partenaire financier du projet Société à Mission Europe.",
  alternates: { canonical: "https://societe-mission-europe.com/partenaires/carac" },
};

export default function CaracPage() {
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
            <Image src="/logos/carac.png" alt="Logo Carac" width={200} height={120} className="h-20 w-auto object-contain" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-bold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                Soutien financier
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Carac
              </h1>
              <p className="text-xl text-navy-700">Mutuelle d&apos;épargne, retraite et prévoyance</p>
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
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-navy-800 mb-1">Partenaire financier</h3>
                <p className="text-sm text-navy-600">Soutien financier au projet de recherche</p>
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Présentation</h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 leading-relaxed">
              La Carac est une mutuelle d&apos;épargne, de retraite et de prévoyance fondée en 1924. Société à mission, elle s&apos;engage pour une épargne responsable et solidaire au service de ses adhérents et de l&apos;intérêt général.
            </p>
            <p className="text-navy-700 leading-relaxed">
              En tant que partenaire financier du projet Société à Mission Europe, la Carac contribue directement au financement de la recherche sur le modèle de l&apos;entreprise à mission en France et en Europe.
            </p>
          </div>

          {/* Événement */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Événement organisé avec la Carac</h2>
            <div className="tricolor-separator" />
            <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/carac/equipe-colloque.jpg" alt="L'équipe Société à Mission Europe au colloque Carac" fill className="object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    Colloque
                  </span>
                  <span className="text-sm text-navy-500">3 avril 2026</span>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  L&apos;entreprise à mission face à l&apos;enjeu du partage de la valeur
                </h3>
                <p className="text-navy-700 leading-relaxed mb-4">
                  Dans le cadre de notre partenariat avec la Carac et l&apos;Observatoire de l&apos;Éthique Publique, l&apos;équipe du projet — Alix Vanmeervenne, Sarah Vandenbroucke et Pablo Maria — est intervenue lors du colloque organisé par la Carac. Trois tables rondes ont réuni chercheurs, dirigeants et comités de mission pour examiner le partage de la valeur dans l&apos;entreprise à mission.
                </p>
                <div className="flex items-center gap-2 text-sm text-navy-500 mb-6">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Salons de l&apos;Aéro-Club, Paris
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <a href="/documents/restitution-carac-3-avril-2026.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 font-medium text-sm rounded-lg hover:bg-orange-100 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Compte rendu (PDF)
                  </a>
                  <a href="https://www.observatoireethiquepublique.com/nos-propositions/dans-la-presse/2026/restitution-de-la-journee-du-3-avril-2026.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-beige-100 text-navy-700 font-medium text-sm rounded-lg hover:bg-beige-200 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Lire sur le site de l&apos;OEP
                  </a>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {[
                    { src: "/images/carac/galerie/carac-1.jpg", alt: "L'équipe du projet devant l'écran du colloque" },
                    { src: "/images/carac/galerie/carac-2.jpg", alt: "Table ronde — Ce que l'on doit entendre par partage de la valeur" },
                    { src: "/images/carac/galerie/carac-3.jpg", alt: "Vue de la salle et des intervenants" },
                    { src: "/images/carac/galerie/carac-4.jpg", alt: "Intervention sur les trois départements de l'éthique" },
                    { src: "/images/carac/galerie/carac-5.jpg", alt: "Intervenant au colloque Carac" },
                    { src: "/images/carac/galerie/carac-6.jpg", alt: "Table ronde avec les participants" },
                    { src: "/images/carac/galerie/carac-7.jpg", alt: "Discussion entre intervenants" },
                  ].map((photo) => (
                    <div key={photo.src} className="relative h-24 sm:h-28 rounded-lg overflow-hidden">
                      <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lien externe */}
          <div className="flex flex-wrap gap-4">
            <a href="https://www.carac.fr" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Visiter le site de la Carac
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
