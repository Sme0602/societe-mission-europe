"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

function CSSection({ groupe, label }: { groupe: string; label: string }) {
  const [members, setMembers] = useState<{ nom_prenom: string; poste_structure: string | null }[]>([]);
  useEffect(() => {
    fetch(`/api/contributeurs?groupe=${groupe}`)
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch(() => {});
  }, [groupe]);
  if (members.length === 0) return null;
  return (
    <div>
      <p className="text-sm font-semibold text-rose-600 mb-1">{label}</p>
      {members.map((m) => (
        <p key={m.nom_prenom} className="text-navy-800 text-sm">
          {m.nom_prenom}{m.poste_structure ? <span className="text-navy-500"> — {m.poste_structure}</span> : ""}
        </p>
      ))}
    </div>
  );
}

export default function ProjetContent() {
  const { t } = useI18n();

  const groupes = [
    {
      id: "territorial",
      title: t("Groupe Territorial", "Territorial Group"),
      region: "Hauts-de-France",
      subtitle: t("Laboratoire territorial", "Territorial Laboratory"),
      description: t(
        "Les Hauts-de-France constituent le terrain d\u2019expérimentation du projet. Ce groupe de travail accompagne les entreprises régionales dans leur démarche de société à mission et documente les bonnes pratiques pour créer un modèle reproductible.",
        "Hauts-de-France serves as the project\u2019s testing ground. This working group supports regional companies in their purpose-driven company journey and documents best practices to create a replicable model."
      ),
      objectifs: [
        t("Cartographier les sociétés à mission des Hauts-de-France", "Map purpose-driven companies in Hauts-de-France"),
        t("Accompagner les entreprises dans leur transformation", "Support companies in their transformation"),
        t("Documenter les retours d\u2019expérience terrain", "Document field experience feedback"),
        t("Créer un réseau régional d\u2019entreprises à mission", "Create a regional network of purpose-driven companies"),
        t("Évaluer l\u2019impact territorial des sociétés à mission", "Assess the territorial impact of purpose-driven companies"),
      ],
      color: "jaune" as const,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "national",
      title: t("Groupe National", "National Group"),
      region: "France",
      subtitle: t("Bilan national de la loi PACTE", "National assessment of the PACTE Act"),
      description: t(
        "Ce groupe de travail réalise un état des lieux approfondi de la loi PACTE et de son application depuis 2019. Il analyse l\u2019évolution du statut de société à mission en France, identifie les forces et les axes d\u2019amélioration du cadre législatif.",
        "This working group conducts an in-depth review of the PACTE Act and its implementation since 2019. It analyses the evolution of the purpose-driven company status in France, identifying strengths and areas for improvement in the legislative framework."
      ),
      objectifs: [
        t("Dresser un bilan quantitatif et qualitatif de la loi PACTE", "Produce a quantitative and qualitative assessment of the PACTE Act"),
        t("Analyser les pratiques des comités de mission", "Analyse mission committee practices"),
        t("Évaluer la pertinence du cadre juridique actuel", "Assess the relevance of the current legal framework"),
        t("Proposer des évolutions législatives", "Propose legislative improvements"),
        t("Comparer avec les cadres juridiques internationaux", "Compare with international legal frameworks"),
      ],
      color: "rose" as const,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
    },
    {
      id: "europeen",
      title: t("Groupe Européen", "European Group"),
      region: t("Union Européenne", "European Union"),
      subtitle: t("Propositions pour l\u2019UE", "Proposals for the EU"),
      description: t(
        "Le groupe européen travaille à l\u2019élaboration de recommandations concrètes pour une directive européenne sur la société à mission. Il s\u2019appuie sur l\u2019expérience française et les initiatives similaires dans d\u2019autres pays membres.",
        "The European group works on developing concrete recommendations for a European directive on the purpose-driven company. It draws on French experience and similar initiatives in other member states."
      ),
      objectifs: [
        t("Cartographier les initiatives similaires dans l\u2019UE", "Map similar initiatives across the EU"),
        t("Rédiger des propositions de directive européenne", "Draft proposals for a European directive"),
        t("Mobiliser un réseau de partenaires européens", "Mobilise a network of European partners"),
        t("Organiser des auditions d\u2019experts internationaux", "Organise hearings with international experts"),
        t("Produire un livre blanc européen", "Produce a European white paper"),
      ],
      color: "navy" as const,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const timeline = [
    {
      date: t("Février 2026", "February 2026"),
      title: t("Colloque de lancement", "Launch Conference"),
      desc: t(
        "Wallers-Arenberg – Environ 250 participants réunis pour lancer officiellement le programme de recherche",
        "Wallers-Arenberg – Around 250 participants gathered to officially launch the research programme"
      ),
    },
    {
      date: "2026",
      title: t("Phase de recherche territoriale et nationale", "Territorial and national research phase"),
      desc: t(
        "Travaux parallèles des trois groupes, collecte de données terrain en Hauts-de-France et analyse nationale de la loi PACTE",
        "Parallel work across the three groups, field data collection in Hauts-de-France and national analysis of the PACTE Act"
      ),
    },
    {
      date: "2027",
      title: t("Restitutions intermédiaires et événements européens", "Interim presentations and European events"),
      desc: t(
        "Présentation des premiers résultats, auditions d\u2019experts internationaux et colloques européens",
        "Presentation of initial results, hearings with international experts and European conferences"
      ),
    },
    {
      date: "2028",
      title: t("Publications finales et recommandations", "Final publications and recommendations"),
      desc: t(
        "Livres blancs, ouvrages collectifs et recommandations pour une directive européenne sur la purpose-driven company",
        "White papers, collective works and recommendations for a European directive on the purpose-driven company"
      ),
    },
  ];

  const teamMembers = [
    {
      name: "Matthieu Caron",
      initials: "MC",
      role: t("Porteur du projet", "Project Leader"),
      title: t("Maître de conférences HDR en droit", "Senior Lecturer (HDR) in Law"),
      affiliation: "UPHF & Sciences Po Lille",
      description: t(
        "Ancien élève de l\u2019École Normale Supérieure de Cachan, agrégé d\u2019économie et de gestion, titulaire d\u2019un DEA de droit public approfondi (Paris 1), d\u2019un magistère de droit européen et d\u2019un doctorat en droit public. Certifié par HEC Paris en management de la transition durable et par l\u2019ESSEC en RSE. Dirige le master Management responsable des entreprises à Sciences Po Lille, le cycle supérieur de direction, l\u2019Observatoire de l\u2019Éthique Publique et la chaire européenne sur la société à mission. Recherches en droit gouvernemental, éthique publique, analyse juridique de l\u2019économie et éthique des affaires.",
        "Former student of the École Normale Supérieure de Cachan, holder of the agrégation in economics and management, a DEA in advanced public law (Paris 1), a magistère in European law and a doctorate in public law. Certified by HEC Paris in sustainable transition management and by ESSEC in CSR. Heads the Responsible Business Management master\u2019s at Sciences Po Lille, the senior management programme, the Observatory of Public Ethics and the European chair on the purpose-driven company. Research in governmental law, public ethics, legal analysis of the economy and business ethics."
      ),
      color: "bg-rose-600",
    },
    {
      name: "Stéphane Vernac",
      initials: "SV",
      role: t("Responsable scientifique", "Scientific Director"),
      title: t("Professeur de droit", "Professor of Law"),
      affiliation: "UPJV, Directeur du CEPRISCA-Centre Antoine Loisel",
      description: t(
        "Agrégé de droit privé, professeur à l\u2019Université de Picardie Jules Verne. Directeur du Centre de droit privé et de sciences criminelles d\u2019Amiens. Co-directeur du master Droit du travail (UPJV), directeur scientifique de la revue Lexbase social et membre du comité de rédaction de la Revue de droit du travail (Dalloz). Ancien élève de l\u2019ENS Cachan, chercheur associé au Centre de gestion scientifique de Mines ParisTech et membre de l\u2019Observatoire de l\u2019Éthique Publique. Recherches sur les pouvoirs dans l\u2019organisation, la gouvernance d\u2019entreprise et la société à mission.",
        "Holder of the agrégation in private law, professor at the University of Picardie Jules Verne. Director of the Centre for Private Law and Criminal Sciences of Amiens. Co-director of the Labour Law master\u2019s (UPJV), scientific director of the Lexbase social review and member of the editorial board of the Revue de droit du travail (Dalloz). Former student of ENS Cachan, associate researcher at the Centre for Scientific Management of Mines ParisTech and member of the Observatory of Public Ethics. Research on power in organisations, corporate governance and the purpose-driven company."
      ),
      color: "bg-navy-800",
    },
    {
      name: "Sarah Vandenbroucke",
      initials: "SV",
      role: t("Ingénieure de recherche", "Research Engineer"),
      title: t("Axe France & Europe", "France & Europe Track"),
      affiliation: "UPHF/LARSH",
      description: t(
        "Docteure en droit de l\u2019Université de Leiden (Pays-Bas), licence en droit (Lille 2), LL.M. en droit européen (Leiden, 2017), double master en droit du travail et sociologie des organisations (Toulouse 1 & Amsterdam, 2018). Expérience à l\u2019Assemblée parlementaire du Conseil de l\u2019Europe (Commission Égalité, Strasbourg), au bureau régional de l\u2019OIT pour l\u2019Asie du Sud-Est (New Delhi) et comme consultante dans les institutions de l\u2019UE à Bruxelles. Coordinatrice du Empirical Legal Studies Lab à Leiden et chercheuse invitée à l\u2019Institut universitaire européen (Florence). Recherches sur la conduite responsable des entreprises, l\u2019éthique des affaires et les modes alternatifs de gouvernance.",
        "Doctor of Law from Leiden University (Netherlands), law degree (Lille 2), LL.M. in European law (Leiden, 2017), dual master\u2019s in labour law and sociology of organisations (Toulouse 1 & Amsterdam, 2018). Experience at the Parliamentary Assembly of the Council of Europe (Equality Committee, Strasbourg), the ILO Regional Office for South-East Asia (New Delhi) and as a consultant in EU institutions in Brussels. Coordinator of the Empirical Legal Studies Lab in Leiden and visiting researcher at the European University Institute (Florence). Research on responsible business conduct, business ethics and alternative governance models."
      ),
      color: "bg-jaune-400",
    },
    {
      name: "Alix Vanmeervenne",
      initials: "AV",
      role: t("Ingénieure d\u2019études", "Study Engineer"),
      title: t("Axe territorial Hauts-de-France", "Hauts-de-France Territorial Track"),
      affiliation: "UPHF/LARSH",
      description: t(
        "Ingénieure d\u2019études à l\u2019UPHF, rattachée au laboratoire Sociétés & Humanités. Travaux sur les sociétés à mission, l\u2019histoire socio-économique régionale et la structuration communautaire par la recherche-action. Diplômée avec mention du master Management responsable des entreprises de Sciences Po Lille. Expérience en conseil service civique (Impulso), accompagnement décarbonation CSE (Représente.org) et conseil RSE (Parangone / GenAct). Coordonne deux ouvrages collectifs pour le projet.",
        "Study engineer at UPHF, affiliated with the Sociétés & Humanités laboratory. Work on purpose-driven companies, regional socio-economic history and community structuring through action research. Graduated with honours from the Responsible Business Management master\u2019s at Sciences Po Lille. Experience in civic service consulting (Impulso), CSE decarbonisation support (Représente.org) and CSR consulting (Parangone / GenAct). Coordinates two collective works for the project."
      ),
      color: "bg-rose-600",
    },
    {
      name: "Pablo Maria",
      initials: "PM",
      role: t("Doctorant (1ère année)", "PhD Candidate (1st year)"),
      title: t("Recherche européenne", "European Research"),
      affiliation: "UPHF/ESPOL/LARSH",
      description: t(
        "Doctorant en sciences de gestion à l\u2019UPHF et ESPOL, rattaché au LARSH. Diplômé du master MRE de Sciences Po Lille. Recherche sur les modèles européens de purpose-driven company, analysant le rôle du territoire dans la diffusion des pratiques de gouvernance responsable. Étude comparative de la mise en œuvre de la société à mission dans les métropoles de Lille, Rome et Barcelone. Co-fondateur de la startup Intersektion, accompagnant les transitions écologiques et sociales des entreprises.",
        "PhD candidate in management sciences at UPHF and ESPOL, affiliated with LARSH. Graduate of the MRE master\u2019s at Sciences Po Lille. Research on European models of the purpose-driven company, analysing the role of territory in the spread of responsible governance practices. Comparative study of purpose-driven company implementation in the metropolitan areas of Lille, Rome and Barcelona. Co-founder of the startup Intersektion, supporting companies\u2019 ecological and social transitions."
      ),
      color: "bg-navy-800",
    },
    {
      name: "Jean-Marie Massonnat",
      initials: "JM",
      role: t("Rapporteur du projet", "Project Rapporteur"),
      title: t("Professeur de chaire supérieure", "Senior Chair Professor"),
      affiliation: t("Observatoire de l\u2019Éthique Publique", "Observatory of Public Ethics"),
      description: t(
        "Ancien élève de l\u2019ENS Cachan, agrégé d\u2019économie et gestion, titulaire d\u2019un DEA en sciences de gestion (Paris II Panthéon-Assas) et d\u2019une licence en droit (Rennes I). Enseigne en classes préparatoires à Nantes, au master de l\u2019IAE de Nantes et au master MRE de Sciences Po Lille. Recherches sur la régulation économique par le droit, les théories de la croissance et de la post-croissance, la théorie de l\u2019entreprise, l\u2019évaluation extra-financière et les modèles d\u2019entreprise alternatifs. Membre fondateur et administrateur de l\u2019Observatoire de l\u2019Éthique Publique, rapporteur chargé de documenter l\u2019histoire du projet.",
        "Former student of ENS Cachan, holder of the agrégation in economics and management, a DEA in management sciences (Paris II Panthéon-Assas) and a law degree (Rennes I). Teaches in preparatory classes in Nantes, at the IAE de Nantes master\u2019s and at the MRE master\u2019s at Sciences Po Lille. Research on economic regulation through law, growth and post-growth theories, theory of the firm, extra-financial assessment and alternative business models. Founding member and director of the Observatory of Public Ethics, rapporteur responsible for documenting the project\u2019s history."
      ),
      color: "bg-jaune-400",
    },
    {
      name: "Anaïs Rebuccini",
      initials: "AR",
      role: t("Responsable administrative et financière", "Administrative and Financial Manager"),
      title: t("Gestion de projet", "Project Management"),
      affiliation: "UPHF",
      description: t(
        "Diplômée de la faculté de droit, d'économie et de gestion de Valenciennes, Anaïs Rebuccini a travaillé en qualité de gestionnaire administrative et financière auprès de l'IDP (Institut du Développement et de la Prospective) puis du CRISS (Centre de Recherche Interdisciplinaire en Sciences de la Société) à l'UPHF durant huit ans.",
        "A graduate of the Faculty of Law, Economics and Management in Valenciennes, Anaïs Rebuccini worked as an administrative and financial manager at the IDP (Institute of Development and Foresight) then at CRISS (Interdisciplinary Research Centre in Social Sciences) at UPHF for eight years."
      ),
      color: "bg-orange-600",
    },
    {
      name: "Aïcha Barry",
      initials: "AB",
      role: t("Stagiaire", "Intern"),
      title: t("Droit public & éthique des affaires", "Public Law & Business Ethics"),
      affiliation: t("UPHF / Observatoire de l\u2019Éthique Publique", "UPHF / Observatory of Public Ethics"),
      description: t(
        "Étudiante en Master II droit public, spécialité éthique des affaires (UPHF). Stage à l\u2019Observatoire de l\u2019Éthique Publique, recherches sur la compliance, l\u2019anti-corruption, la transparence financière et la RSE. Mémoire sur la déontologie et l\u2019éthique des magistrats (étude comparée France / CJUE). Expérience en alternance juridique chez Décathlon France (conformité réglementaire, scoring environnemental) et stage au Secrétariat général du Gouvernement de Guinée (gouvernance institutionnelle). Appui transversal au projet et veille stratégique sur les sociétés à mission en Hauts-de-France.",
        "Master II student in public law, specialising in business ethics (UPHF). Internship at the Observatory of Public Ethics, research on compliance, anti-corruption, financial transparency and CSR. Thesis on the ethics and deontology of magistrates (comparative study France / CJEU). Experience in legal work-study at Décathlon France (regulatory compliance, environmental scoring) and internship at the General Secretariat of the Government of Guinea (institutional governance). Cross-cutting project support and strategic monitoring of purpose-driven companies in Hauts-de-France."
      ),
      color: "bg-rose-600",
    },
  ];

  const livrables = [
    { count: 14, label: t("Productions scientifiques et opérationnelles", "Scientific and operational outputs") },
    { count: 10, label: t("Événements", "Events") },
    { count: 4, label: t("Études", "Studies") },
    { count: 4, label: t("Ouvrages", "Books") },
    { count: 3, label: t("Livres blancs", "White papers") },
    { count: 2, label: t("Cartographies", "Mappings") },
    { count: 1, label: t("Thèse de doctorat", "Doctoral thesis") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Le projet de recherche", "The research project")}{" "}
              <span className="text-rose-600">Société à Mission Europe</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-700 font-medium italic mb-4">
              {t(
                "De la société à mission française à la purpose-driven company européenne",
                "From the French société à mission to the European purpose-driven company"
              )}
            </p>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                <>
                  Programme de recherche-action soutenu par le FEDER, le projet Société à Mission Europe s&apos;organise autour de trois
                  groupes de travail complémentaires, du territoire local à
                  l&apos;échelle européenne, portés par{" "}
                  <Link href="/partenaires" className="text-rose-600 hover:text-rose-700 underline underline-offset-2">
                    nos partenaires académiques
                  </Link>.
                </>,
                <>
                  An action-research programme supported by ERDF, the Société à Mission Europe project is organised around three
                  complementary working groups, from the local territory to
                  the European level, led by{" "}
                  <Link href="/partenaires" className="text-rose-600 hover:text-rose-700 underline underline-offset-2">
                    our academic partners
                  </Link>.
                </>
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

      {/* Groupes de travail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {groupes.map((groupe, index) => (
              <div
                key={groupe.id}
                id={groupe.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      groupe.color === "jaune"
                        ? "bg-yellow-50 text-jaune-400"
                        : groupe.color === "rose"
                        ? "bg-rose-50 text-rose-600"
                        : "bg-blue-50 text-navy-800"
                    }`}
                  >
                    {groupe.icon}
                  </div>
                  <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                    groupe.color === "jaune"
                      ? "text-jaune-400"
                      : groupe.color === "rose"
                      ? "text-rose-600"
                      : "text-navy-800"
                  }`}>
                    {groupe.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-2">
                    {groupe.title}
                  </h2>
                  <p className="text-lg text-navy-700 font-medium mb-4">
                    {groupe.region}
                  </p>
                  <p className="text-navy-700 leading-relaxed mb-8">
                    {groupe.description}
                  </p>
                  <Link href="/contact" className="btn-primary">
                    {t("Participer à ce groupe", "Join this group")}
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {/* Map silhouette */}
                  <div className="flex justify-center mb-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {groupe.color === "jaune" && (
                      <img src="/images/map-hauts-de-france.png" alt="Hauts-de-France" className="w-full max-w-[200px] h-auto opacity-80" />
                    )}
                    {groupe.color === "rose" && (
                      <img src="/images/map-france.png" alt="France" className="w-full max-w-[200px] h-auto opacity-80" />
                    )}
                    {groupe.color === "navy" && (
                      <img src="/images/map-europe.png" alt="Europe" className="w-full max-w-[220px] h-auto opacity-80" />
                    )}
                  </div>

                  <div
                    className={`rounded-card p-8 ${
                      groupe.color === "jaune"
                        ? "bg-yellow-50 border border-yellow-100"
                        : groupe.color === "rose"
                        ? "bg-rose-50 border border-rose-100"
                        : "bg-blue-50 border border-blue-100"
                    }`}
                  >
                    <h3 className="font-bold text-navy-800 mb-4 text-lg">
                      {t("Objectifs", "Objectives")}
                    </h3>
                    <ul className="space-y-3">
                      {groupe.objectifs.map((obj, objIndex) => (
                        <li key={objIndex} className="flex items-start gap-3">
                          <svg
                            className={`w-5 h-5 shrink-0 mt-0.5 ${
                              groupe.color === "jaune"
                                ? "text-jaune-400"
                                : groupe.color === "rose"
                                ? "text-rose-600"
                                : "text-navy-800"
                            }`}
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
                          <span className="text-navy-700">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe – aperçu */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t("L\u2019équipe", "The Team")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {t(
                "Une équipe pluridisciplinaire de 9 chercheurs, ingénieurs et doctorants engagés dans le projet.",
                "A multidisciplinary team of 8 researchers, engineers and PhD candidates committed to the project."
              )}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3 bg-white rounded-full px-4 py-2 border border-beige-200 shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-800 leading-tight">{member.name}</p>
                  <p className="text-xs text-rose-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/equipe" className="btn-primary">
              {t("Découvrir toute l\u2019équipe", "Meet the full team")}
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t("Calendrier du projet", "Project Timeline")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {t(
                "Les grandes étapes de notre programme de recherche sur 3 ans (2025-2028).",
                "The key milestones of our 3-year research programme (2025-2028)."
              )}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-beige-300 -translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.date}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-rose-600 rounded-full border-4 border-white shadow -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12"
                      }`}
                    >
                      <div className="bg-white rounded-card p-6 shadow-sm border border-beige-200">
                        <div className="text-sm font-bold text-orange-600 mb-1">
                          {item.date}
                        </div>
                        <h3 className="text-lg font-bold text-navy-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-navy-700 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livrables attendus */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t("Livrables attendus", "Expected Deliverables")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {t(
                "Le projet produira un ensemble de ressources scientifiques et opérationnelles à destination des chercheurs, entreprises et décideurs publics.",
                "The project will produce a set of scientific and operational resources for researchers, businesses and public decision-makers."
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {livrables.map((item, index) => (
              <div
                key={index}
                className="bg-beige-50 rounded-card p-6 border border-beige-200 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">
                  {item.count}
                </div>
                <p className="text-sm text-navy-700 font-medium leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t("Gouvernance du projet", "Project Governance")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Comité de partenaires */}
            <div className="bg-white rounded-card p-8 border border-beige-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">
                {t("Comité de partenaires", "Partners Committee")}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-rose-600">{t("Président", "Chair")}</p>
                  <p className="text-navy-800 font-medium">Emery Jacquillat</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-600">{t("Vice-Présidents", "Vice-Chairs")}</p>
                  <p className="text-navy-800 font-medium">Paolo Di Cesare</p>
                  <p className="text-navy-800 font-medium">Benoît Quittre</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-600 mb-1">{t("Institutions partenaires", "Partner Institutions")}</p>
                  <ul className="text-navy-700 text-sm space-y-0.5">
                    {[
                      "Réseau Alliances", "Campus de la transition", "CARAC", "CEM",
                      "Conseil régional HdF", "EDHEC", "ESSCA", "Excelia",
                      "GenAct / C3D", "HEC Paris", "IEREE", "Institut Godin",
                      "Kaya Ecopreneurs", "La Catho", "LARSH (UPHF)", "Management & RSE",
                      "Mines Paris – PSL", "NATIVA", "OEP", "OZAKT",
                      "Parangone", "Sciences Po Lille", "SKEMA",
                      "UCLouvain", "ULCO",
                    ].map((inst) => (
                      <li key={inst} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-orange-400 rounded-full shrink-0" />
                        {inst}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Conseil scientifique */}
            <div className="bg-white rounded-card p-8 border border-beige-200 shadow-sm">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">
                {t("Conseils scientifiques", "Scientific Councils")}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-rose-600">Direction</p>
                  <p className="text-navy-800 font-medium">Stéphane Vernac</p>
                  <p className="text-navy-800 font-medium">Matthieu Caron</p>
                </div>
                <CSSection groupe="cs_territoire" label={t("CS Territoire (Hauts-de-France)", "SC Territory (Hauts-de-France)")} />
                <CSSection groupe="cs_national" label={t("CS National (France)", "SC National (France)")} />
                <CSSection groupe="cs_europe" label="CS Europe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t("Questions fréquentes", "Frequently Asked Questions")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {t(
                "Tout savoir sur le programme de recherche Société à Mission Europe.",
                "Everything you need to know about the Société à Mission Europe research programme."
              )}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {t("Qu\u2019est-ce qu\u2019une société à mission ?", "What is a purpose-driven company?")}
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  "Une société à mission est une entreprise qui inscrit dans ses statuts une raison d\u2019être et des objectifs sociaux et environnementaux. En France, ce statut a été créé par la loi PACTE de 2019. Le projet Société à Mission Europe vise à étendre ce modèle à l\u2019échelle européenne.",
                  "A purpose-driven company (société à mission) is a business that enshrines a purpose and social and environmental objectives in its articles of association. In France, this status was created by the PACTE Act of 2019. The Société à Mission Europe project aims to extend this model across Europe."
                )}
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {t("Qui porte le projet Société à Mission Europe ?", "Who leads the Société à Mission Europe project?")}
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  <>
                    Le projet est porté par l&apos;UPHF (Université Polytechnique Hauts-de-France) et l&apos;Observatoire de l&apos;Éthique Publique, en collaboration avec un réseau de{" "}
                    <Link href="/partenaires" className="text-rose-600 hover:underline">partenaires académiques</Link>{" "}
                    prestigieux : HEC Paris, ESSEC, Sciences Po Lille, EDHEC et Mines Paris.
                  </>,
                  <>
                    The project is led by UPHF (Université Polytechnique Hauts-de-France) and the Observatory of Public Ethics, in collaboration with a network of prestigious{" "}
                    <Link href="/partenaires" className="text-rose-600 hover:underline">academic partners</Link>: HEC Paris, ESSEC, Sciences Po Lille, EDHEC and Mines Paris.
                  </>
                )}
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {t("Comment participer au programme de recherche ?", "How can I participate in the research programme?")}
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  <>
                    Chercheurs, entreprises, institutions publiques et associations peuvent rejoindre l&apos;un des trois groupes de travail (territorial, national, européen).{" "}
                    <Link href="/contact" className="text-rose-600 hover:underline">Contactez-nous</Link>{" "}
                    pour en savoir plus sur les modalités de participation.
                  </>,
                  <>
                    Researchers, businesses, public institutions and associations can join one of the three working groups (territorial, national, European).{" "}
                    <Link href="/contact" className="text-rose-600 hover:underline">Contact us</Link>{" "}
                    to learn more about how to participate.
                  </>
                )}
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {t("Quelle est la durée du projet ?", "What is the project duration?")}
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  "Le programme de recherche Société à Mission Europe se déroule sur 3 ans (2025-2028), avec un colloque de lancement le 6 février 2026 à Wallers-Arenberg. Depuis 2019, environ 2390 entreprises ont adopté le statut de société à mission en France. Le projet aboutira à la publication de rapports finaux incluant des recommandations pour une directive européenne.",
                  "The Société à Mission Europe research programme runs over 3 years (2025-2028), with a launch conference on 6 February 2026 in Wallers-Arenberg. Since 2019, around 2,390 companies have adopted purpose-driven company status in France. The project will culminate in the publication of final reports including recommendations for a European directive."
                )}
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">
                {t("Qu\u2019est-ce que la loi PACTE ?", "What is the PACTE Act?")}
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  "La loi PACTE (Plan d\u2019Action pour la Croissance et la Transformation des Entreprises), adoptée en 2019 en France, a créé le statut de société à mission. Elle permet aux entreprises d\u2019inscrire une mission sociétale dans leurs statuts, avec un suivi par un comité de mission et un organisme tiers indépendant.",
                  "The PACTE Act (Plan d\u2019Action pour la Croissance et la Transformation des Entreprises), adopted in 2019 in France, created the purpose-driven company status. It allows companies to enshrine a societal mission in their articles of association, with oversight by a mission committee and an independent third-party body."
                )}
              </p>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Qu'est-ce qu'une société à mission ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Une société à mission est une entreprise qui inscrit dans ses statuts une raison d'être et des objectifs sociaux et environnementaux. En France, ce statut a été créé par la loi PACTE de 2019. Le projet Société à Mission Europe vise à étendre ce modèle à l'échelle européenne."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qui porte le projet Société à Mission Europe ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le projet est porté par l'UPHF (Université Polytechnique Hauts-de-France) et l'Observatoire de l'Éthique Publique, en collaboration avec un réseau de partenaires académiques prestigieux : HEC Paris, ESSEC, Sciences Po Lille, EDHEC et Mines Paris."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment participer au programme de recherche ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Chercheurs, entreprises, institutions publiques et associations peuvent rejoindre l'un des trois groupes de travail (territorial, national, européen). Contactez-nous pour en savoir plus sur les modalités de participation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quelle est la durée du projet ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le programme de recherche Société à Mission Europe se déroule sur 3 ans (2025-2028), avec un colloque de lancement le 6 février 2026 à Wallers-Arenberg. Depuis 2019, environ 2390 entreprises ont adopté le statut de société à mission en France."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Qu'est-ce que la loi PACTE ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La loi PACTE (Plan d'Action pour la Croissance et la Transformation des Entreprises), adoptée en 2019 en France, a créé le statut de société à mission. Elle permet aux entreprises d'inscrire une mission sociétale dans leurs statuts, avec un suivi par un comité de mission et un organisme tiers indépendant."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("Contribuez au projet", "Contribute to the project")}
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10">
            {t(
              "Chercheurs, entreprises, institutions publiques : rejoignez l\u2019un de nos trois groupes de travail.",
              "Researchers, businesses, public institutions: join one of our three working groups."
            )}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors text-lg"
          >
            {t("Nous contacter", "Contact us")}
          </Link>
        </div>
      </section>
    </>
  );
}
