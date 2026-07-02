"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function EvenementsContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              {t("Événements", "Events")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Nos", "Our")}{" "}
              <span className="text-rose-600">
                {t("événements", "Events")}
              </span>
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Retrouvez les temps forts du programme Société à Mission Europe.",
                "Discover the highlights of the Société à Mission Europe programme."
              )}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Événements passés */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("Événements passés", "Past Events")}
          </h2>
          <div className="tricolor-separator mb-8" />

          <div className="space-y-8">
            {/* Summer School — 25-26 juin 2026 */}
            <Link
              href="/evenements/summer-school-juin-2026/"
              className="block bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/summer-school/photos/photo-groupe.jpg"
                    alt={t(
                      "Photo de groupe — Summer School 2026, Sciences Po Lille",
                      "Group photo — Summer School 2026, Sciences Po Lille"
                    )}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-rose-500 rounded-full" />
                      Summer School
                    </span>
                    <span className="text-xs text-navy-700">
                      {t("25–26 juin 2026", "25–26 June 2026")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-1 group-hover:text-rose-600 transition-colors">
                    Summer School 2026
                  </h3>
                  <p className="text-base font-semibold text-rose-600 mb-4 italic">
                    Purpose at the Heart of Europe
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-6">
                    {t(
                      "Recherche, dialogue et action pour un nouveau modèle économique. Deux jours à Sciences Po Lille avec un keynote de Michael Ristaniemi (Commission européenne, DG GROW), le premier European Scientific Council on Purpose réunissant huit chercheurs européens de premier plan, et des ateliers thématiques par groupe de travail.",
                      "Research, dialogue and action for a new economic model. Two days at Sciences Po Lille featuring a keynote by Michael Ristaniemi (European Commission, DG GROW), the first European Scientific Council on Purpose bringing together eight leading European researchers, and thematic workshops by working group."
                    )}
                  </p>
                  <span className="inline-flex items-center gap-2 text-rose-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    {t("Voir le programme et les photos", "See the programme and photos")}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Colloque Carac — 3 avril 2026 */}
            <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/carac/equipe-colloque.jpg"
                    alt={t(
                      "L'équipe Société à Mission Europe au colloque Carac — Pablo Maria, Sarah Vandenbroucke, Alix Vanmeervenne",
                      "The Société à Mission Europe team at the Carac conference — Pablo Maria, Sarah Vandenbroucke, Alix Vanmeervenne"
                    )}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      {t("Colloque", "Conference")}
                    </span>
                    <span className="text-xs text-navy-700">
                      {t("3 avril 2026", "3 April 2026")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-4">
                    {t(
                      "L'entreprise à mission face à l'enjeu du partage de la valeur",
                      "The Mission-Driven Company and the Challenge of Value Sharing"
                    )}
                  </h3>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    {t(
                      "Dans le cadre de notre partenariat avec la Carac et l'Observatoire de l'Éthique Publique, l'équipe du projet — Alix Vanmeervenne, Sarah Vandenbroucke et Pablo Maria — est intervenue lors du colloque organisé par la Carac. Trois tables rondes ont réuni chercheurs, dirigeants et comités de mission pour examiner le partage de la valeur dans l'entreprise à mission.",
                      "As part of our partnership with Carac and the Observatoire de l'Éthique Publique, the project team — Alix Vanmeervenne, Sarah Vandenbroucke and Pablo Maria — spoke at the conference organised by Carac. Three roundtables brought together researchers, executives and mission committees to examine value sharing in mission-driven companies."
                    )}
                  </p>
                  <div className="flex flex-wrap gap-4 text-navy-700 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {t("Salons de l'Aéro-Club, Paris", "Salons de l'Aéro-Club, Paris")}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href="/documents/restitution-carac-3-avril-2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 font-medium text-sm rounded-lg hover:bg-orange-100 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t("Restitution (PDF)", "Summary report (PDF)")}
                    </a>
                    <a
                      href="https://www.observatoireethiquepublique.com/nos-propositions/dans-la-presse/2026/restitution-de-la-journee-du-3-avril-2026.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-beige-100 text-navy-700 font-medium text-sm rounded-lg hover:bg-beige-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t("Lire sur le site de l'OEP", "Read on the OEP website")}
                    </a>
                  </div>
                  {/* Mini galerie */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative h-20 rounded-lg overflow-hidden">
                      <Image src="/images/carac/salle-conference.jpg" alt={t("Vue de la salle du colloque", "Conference room view")} fill className="object-cover" />
                    </div>
                    <div className="relative h-20 rounded-lg overflow-hidden">
                      <Image src="/images/carac/table-ronde.jpg" alt={t("Table ronde sur le partage de la valeur", "Roundtable on value sharing")} fill className="object-cover" />
                    </div>
                    <div className="relative h-20 rounded-lg overflow-hidden">
                      <Image src="/images/carac/presentation-oep.jpg" alt={t("Présentation du projet FEDER", "FEDER project presentation")} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réunion GT Europe — 13 mars 2026 */}
            <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/gt-europe-kickoff.jpg"
                    alt={t(
                      "Réunion de lancement du Groupe de Travail Europe — visioconférence avec les chercheurs européens",
                      "European Working Group kick-off meeting — video conference with European researchers"
                    )}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      {t("Groupe de travail", "Working Group")}
                    </span>
                    <span className="text-xs text-navy-700">
                      {t("13 mars 2026", "13 March 2026")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-4">
                    {t(
                      "Lancement du Groupe de Travail Europe",
                      "Launch of the European Working Group"
                    )}
                  </h3>
                  <p className="text-navy-700 leading-relaxed">
                    {t(
                      "Première réunion du GT Europe réunissant des chercheurs européens de premier plan pour définir le cadre de recherche, la méthodologie et le calendrier de publication du programme sur l'axe européen.",
                      "First meeting of the European Working Group, bringing together leading European researchers to define the research framework, methodology and publication timeline for the European axis of the programme."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Journée de lancement — 6 février 2026 */}
            <Link
              href="/evenements/lancement-6-fevrier-2026/"
              className="block bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/images/lancement/photo-groupe.jpg"
                    alt={t(
                      "Photo de groupe — Journée de lancement, 6 février 2026",
                      "Group photo — Launch Day, 6 February 2026"
                    )}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-rose-50 text-rose-600">
                      {t("Lancement", "Launch")}
                    </span>
                    <span className="text-xs text-navy-700">
                      {t("6 février 2026", "6 February 2026")}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-3 group-hover:text-rose-600 transition-colors">
                    {t(
                      "Journée de lancement — Wallers-Arenberg",
                      "Launch Day — Wallers-Arenberg"
                    )}
                  </h3>
                  <p className="text-navy-700 leading-relaxed mb-6">
                    {t(
                      "Près de 300 participants réunis au 9-9bis de Wallers-Arenberg pour le lancement officiel du programme Société à Mission Europe. Keynotes, tables rondes, ateliers et networking.",
                      "Nearly 300 participants gathered at 9-9bis in Wallers-Arenberg for the official launch of the Société à Mission Europe programme. Keynotes, panel discussions, workshops and networking."
                    )}
                  </p>
                  <span className="inline-flex items-center gap-2 text-rose-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    {t("Voir le programme et les photos", "See the program and photos")}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
