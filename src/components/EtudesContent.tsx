"use client";

import { useI18n } from "@/lib/i18n/context";

const etudes = [
  {
    numero: 1,
    titleFr: "Une première typologie des modèles alternatifs d'entreprises en Europe",
    titleEn: "A First Typology of Alternative Business Models in Europe",
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
    linkUrl: "/carte",
    linkLabelFr: "Voir la cartographie interactive",
    linkLabelEn: "View the interactive map",
  },
  {
    numero: 2,
    titleFr:
      "Révolutionner l'éthique des affaires en créant la Société à Responsabilité Sociale (SARS)",
    titleEn:
      "Revolutionizing Business Ethics by Creating the Socially Responsible Company (SARS)",
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
};

export default function EtudesContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              {t("Publications", "Publications")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Nos", "Our")}{" "}
              <span className="text-rose-600">
                {t("études", "studies")}
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

      {/* Études */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {etudes.map((etude) => {
              const colors = colorClasses[etude.color];
              return (
                <div
                  key={etude.numero}
                  className={`bg-white rounded-card border ${colors.border} shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="grid lg:grid-cols-[1fr_280px]">
                    {/* Content */}
                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 ${colors.badge} rounded-full text-sm font-bold`}>
                          {t("Étude", "Study")} N°{etude.numero}
                        </span>
                        {etude.pages && (
                          <span className="text-xs text-navy-500">
                            {etude.pages} pages
                          </span>
                        )}
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-navy-800 mb-4 leading-tight">
                        {t(etude.titleFr, etude.titleEn)}
                      </h2>

                      <p className="text-navy-700 leading-relaxed mb-6">
                        {t(etude.descFr, etude.descEn)}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {etude.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {etude.date}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        {etude.linkUrl && (
                          <a
                            href={etude.linkUrl}
                            className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm hover:gap-3 transition-all`}
                          >
                            {t(etude.linkLabelFr!, etude.linkLabelEn!)}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                        {etude.oepUrl && (
                          <a
                            href={etude.oepUrl}
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
                        {etude.icon}
                      </div>
                      <div className={`text-5xl font-bold ${colors.text} mb-1`}>
                        N°{etude.numero}
                      </div>
                      <div className="text-navy-600 text-sm text-center mt-2">
                        {t("Chaire Société à Mission Européenne", "European Purpose-Driven Company Chair")}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs text-navy-500 font-medium">
                          UPHF &bull; OEP &bull; LARSH
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

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-card p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">
              {t(
                "D'autres études sont en cours de production",
                "More studies are currently in production"
              )}
            </h2>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
              {t(
                "Le programme Société à Mission Europe produira de nouvelles études tout au long de ses trois années de recherche-action, couvrant les axes territorial, national et européen.",
                "The Société à Mission Europe programme will produce new studies throughout its three years of action-research, covering the territorial, national and European axes."
              )}
            </p>
            <a
              href="/newsletter"
              className="btn-primary"
            >
              {t("S'abonner à la newsletter", "Subscribe to the newsletter")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
