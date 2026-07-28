"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

const travaux = [
  {
    numero: 1,
    titleFr: "Une première typologie des modèles alternatifs d'entreprises en Europe",
    titleEn: "A First Typology of Alternative Business Models in Europe",
    type: "Étude",
    typeEn: "Study",
    descFr:
      "Une étude comparative inédite des cadres juridiques et des modèles de gouvernance d'entreprise à travers les 27 États membres de l'Union européenne. Ce travail cartographique identifie les dispositifs existants en matière de raison d'être, d'objet social élargi et de gouvernance responsable, et propose une typologie des approches nationales.",
    descEn:
      "An unprecedented comparative study of legal frameworks and corporate governance models across all 27 EU member states. This cartographic work identifies existing mechanisms for corporate purpose, expanded social objects, and responsible governance, and proposes a typology of national approaches.",
    author: "Alix Vanmeervenne",
    date: "30 avril 2026",
    pages: null,
    color: "rose",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    oepUrl: "https://www.observatoireethiquepublique.com/nos-propositions/etudes/une-premiere-typologie-des-modeles-alternatifs-dentreprises-en-europe.html",
    linkUrl: null,
    linkLabelFr: null,
    linkLabelEn: null,
  },
  {
    numero: 2,
    titleFr:
      "Révolutionner l'éthique des affaires en créant la Société à Responsabilité Sociale (SARS)",
    titleEn:
      "Revolutionizing Business Ethics by Creating the Socially Responsible Company (SARS)",
    type: "Étude",
    typeEn: "Study",
    descFr:
      "Cette étude propose un nouveau modèle institutionnel — la SARS — reposant sur trois piliers : une répartition égalitaire du droit de propriété au sein de l'entreprise, un mécanisme de capitalisation dynamique adossé à une garantie publique, et une qualification spécifique des dirigeants intégrant les dimensions anthropologique, scientifique et économique.",
    descEn:
      "This study proposes a new institutional model — the SARS — based on three pillars: an egalitarian distribution of property rights within the company, a dynamic capitalisation mechanism backed by public guarantees, and specific management qualifications integrating anthropological, scientific and economic dimensions.",
    author: "Philippe Tonolo",
    date: "6 mai 2026",
    pages: 16,
    color: "orange",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    oepUrl: "https://www.observatoireethiquepublique.com/nos-propositions/etudes/revolutionner-lethique-des-affaires-en-creant-la-societe-a-responsabilite-sociale.html",
    linkUrl: null,
    linkLabelFr: null,
    linkLabelEn: null,
  },
  {
    numero: 3,
    titleFr:
      "La Società Benefit : vers un nouveau paradigme d'entreprise ?",
    titleEn:
      "The Società Benefit: Towards a New Corporate Paradigm?",
    type: "Étude",
    typeEn: "Study",
    descFr:
      "Alors que le rôle de l'entreprise dans la société fait l'objet de remises en question croissantes, l'Italie a introduit en 2016 les Società Benefit, permettant aux entreprises d'intégrer des objectifs sociaux et environnementaux dans leurs statuts. Cette étude examine le fonctionnement concret de ce modèle, les raisons qui poussent les entreprises à s'engager, ainsi que les principaux défis rencontrés dans leur mise en oeuvre.",
    descEn:
      "As the role of business in society faces growing scrutiny, Italy introduced the Società Benefit in 2016, allowing companies to integrate social and environmental objectives into their statutes. This study examines how this model works in practice, what motivates companies to adopt it, and the main challenges encountered in its implementation.",
    author: "Noémie Louvet",
    date: "18 mai 2026",
    pages: 85,
    color: "navy",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    oepUrl: "https://www.observatoireethiquepublique.com/nos-propositions/etudes/la-societa-benefit-vers-un-nouveau-paradigme-dentreprise.html",
    linkUrl: null,
    linkLabelFr: null,
    linkLabelEn: null,
  },
  {
    numero: 4,
    titleFr:
      "L'Europe : nouvelle frontière de la raison d'être et de la société à mission",
    titleEn:
      "Europe: The New Frontier of Corporate Purpose and the Purpose-Driven Company",
    type: "Libre propos",
    typeEn: "Opinion piece",
    descFr:
      "Dans ce libre propos, Martin Richer revient sur le lancement de la chaire « Société à mission européenne » le 6 février 2026 à Wallers-Arenberg et identifie neuf facteurs clés de succès pour faire de la raison d'être et de la société à mission la clé de voûte d'un modèle européen unifié de gouvernance responsable des entreprises.",
    descEn:
      "In this opinion piece, Martin Richer reflects on the launch of the 'European Purpose-Driven Company' chair on 6 February 2026 in Wallers-Arenberg and identifies nine key success factors for making corporate purpose and the purpose-driven company the cornerstone of a unified European model of responsible corporate governance.",
    author: "Martin Richer",
    date: "16 juin 2026",
    pages: null,
    color: "teal",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    oepUrl: "https://www.observatoireethiquepublique.com/nos-propositions/etudes/leurope-nouvelle-frontiere-de-la-raison-detre-et-de-la-societe-a-mission.html",
    linkUrl: "https://management-rse.com/leurope-nouvelle-frontiere-de-la-raison-detre-et-de-la-societe-a-mission-1-2/",
    linkLabelFr: "Lire sur le blog de l'auteur",
    linkLabelEn: "Read on the author's blog",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string; badge: string }> = {
  rose: {
    bg: "bg-rose-600",
    text: "text-rose-600",
    border: "border-rose-200",
    light: "bg-rose-50",
    badge: "bg-rose-100 text-rose-700",
  },
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-600",
    border: "border-orange-200",
    light: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
  },
  navy: {
    bg: "bg-navy-800",
    text: "text-navy-800",
    border: "border-navy-200",
    light: "bg-navy-50",
    badge: "bg-navy-100 text-navy-700",
  },
  teal: {
    bg: "bg-teal-600",
    text: "text-teal-600",
    border: "border-teal-200",
    light: "bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
  },
};

