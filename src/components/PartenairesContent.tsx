"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function PartenairesContent() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const partenaires = [
    // === ACADÉMIQUE (Higher Education) ===

    // Porteur du projet
    { name: "UPHF", fullName: "Université Polytechnique Hauts-de-France", category: t("Académique", "Academic"), logo: "/logos/uphf.svg", description: t("Université d'ancrage territorial, porteur du projet Société à Mission Europe.", "Locally rooted university, lead institution of the Société à Mission Europe project.") },
    { name: "INSA Hauts-de-France", fullName: "INSA Hauts-de-France", category: t("Académique", "Academic"), logo: "/logos/insa-hdf.jpg", description: t("École d'ingénieurs de l'UPHF, partenaire du projet.", "UPHF engineering school, project partner.") },

    // Laboratoires et chaires
    { name: "LARSH", fullName: "Laboratoire de Recherche Sociétés & Humanités", category: t("Académique", "Academic"), logo: "/logos/larsh.png", description: t("Laboratoire de recherche de l'UPHF en sciences humaines et sociales.", "UPHF research laboratory in humanities and social sciences.") },
    { name: "ISH", fullName: "Institut Sociétés & Humanités", category: t("Académique", "Academic"), logo: "/logos/ish.svg", description: t("Institut de l'UPHF dédié aux humanités et sciences sociales.", "UPHF institute dedicated to humanities and social sciences.") },
    { name: "Théorie de l'Entreprise", fullName: "Chaire Théorie de l'Entreprise - Mines Paris / Collège des Bernardins", category: t("Académique", "Academic"), logo: "/logos/theorie-entreprise.png", description: t("Chaire de recherche sur la théorie de l'entreprise, Mines Paris – PSL et Collège des Bernardins.", "Research chair on the theory of the firm, Mines Paris – PSL and Collège des Bernardins.") },
    { name: "MRE", fullName: "Management Responsable des Entreprises - Sciences Po Lille", category: t("Académique", "Academic"), logo: "/logos/mre.png", description: t("Majeure en management responsable à Sciences Po Lille.", "Major in responsible management at Sciences Po Lille.") },

    // Grandes écoles de commerce
    { name: "HEC Paris S&O", fullName: "HEC Paris - Sustainability & Organizations Institute", category: t("Académique", "Academic"), logo: "/logos/hec.png", description: t("Institut dédié à la durabilité et aux organisations responsables.", "Institute dedicated to sustainability and responsible organizations.") },
    { name: "ESSEC", fullName: "ESSEC Business School", category: t("Académique", "Academic"), logo: "/logos/essec.svg", description: t("Grande école pionnière en entrepreneuriat social.", "Leading business school pioneering social entrepreneurship.") },
    { name: "EDHEC", fullName: "EDHEC Business School", category: t("Académique", "Academic"), logo: "/logos/edhec.svg", description: t("École de commerce contribuant par ses recherches en RSE.", "Business school contributing through its CSR research.") },
    { name: "SKEMA", fullName: "SKEMA Business School", category: t("Académique", "Academic"), logo: "/logos/skema.svg", description: t("Grande école de commerce internationale.", "International business school.") },
    { name: "Excelia", fullName: "Excelia Business School", category: t("Académique", "Academic"), logo: "/logos/excelia.svg", description: t("École de commerce engagée dans la transition responsable.", "Business school committed to the responsible transition.") },
    { name: "ESSCA", fullName: "ESSCA School of Management", category: t("Académique", "Academic"), logo: "/logos/essca.png", description: t("École de management post-bac.", "Post-secondary management school.") },

    // Sciences Po et IEP
    { name: "Sciences Po Lille", fullName: "Sciences Po Lille", category: t("Académique", "Academic"), logo: "/logos/sciences-po-lille.png", description: t("Institut d'études politiques en politiques publiques européennes.", "Institute of political studies in European public policy.") },
    { name: "ESPOL", fullName: "European School of Political and Social Sciences", category: t("Académique", "Academic"), logo: "/logos/espol.svg", description: t("École européenne de sciences politiques de l'Université Catholique de Lille.", "European school of political sciences at the Catholic University of Lille.") },

    // Universités
    { name: "Université Catholique de Lille", fullName: "Université Catholique de Lille", category: t("Académique", "Academic"), logo: "/logos/ucl.png", description: t("Université privée catholique du Nord de la France.", "Private Catholic university in Northern France.") },
    { name: "Université de Lille", fullName: "Université de Lille", category: t("Académique", "Academic"), logo: "/logos/univ-lille.svg", description: t("Grande université pluridisciplinaire des Hauts-de-France.", "Major multidisciplinary university in the Hauts-de-France region.") },
    { name: "ULCO", fullName: "Université du Littoral Côte d'Opale", category: t("Académique", "Academic"), logo: "/logos/ulco.png", description: t("Université du littoral Nord-Pas-de-Calais.", "Coastal university of Nord-Pas-de-Calais.") },
    { name: "UPJV", fullName: "Université de Picardie Jules Verne – CEPRISCA – Centre Antoine Loisel", category: t("Académique", "Academic"), logo: "/logos/upjv.svg", description: t("Université de Picardie, hébergeant le CEPRISCA dirigé par le responsable scientifique du projet.", "University of Picardie, hosting CEPRISCA led by the project's scientific director.") },
    { name: "ICP", fullName: "Institut Catholique de Paris", category: t("Académique", "Academic"), logo: "/logos/icp.png", description: t("Université privée catholique parisienne.", "Private Catholic university in Paris.") },
    { name: "Mines Paris", fullName: "Mines Paris – PSL", category: t("Académique", "Academic"), logo: "/logos/mines-paris.png", description: t("Grande école d'ingénieurs sur l'innovation responsable.", "Leading engineering school focused on responsible innovation.") },
    { name: "Campus de la Transition", fullName: "Campus de la Transition", category: t("Académique", "Academic"), logo: "/logos/campus-transition.svg", description: t("Lieu d'expérimentation pour la transition écologique et sociale.", "Experimentation hub for ecological and social transition.") },
    { name: "IÉSEG", fullName: "IÉSEG School of Management", category: t("Académique", "Academic"), logo: "/logos/ieseg.png", description: t("Grande école de management, membre de l'Université Catholique de Lille.", "Leading management school, member of the Catholic University of Lille.") },
    { name: "Centrale Lille", fullName: "Centrale Lille", category: t("Académique", "Academic"), logo: "/logos/centrale-lille.png", description: t("École d'ingénieurs de référence dans les Hauts-de-France.", "Leading engineering school in the Hauts-de-France region.") },
    { name: "Chaire ICP-ESSEC", fullName: "Chaire Entreprise et Bien Commun – ICP / ESSEC", category: t("Académique", "Academic"), logo: "/logos/icp.png", description: t("Chaire de recherche sur l'entreprise et le bien commun, portée par l'ICP et l'ESSEC.", "Research chair on business and the common good, led by ICP and ESSEC.") },

    // === INSTITUTIONNEL ===
    { name: "Région Hauts-de-France", fullName: "Région Hauts-de-France", category: t("Institutionnel", "Institutional"), logo: "/logos/region-hdf.svg", description: t("Co-financeur du projet via le programme FEDER.", "Project co-funder through the ERDF programme.") },

    // === RÉSEAUX ===
    { name: "Observatoire Éthique Publique", fullName: "Observatoire de l'Éthique Publique", category: t("Réseaux", "Networks"), logo: "/logos/observatoire.png", description: t("Think tank dédié à l'éthique publique, co-porteur du projet.", "Think tank dedicated to public ethics, co-lead of the project.") },
    { name: "Observatoire des Sociétés à Mission", fullName: "Observatoire des Sociétés à Mission", category: t("Réseaux", "Networks"), logo: "/logos/observatoire-sam.png", description: t("Observatoire dédié au suivi et à l'analyse des sociétés à mission.", "Observatory dedicated to monitoring and analysing mission-driven companies.") },
    { name: "Communauté des entreprises à mission", fullName: "Communauté des entreprises à mission", category: t("Réseaux", "Networks"), logo: "/logos/communaute-mission.png", description: t("Réseau de référence des sociétés à mission en France.", "Leading network of mission-driven companies in France.") },
    { name: "Réseau Alliances", fullName: "Réseau Alliances", category: t("Réseaux", "Networks"), logo: "/logos/reseau-alliances.png", description: t("Acteur de la transition responsable en Hauts-de-France depuis 30 ans.", "Actor of the responsible transition in Hauts-de-France for 30 years.") },
    { name: "Entreprises et Cités", fullName: "Entreprises et Cités", category: t("Réseaux", "Networks"), logo: "/logos/entreprises-cites.png", description: t("Réseau d'entreprises engagées dans les territoires.", "Network of companies committed to local communities.") },
    { name: "GenAct", fullName: "GenAct", category: t("Réseaux", "Networks"), logo: "/logos/genact.png", description: t("Mouvement de la nouvelle génération d'acteurs engagés.", "Movement of the new generation of committed actors.") },
    { name: "EBEN", fullName: "European Business Ethics Network", category: t("Réseaux", "Networks"), logo: "/logos/eben.jpg", description: t("Réseau européen d'éthique des affaires.", "European business ethics network.") },
    { name: "KAYA", fullName: "KAYA - Belgian Coalition of Ecopreneurs", category: t("Réseaux", "Networks"), logo: "/logos/kaya.jpg", description: t("Coalition belge des éco-entrepreneurs.", "Belgian coalition of ecopreneurs.") },
    { name: "IEREE", fullName: "Institut Européen pour la Refondation de l'Entreprise et de l'Emploi", category: t("Réseaux", "Networks"), logo: "/logos/ieree.png", description: t("Institut européen de recherche sur les entreprises et l'emploi.", "European research institute on business and employment.") },
    { name: "Impact France", fullName: "Impact France", category: t("Réseaux", "Networks"), logo: "/logos/impact-france.png", description: t("Mouvement des entreprises sociales et écologiques en France.", "Movement of social and ecological enterprises in France.") },
    { name: "Vivoices", fullName: "Vivoices", category: t("Réseaux", "Networks"), logo: "/logos/vivoices.png", description: t("Plateforme dédiée à l'amplification des voix engagées.", "Platform dedicated to amplifying committed voices.") },

    // === ENTREPRISE ===
    { name: "Carac", fullName: "Carac – Mutuelle d'épargne", category: t("Entreprise", "Corporate"), logo: "/logos/carac.png", description: t("Mutuelle engagée dans une démarche de société à mission.", "Mutual fund committed to a mission-driven company approach.") },
    { name: "Intersektion", fullName: "Intersektion", category: t("Entreprise", "Corporate"), logo: "/logos/intersektion.svg", description: t("Organisation dédiée à l'intersection des enjeux sociétaux.", "Organisation dedicated to the intersection of societal issues.") },
    { name: "Management & RSE", fullName: "Management & RSE", category: t("Entreprise", "Corporate"), logo: "/logos/management-rse.png", description: t("Revue et plateforme dédiée au management responsable.", "Journal and platform dedicated to responsible management.") },
  ];

  const categories = [
    t("Tous", "All"),
    t("Académique", "Academic"),
    t("Institutionnel", "Institutional"),
    t("Réseaux", "Networks"),
    t("Entreprise", "Corporate"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              {t("Partenaires", "Partners")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Nos partenaires", "Our")}{" "}
              <span className="text-orange-600">
                {t("académiques et institutionnels", "Academic and Institutional Partners")}
              </span>
            </h1>
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Ils soutiennent et participent au projet Société à Mission Europe.",
                "They support and participate in the Société à Mission Europe project."
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

      {/* Photo événement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {t("Un réseau d'excellence en action", "A Network of Excellence in Action")}
            </h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 text-lg max-w-2xl mx-auto">
              {t(
                "Chercheurs, dirigeants et experts réunis pour construire le modèle européen de l'entreprise à mission.",
                "Researchers, leaders and experts united to build the European model of the mission-driven company."
              )}
            </p>
          </div>
          <div className="relative rounded-card overflow-hidden shadow-xl">
            <Image
              src="/partenaires-event.jpg"
              alt={t(
                "Conférence Société à Mission Europe - Partenaires réunis sur scène",
                "Société à Mission Europe Conference - Partners gathered on stage"
              )}
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-medium">
                {t(
                  "Lancement du projet Société à Mission Europe — Wallers-Arenberg",
                  "Launch of the Société à Mission Europe project — Wallers-Arenberg"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 bg-white border-b border-beige-200 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => {
              const isAll = index === 0;
              const isActive = isAll ? activeCategory === null : cat === activeCategory;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(isAll ? null : cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-rose-600 text-white"
                      : "bg-beige-100 text-navy-700 hover:bg-beige-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grille des partenaires */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partenaires
              .filter((p) => activeCategory === null || p.category === activeCategory)
              .sort((a, b) => a.name.localeCompare(b.name, "fr"))
              .map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Logo area */}
                <div className="aspect-[4/3] bg-white flex items-center justify-center p-6">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={200}
                    height={150}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="inline-block px-2.5 py-0.5 bg-rose-50 text-rose-600 text-xs font-bold rounded-full mb-3">
                    {partner.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy-800 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-navy-700 mb-3">
                    {partner.fullName}
                  </p>
                  <p className="text-sm text-navy-700 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-beige-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                  {t("Devenir partenaire", "Become a Partner")}
                </h2>
                <div className="tricolor-separator" />
                <p className="text-navy-700 text-lg leading-relaxed mb-6">
                  {t(
                    "Vous êtes une institution académique, un organisme de recherche, une entreprise engagée ou un acteur public ? Rejoignez notre réseau de partenaires et contribuez à l'émergence du modèle européen de la société à mission.",
                    "Are you an academic institution, a research organisation, a committed company or a public actor? Join our partner network and contribute to the emergence of the European model of the mission-driven company."
                  )}
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    t("Accès aux travaux de recherche", "Access to research work"),
                    t("Participation aux colloques et événements", "Participation in conferences and events"),
                    t("Réseau européen d'experts", "European network of experts"),
                    t("Visibilité et reconnaissance", "Visibility and recognition"),
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-rose-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">
                  {t("Nous contacter", "Contact Us")}
                </Link>
              </div>
              <div className="hidden lg:flex bg-gradient-to-br from-rose-600 to-rose-700 items-center justify-center p-16">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">35+</div>
                  <div className="text-xl font-bold mb-2">
                    {t("Partenaires", "Partners")}
                  </div>
                  <p className="text-rose-50">
                    {t(
                      "Institutions académiques et acteurs engagés",
                      "Academic institutions and committed actors"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
