"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function EvenementsContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
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
      </section>

      {/* Summer School — À venir */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("À venir", "Upcoming")}
          </h2>
          <div className="tricolor-separator mb-8" />

          <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  {t("Prochain événement", "Next Event")}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Summer School
                </h3>
                <p className="text-rose-50 text-lg leading-relaxed mb-6">
                  {t(
                    "Deux jours d'échanges et de travail collectif réunissant chercheurs, praticiens et étudiants autour de la société à mission en Europe.",
                    "Two days of exchange and collective work bringing together researchers, practitioners and students around the mission-driven company in Europe."
                  )}
                </p>
                <div className="flex flex-wrap gap-6 text-rose-100 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t("25-26 juin 2026", "25-26 June 2026")}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Lille
                  </div>
                </div>
                <p className="text-rose-200 text-sm italic">
                  {t(
                    "Programme détaillé à venir prochainement.",
                    "Detailed programme coming soon."
                  )}
                </p>
              </div>
              <div className="hidden lg:flex items-center justify-center bg-rose-700/50 p-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-card p-10 text-center border border-white/20">
                  <div className="text-7xl font-bold text-white mb-3">
                    25-26
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {t("juin 2026", "June 2026")}
                  </div>
                  <div className="text-rose-200 text-sm mt-2">Lille</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colloque Carac */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="p-8 md:p-10 lg:col-span-2">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    {t("Participation", "Participation")}
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
                    "Dans le cadre de notre partenariat avec la Carac et l'Observatoire de l'Éthique Publique, l'équipe du projet de recherche Société à Mission Europe — Alix Vanmeervenne, Sarah Vandenbroucke et Pablo Maria — interviendra lors du colloque organisé par la Carac.",
                    "As part of our partnership with Carac and the Observatoire de l'Éthique Publique, the Société à Mission Europe research team — Alix Vanmeervenne, Sarah Vandenbroucke and Pablo Maria — will speak at the conference organised by Carac."
                  )}
                </p>
                <p className="text-navy-700 leading-relaxed mb-6">
                  {t(
                    "Cet événement sera l'occasion d'échanger sur les défis et perspectives liés au partage de la valeur dans le cadre du modèle de l'entreprise à mission.",
                    "This event will be an opportunity to discuss the challenges and perspectives related to value sharing within the mission-driven company model."
                  )}
                </p>
                <div className="flex flex-wrap gap-4 text-navy-700 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t("Vendredi 3 avril 2026", "Friday 3 April 2026")}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {t("Salons de l'Aéro-Club, Paris", "Salons de l'Aéro-Club, Paris")}
                  </div>
                </div>
                <a
                  href="https://colloquemam.site.digitevent.com/page/informations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  {t("Programme et inscriptions", "Programme and Registration")}
                </a>
              </div>
              <div className="hidden lg:flex bg-gradient-to-br from-orange-50 to-beige-100 items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600 mb-2">3</div>
                  <div className="text-xl font-bold text-navy-800 mb-1">
                    {t("avril 2026", "April 2026")}
                  </div>
                  <div className="text-navy-600 text-sm">Paris</div>
                  <div className="mt-4 flex justify-center gap-3">
                    <Image src="/logos/carac.png" alt="Carac" width={60} height={60} className="h-10 w-auto object-contain" />
                    <Image src="/logos/observatoire.png" alt="Observatoire de l'Éthique Publique" width={60} height={60} className="h-10 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Événements passés */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("Événements passés", "Past Events")}
          </h2>
          <div className="tricolor-separator mb-8" />

          {/* Journée de lancement */}
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
      </section>
    </>
  );
}