export default function TravauxContent() {
  const { t } = useI18n();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; href: string; label: string } | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              {t("Productions", "Outputs")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Nos", "Our")}{" "}
              <span className="text-rose-600">
                {t("travaux", "work")}
              </span>
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Les productions scientifiques du programme Société à Mission Europe, réalisées dans le cadre de la Chaire hébergée à l'Observatoire de l'Éthique Publique.",
                "The scientific publications of the Société à Mission Europe programme, produced within the Chair hosted at the Observatoire de l'Éthique Publique."
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

      {/* Section OEP */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Encart partenariat OEP */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">
              {t(
                "Publications avec l'Observatoire de l'Éthique Publique",
                "Publications with the Observatoire de l'Éthique Publique"
              )}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />
            <div className="bg-beige-50 rounded-card p-6 md:p-8 border border-beige-200">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-full bg-rose-100 text-rose-600 items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy-800 mb-2">
                    {t("Chaire Société à Mission en Europe", "European Purpose-Driven Company Chair")}
                  </h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    {t(
                      "L'Observatoire de l'Éthique Publique (OEP) est un partenaire proche du projet Société à Mission Europe. Peu avant le lancement du programme, l'OEP a ouvert une chaire dédiée au sujet de la société à mission en Europe. Dans ce cadre, l'Observatoire publie des études adjointes au projet afin de relayer les travaux de recherche et de leur donner un retentissement public.",
                      "The Observatoire de l'Éthique Publique (OEP) is a close partner of the Société à Mission Europe project. Shortly before the programme launched, the OEP established a dedicated chair on the topic of the purpose-driven company in Europe. In this framework, the Observatoire publishes studies alongside the project to disseminate the research and amplify its public impact."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {travaux.map((item) => {
              const colors = colorClasses[item.color];
              return (
                <div
                  key={item.numero}
                  className={`bg-white rounded-card border ${colors.border} shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="grid lg:grid-cols-[1fr_280px]">
                    {/* Content */}
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 ${colors.badge} rounded-full text-sm font-bold`}>
                          {t(item.type, item.typeEn)} N°{item.numero}
                        </span>
                        {item.pages && (
                          <span className="text-xs text-navy-500">
                            {item.pages} pages
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-navy-800 mb-4 leading-tight">
                        {t(item.titleFr, item.titleEn)}
                      </h2>

                      <p className="text-navy-700 leading-relaxed mb-6">
                        {t(item.descFr, item.descEn)}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {item.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {item.date}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        {item.linkUrl && (
                          <a
                            href={item.linkUrl}
                            className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm hover:gap-3 transition-all`}
                          >
                            {t(item.linkLabelFr!, item.linkLabelEn!)}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                        {item.oepUrl && (
                          <a
                            href={item.oepUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-navy-600 font-medium text-sm hover:text-rose-600 transition-colors"
                          >
                            {t("Lire sur le site de l'OEP", "Read on the OEP website")}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Side panel */}
                    <div className={`hidden lg:flex flex-col items-center justify-center ${colors.light} p-8`}>
                      <div className={`w-16 h-16 rounded-full ${colors.bg} text-white flex items-center justify-center mb-4`}>
                        {item.icon}
                      </div>
                      <div className={`text-5xl font-bold ${colors.text} mb-1`}>
                        N°{item.numero}
                      </div>
                      <div className="text-navy-600 text-sm text-center mt-2">
                        {t("Chaire Société à Mission Européenne", "European Purpose-Driven Company Chair")}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-navy-500 font-medium">
                          UPHF &bull; OEP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications des membres */}
      <section className="py-16 md:py-20 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">
            {t("Publications des membres du projet", "Project members' publications")}
          </h2>
          <div className="tricolor-separator w-24 mb-6" />
          <p className="text-navy-700 mb-10 max-w-3xl">
            {t(
              "Les chercheurs et contributeurs associés au projet publient également dans des revues académiques et professionnelles, contribuant au rayonnement de la recherche sur la société à mission en Europe.",
              "The researchers and contributors associated with the project also publish in academic and professional journals, contributing to the outreach of research on the purpose-driven company in Europe."
            )}
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-[1fr_200px]">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {t("Article", "Article")}
                    </span>
                    <span className="text-xs text-navy-500">{t("Juin 2026", "June 2026")}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-navy-800 mb-3 leading-tight">
                    {t(
                      "La composition du comité de mission, élément clé pour rétablir la crédibilité de la société à mission",
                      "The composition of the mission committee, a key element for restoring the credibility of the purpose-driven company"
                    )}
                  </h3>
                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    {t(
                      "Cet article analyse le cadre juridique du comité de mission, organe clé de la société à mission française. Il met en lumière les incertitudes d'interprétation apparues depuis la loi Pacte de 2019 — notamment sur la désignation de ses membres et la portée du contrôle exercé par les greffiers — et propose des pistes pour renforcer la cohérence et la crédibilité du dispositif.",
                      "This article analyses the legal framework of the mission committee, a key body in the French purpose-driven company. It highlights the interpretive uncertainties that have emerged since the Pacte Law of 2019 — particularly regarding the appointment of its members and the scope of registrar oversight — and proposes avenues for strengthening the coherence and credibility of the framework."
                    )}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Elena Codoni
                    </div>
                    <span className="text-navy-400">—</span>
                    <span className="text-navy-500 italic">
                      {t("Chercheuse associée au projet Société à Mission Europe", "Associate researcher, Société à Mission Europe project")}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-navy-600">
                      <a href="https://www.dalloz-revues.fr/revues/revue_des_societes-38.htm" target="_blank" rel="noopener noreferrer" className="font-medium text-navy-700 hover:text-rose-600 transition-colors underline underline-offset-2">Revue des Sociétés</a> — {t("Juin 2026", "June 2026")}
                    </div>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <button
                  onClick={() => setLightbox({
                    src: "/images/travaux/elena-codoni-revue-des-societes.png",
                    alt: t("Première page de l'article — La composition du comité de mission", "First page of the article — The composition of the mission committee"),
                    href: "https://www.dalloz-revues.fr/revues/revue_des_societes-38.htm",
                    label: t("Lire l'article sur Revue des Sociétés", "Read the article on Revue des Sociétés"),
                  })}
                  className="hidden md:block relative group cursor-zoom-in"
                >
                  <img
                    src="/images/travaux/elena-codoni-revue-des-societes.png"
                    alt={t("Première page de l'article — La composition du comité de mission", "First page of the article — The composition of the mission committee")}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <span className="text-white text-xs font-semibold">{t("Agrandir", "Enlarge")}</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-[1fr_200px]">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {t("Article", "Article")}
                    </span>
                    <span className="text-xs text-navy-500">{t("Juillet 2026", "July 2026")}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-navy-800 mb-3 leading-tight">
                    {t(
                      "À quoi sert une société à mission ?",
                      "What is the purpose of a purpose-driven company?"
                    )}
                  </h3>
                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    {t(
                      "Cet article examine la place paradoxale de la société à mission dans le débat contemporain sur l'entreprise. Il explicite ses composantes, restitue les débats qu'elle soulève depuis la loi Pacte de 2019, et montre comment l'inscription d'une mission exigeante dans les statuts crée un mécanisme d'épreuve qui oblige l'entreprise à apprendre et à tester de nouveaux compromis.",
                      "This article examines the paradoxical place of the purpose-driven company in the contemporary debate on business. It details its components, presents the debates it has sparked since the Pacte Law of 2019, and shows how embedding an ambitious mission into the articles of incorporation creates a mechanism of proof that compels companies to learn and test new compromises."
                    )}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Pablo Maria
                    </div>
                    <span className="text-navy-400">—</span>
                    <span className="text-navy-500 italic">
                      {t("Doctorant au LARSH (UPHF), associé au programme Société à Mission Europe", "PhD student at LARSH (UPHF), associated with the Société à Mission Europe programme")}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm text-navy-600">
                      <a href="https://boutique.alternatives-economiques.fr/economie-politique" target="_blank" rel="noopener noreferrer" className="font-medium text-navy-700 hover:text-rose-600 transition-colors underline underline-offset-2">{t("L'Économie Politique", "L'Économie Politique")}</a> — N°111, 2026/3 — <span className="italic">{t("Repenser l'entreprise à l'heure de la transition", "Rethinking the company in the age of transition")}</span>
                    </div>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <button
                  onClick={() => setLightbox({
                    src: "/images/travaux/pablo-maria-economie-politique.png",
                    alt: t("Première page de l'article — À quoi sert une société à mission ?", "First page of the article — What is the purpose of a purpose-driven company?"),
                    href: "https://boutique.alternatives-economiques.fr/economie-politique",
                    label: t("Lire l'article sur L'Économie Politique", "Read the article on L'Économie Politique"),
                  })}
                  className="hidden md:block relative group cursor-zoom-in"
                >
                  <img
                    src="/images/travaux/pablo-maria-economie-politique.png"
                    alt={t("Première page de l'article — À quoi sert une société à mission ?", "First page of the article — What is the purpose of a purpose-driven company?")}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <span className="text-white text-xs font-semibold">{t("Agrandir", "Enlarge")}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-card p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">
              {t(
                "D'autres travaux sont en cours de production",
                "More work is currently in production"
              )}
            </h2>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
              {t(
                "Le programme Société à Mission Europe produira de nouvelles publications tout au long de ses trois années de recherche-action : études, cartographies, ouvrages collectifs et bien plus.",
                "The Société à Mission Europe programme will produce new publications throughout its three years of action-research: studies, maps, collective works and more."
              )}
            </p>
            <a
              href="/contact"
              className="btn-primary"
            >
              {t("Contribuer au projet", "Get involved")}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-card shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-navy-800 flex items-center justify-center hover:bg-white transition-colors shadow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto"
            />
            <div className="p-4 text-center border-t border-beige-200">
              <a
                href={lightbox.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors"
              >
                {lightbox.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
