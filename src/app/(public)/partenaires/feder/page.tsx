import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financement FEDER — Région Hauts-de-France & Union européenne | Société à Mission Europe",
  description: "Le projet Société à Mission Europe est cofinancé par l'Union européenne et la Région Hauts-de-France via le Fonds Européen de Développement Régional (FEDER).",
  alternates: { canonical: "https://societe-mission-europe.com/partenaires/feder" },
};

export default function FederPage() {
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
            <Image src="/logos/feder-double-v2.png" alt="Logo Région Hauts-de-France & Union européenne — FEDER" width={300} height={100} className="h-16 w-auto object-contain" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm font-bold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                Co-financeur principal
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Financement FEDER
              </h1>
              <p className="text-xl text-navy-700">Région Hauts-de-France & Union européenne</p>
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

          {/* Qu'est-ce que le FEDER ? */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Qu&apos;est-ce que le FEDER ?</h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 leading-relaxed mb-4">
              Le <strong>Fonds Européen de Développement Régional (FEDER)</strong> est l&apos;un des principaux instruments financiers de la politique de cohésion de l&apos;Union européenne. Il vise à renforcer la cohésion économique, sociale et territoriale en réduisant les disparités entre les régions européennes.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              Le FEDER finance des projets dans des domaines stratégiques : innovation et recherche, transition numérique, compétitivité des PME, économie à faibles émissions de carbone, et développement durable. Il soutient notamment les projets de recherche-action portés par les universités et les acteurs territoriaux.
            </p>
            <p className="text-navy-700 leading-relaxed">
              En France, le FEDER est géré au niveau régional. Dans les Hauts-de-France, c&apos;est la Région qui assure le rôle d&apos;autorité de gestion et sélectionne les projets éligibles au co-financement européen.
            </p>
          </div>

          {/* Le financement du projet */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Le financement du projet Société à Mission Europe</h2>
            <div className="tricolor-separator" />
            <div className="bg-blue-50 border border-blue-200 rounded-card p-6 md:p-8 mb-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-navy-800 mb-3">Programme</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    Le projet Société à Mission Europe s&apos;inscrit dans le <strong>Programme Opérationnel FEDER 2021-2027</strong> de la Région Hauts-de-France, au titre de l&apos;objectif stratégique &laquo;&nbsp;Une Europe plus intelligente&nbsp;&raquo;, axé sur la recherche et l&apos;innovation.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-navy-800 mb-3">Durée</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    Le projet est financé pour une durée de <strong>3 ans (2025-2028)</strong>, couvrant l&apos;ensemble du programme de recherche-action : études, événements, publications et diffusion des résultats.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-navy-700 leading-relaxed mb-4">
              Le co-financement FEDER, associé au soutien de la <strong>Région Hauts-de-France</strong>, constitue le socle financier du projet. Il permet de structurer un programme ambitieux de recherche-action autour de trois axes — territorial, national et européen — et de mobiliser un réseau de plus de 30 partenaires académiques et institutionnels.
            </p>
            <p className="text-navy-700 leading-relaxed">
              Ce financement couvre notamment les postes de recherche (ingénieures d&apos;études, doctorant), l&apos;organisation d&apos;événements scientifiques (colloques, Summer Schools, journées d&apos;étude), la production et la diffusion des publications, ainsi que les missions de terrain auprès des entreprises à mission du territoire.
            </p>
          </div>

          {/* Porteur du projet */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Porteur du projet</h2>
            <div className="tricolor-separator" />
            <div className="bg-beige-50 rounded-card p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
              <Image src="/logos/uphf.svg" alt="Logo UPHF" width={120} height={80} className="h-16 w-auto object-contain shrink-0" />
              <div>
                <h3 className="font-bold text-navy-800 mb-2">Université Polytechnique Hauts-de-France (UPHF)</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  L&apos;UPHF est l&apos;établissement porteur du projet auprès de la Région et de l&apos;Union européenne. Le projet est rattaché au <strong>LARSH</strong> (Laboratoire de Recherche Sociétés &amp; Humanités) et porté scientifiquement par Matthieu Caron (UPHF) et Stéphane Vernac (UPJV).
                </p>
              </div>
            </div>
          </div>

          {/* Obligations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Obligations de publicité</h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 leading-relaxed mb-4">
              Conformément aux règles de communication des fonds européens, le projet Société à Mission Europe mentionne le co-financement de l&apos;Union européenne et de la Région Hauts-de-France sur l&apos;ensemble de ses supports de communication, publications et événements.
            </p>
            <div className="flex justify-center">
              <Image src="/logos/feder-double-v2.png" alt="Cofinancé par l'Union européenne — Région Hauts-de-France" width={400} height={100} className="h-20 w-auto object-contain" />
            </div>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-4">
            <Link href="/projet" className="btn-primary inline-flex items-center gap-2">
              Découvrir le projet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/partenaires" className="btn-secondary inline-flex items-center gap-2">
              Tous les partenaires
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
