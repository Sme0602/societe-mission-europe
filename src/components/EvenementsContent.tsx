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

      {/* Summer School — À venir */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("À venir", "Upcoming")}
          </h2>
          <div className="tricolor-separator mb-8" />

          {/* Summer School Hero Card */}
          <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-card overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 text-white">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  {t("Prochain événement", "Next Event")}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  Summer School 2026
                </h3>
                <p className="text-xl font-semibold text-rose-100 mb-4 italic">
                  Purpose at the Heart of Europe
                </p>
                <p className="text-rose-50 text-base leading-relaxed mb-6">
                  {t(
                    "Recherche, dialogue et action pour un nouveau modèle économique. Une journée exceptionnelle avec un keynote speaker de la Commission européenne et un panel de chercheurs européens de premier plan.",
                    "Research, dialogue and action for a new economic model. An exceptional day featuring a keynote speaker from the European Commission and a panel of leading European researchers."
                  )}
                </p>
                <div className="flex flex-wrap gap-6 text-rose-100 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t("Vendredi 26 juin 2026", "Friday, June 26, 2026")}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    9 rue Auguste Angellier, Lille
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("En présentiel & en ligne", "In-person & online")}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DslKKfWFMkelNenFHomhZkXYfZbtHVFJma-lCb2gVypURTg4N1k1UUxBV1o2WFpPQkhHOVZDQjFZVy4u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 font-bold rounded-lg hover:bg-rose-50 transition-colors"
                  >
                    {t("S'inscrire à l'après-midi", "Register for the afternoon")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href="/images/summer-school/programme-summer-school-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-colors"
                  >
                    {t("Voir le programme", "View the programme")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center bg-rose-700/50 p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/summer-school/visuel-afternoon.png"
                  alt="Summer School 2026 — Purpose at the Heart of Europe"
                  className="w-full max-w-md rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Visuels Summer School — 2 pages */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/summer-school/visuel-afternoon.png"
              alt="Summer School 2026 — Purpose at the Heart of Europe"
              className="w-full rounded-card border border-beige-200 shadow-sm"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/summer-school/visuel-council.png"
              alt={t(
                "European Scientific Council on Purpose — Chercheurs européens",
                "European Scientific Council on Purpose — European researchers"
              )}
              className="w-full rounded-card border border-beige-200 shadow-sm"
            />
          </div>

          {/* Programme détaillé */}
          <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">
                {t("Programme de la journée", "Programme of the day")}
              </h3>

              {/* Matinée */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-800">{t("Matinée", "Morning")}</h4>
                    <p className="text-sm text-navy-600">Amphi B — 9 rue Auguste Angellier, Lille</p>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                  <p className="text-amber-800 text-sm font-medium">
                    {t(
                      "⚠️ La matinée est réservée aux membres des groupes de travail du projet.",
                      "⚠️ The morning session is reserved for project working group members."
                    )}
                  </p>
                </div>
                <div className="space-y-3 ml-5 border-l-2 border-orange-200 pl-6">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-400" />
                    <p className="text-sm font-bold text-navy-800">9h00</p>
                    <p className="text-navy-700 text-sm">{t("Accueil café & petit déjeuner", "Coffee & breakfast welcome")}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-400" />
                    <p className="text-sm font-bold text-navy-800">9h30</p>
                    <p className="text-navy-700 text-sm">{t("Ouverture par l'équipe du projet — Contenu de la journée", "Opening by the project team — Overview of the day")}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-400" />
                    <p className="text-sm font-bold text-navy-800">10h00 – 12h00</p>
                    <p className="text-navy-700 text-sm font-medium">{t("Ateliers thématiques — Discussion par groupe de travail", "Thematic workshops — Working group discussions")}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Europe</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 text-rose-700 text-xs font-medium rounded-full">National</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">Territorial</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-orange-400" />
                    <p className="text-sm font-bold text-navy-800">12h00 – 14h00</p>
                    <p className="text-navy-700 text-sm">{t("Déjeuner — Cafétéria", "Lunch — Cafeteria")}</p>
                  </div>
                </div>
              </div>

              {/* Après-midi */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-800">{t("Après-midi", "Afternoon")}</h4>
                    <p className="text-sm text-navy-600">Amphi B — 9 rue Auguste Angellier, Lille</p>
                  </div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                  <p className="text-emerald-800 text-sm font-medium">
                    {t(
                      "✅ L'après-midi est ouverte au public — chercheurs, praticiens, étudiants et citoyens. En anglais.",
                      "✅ The afternoon is open to the public — researchers, practitioners, students and citizens. In English."
                    )}
                  </p>
                </div>
                <div className="space-y-3 ml-5 border-l-2 border-rose-200 pl-6">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-rose-500" />
                    <p className="text-sm font-bold text-navy-800">14h00 – 14h30</p>
                    <p className="text-navy-700 text-sm font-medium">{t("Discours d'ouverture — Keynote", "Opening Keynote Speech")}</p>
                    <div className="mt-2 bg-beige-50 rounded-lg p-3">
                      <p className="text-navy-800 font-bold text-sm">Michael Ristaniemi</p>
                      <p className="text-navy-600 text-xs">{t("Chef d'équipe, Unité de conduite responsable des entreprises, DG GROW, Commission européenne", "Team Leader, Responsible Business Conduct Unit, DG GROW, European Commission")}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-rose-500" />
                    <p className="text-sm font-bold text-navy-800">14h30 – 16h30</p>
                    <p className="text-navy-700 text-sm font-medium">European Scientific Council on Purpose</p>
                    <p className="text-navy-600 text-xs mt-1">{t("Présentations de chercheurs européens sur le concept de \"purpose\"", "Presentations by European researchers on the concept of \"purpose\"")}</p>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { name: "Alessio Bartolacelli", inst: "Università di Modena e Reggio Emilia" },
                        { name: "Carolina Cunha", inst: "University of Coimbra" },
                        { name: "Kevin Levillain", inst: "Mines Paris PSL" },
                        { name: "Florian Möslein", inst: "Marburg University" },
                        { name: "Anne Sanders", inst: "University of Bielefeld & Harvard Business School" },
                        { name: "Blanche Segrestin", inst: "Mines Paris PSL" },
                        { name: "Jeroen Veldman", inst: "Nyenrode Business University" },
                        { name: "Anne-Marie Weber", inst: "University of Warsaw & Max Planck Institute" },
                      ].map((speaker) => (
                        <div key={speaker.name} className="bg-beige-50 rounded-lg p-2 text-xs">
                          <p className="font-bold text-navy-800">{speaker.name}</p>
                          <p className="text-navy-600">{speaker.inst}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-navy-600 text-xs mt-2 italic">{t("Modéré par Sarah Vandenbroucke", "Moderated by Sarah Vandenbroucke")}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-rose-500" />
                    <p className="text-sm font-bold text-navy-800">17h00</p>
                    <p className="text-navy-700 text-sm font-medium">{t("Synthèse & perspectives pour l'avenir", "Summary & outlook for the future")}</p>
                    <div className="mt-2 bg-beige-50 rounded-lg p-3">
                      <p className="text-navy-800 font-bold text-sm">Stéphane Vernac & Emery Jacquillat</p>
                      <p className="text-navy-600 text-xs">{t("Porteur du projet Société à mission Europe & ancien PDG de la Camif, cofondateur de la CEM", "Lead of the Société à Mission Europe project & former CEO of Camif, co-founder of CEM")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA inscription */}
              <div className="mt-10 bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-navy-800 font-bold">{t("Rejoignez-nous le 26 juin à Lille !", "Join us on June 26 in Lille!")}</p>
                  <p className="text-navy-600 text-sm">{t("Inscription gratuite — en présentiel ou en ligne", "Free registration — in-person or online")}</p>
                </div>
                <a
                  href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DslKKfWFMkelNenFHomhZkXYfZbtHVFJma-lCb2gVypURTg4N1k1UUxBV1o2WFpPQkhHOVZDQjFZVy4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap"
                >
                  {t("S'inscrire à l'après-midi", "Register for the afternoon")}
                </a>
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

          <div className="space-y-8">
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
