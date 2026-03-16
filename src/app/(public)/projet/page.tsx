import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Le Projet de recherche | Société à Mission Europe',
  description: 'Programme de recherche-action sur 3 ans : étude territoriale Hauts-de-France, bilan national loi PACTE, propositions pour une directive européenne sur la société à mission.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/projet' }
};

const groupes = [
  {
    id: "territorial",
    title: "Groupe Territorial",
    region: "Hauts-de-France",
    subtitle: "Laboratoire territorial",
    description:
      "Les Hauts-de-France constituent le terrain d'expérimentation du projet. Ce groupe de travail accompagne les entreprises régionales dans leur démarche de société à mission et documente les bonnes pratiques pour créer un modèle reproductible.",
    objectifs: [
      "Cartographier les sociétés à mission des Hauts-de-France",
      "Accompagner les entreprises dans leur transformation",
      "Documenter les retours d'expérience terrain",
      "Créer un réseau régional d'entreprises à mission",
      "Évaluer l'impact territorial des sociétés à mission",
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
    title: "Groupe National",
    region: "France",
    subtitle: "Bilan national de la loi PACTE",
    description:
      "Ce groupe de travail réalise un état des lieux approfondi de la loi PACTE et de son application depuis 2019. Il analyse l'évolution du statut de société à mission en France, identifie les forces et les axes d'amélioration du cadre législatif.",
    objectifs: [
      "Dresser un bilan quantitatif et qualitatif de la loi PACTE",
      "Analyser les pratiques des comités de mission",
      "Évaluer la pertinence du cadre juridique actuel",
      "Proposer des évolutions législatives",
      "Comparer avec les cadres juridiques internationaux",
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
    title: "Groupe Européen",
    region: "Union Européenne",
    subtitle: "Propositions pour l'UE",
    description:
      "Le groupe européen travaille à l'élaboration de recommandations concrètes pour une directive européenne sur la société à mission. Il s'appuie sur l'expérience française et les initiatives similaires dans d'autres pays membres.",
    objectifs: [
      "Cartographier les initiatives similaires dans l'UE",
      "Rédiger des propositions de directive européenne",
      "Mobiliser un réseau de partenaires européens",
      "Organiser des auditions d'experts internationaux",
      "Produire un livre blanc européen",
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
    date: "Février 2026",
    title: "Colloque de lancement",
    desc: "Wallers-Arenberg – Environ 250 participants réunis pour lancer officiellement le programme de recherche",
  },
  {
    date: "2026",
    title: "Phase de recherche territoriale et nationale",
    desc: "Travaux parallèles des trois groupes, collecte de données terrain en Hauts-de-France et analyse nationale de la loi PACTE",
  },
  {
    date: "2027",
    title: "Restitutions intermédiaires et événements européens",
    desc: "Présentation des premiers résultats, auditions d'experts internationaux et colloques européens",
  },
  {
    date: "2028",
    title: "Publications finales et recommandations",
    desc: "Livres blancs, ouvrages collectifs et recommandations pour une directive européenne sur la purpose-driven company",
  },
];

const teamMembers = [
  {
    name: "Matthieu Caron",
    initials: "MC",
    role: "Porteur du projet",
    title: "Maître de conférences HDR en droit",
    affiliation: "UPHF & Sciences Po Lille",
    description:
      "Ancien élève de l\u2019École Normale Supérieure de Cachan, agrégé d\u2019économie et de gestion, titulaire d\u2019un DEA de droit public approfondi (Paris 1), d\u2019un magistère de droit européen et d\u2019un doctorat en droit public. Certifié par HEC Paris en management de la transition durable et par l\u2019ESSEC en RSE. Dirige le master Management responsable des entreprises à Sciences Po Lille, le cycle supérieur de direction, l\u2019Observatoire de l\u2019Éthique Publique et la chaire européenne sur la société à mission. Recherches en droit gouvernemental, éthique publique, analyse juridique de l\u2019économie et éthique des affaires.",
    color: "bg-rose-600",
  },
  {
    name: "Stéphane Vernac",
    initials: "SV",
    role: "Responsable scientifique",
    title: "Professeur de droit",
    affiliation: "UPJV, Directeur du CEPRISCA-Centre Antoine Loisel",
    description:
      "Agrégé de droit privé, professeur à l\u2019Université de Picardie Jules Verne. Directeur du Centre de droit privé et de sciences criminelles d\u2019Amiens. Co-directeur du master Droit du travail (UPJV), directeur scientifique de la revue Lexbase social et membre du comité de rédaction de la Revue de droit du travail (Dalloz). Ancien élève de l\u2019ENS Cachan, chercheur associé au Centre de gestion scientifique de Mines ParisTech et membre de l\u2019Observatoire de l\u2019Éthique Publique. Recherches sur les pouvoirs dans l\u2019organisation, la gouvernance d\u2019entreprise et la société à mission.",
    color: "bg-navy-800",
  },
  {
    name: "Sarah Vandenbroucke",
    initials: "SV",
    role: "Ingénieure de recherche",
    title: "Axe France & Europe",
    affiliation: "UPHF/LARSH",
    description:
      "Docteure en droit de l\u2019Université de Leiden (Pays-Bas), licence en droit (Lille 2), LL.M. en droit européen (Leiden, 2017), double master en droit du travail et sociologie des organisations (Toulouse 1 & Amsterdam, 2018). Expérience à l\u2019Assemblée parlementaire du Conseil de l\u2019Europe (Commission Égalité, Strasbourg), au bureau régional de l\u2019OIT pour l\u2019Asie du Sud-Est (New Delhi) et comme consultante dans les institutions de l\u2019UE à Bruxelles. Coordinatrice du Empirical Legal Studies Lab à Leiden et chercheuse invitée à l\u2019Institut universitaire européen (Florence). Recherches sur la conduite responsable des entreprises, l\u2019éthique des affaires et les modes alternatifs de gouvernance.",
    color: "bg-jaune-400",
  },
  {
    name: "Alix Vanmeervenne",
    initials: "AV",
    role: "Ingénieure d\u2019études",
    title: "Axe territorial Hauts-de-France",
    affiliation: "UPHF/LARSH",
    description:
      "Ingénieure d\u2019études à l\u2019UPHF, rattachée au laboratoire Sociétés & Humanités. Travaux sur les sociétés à mission, l\u2019histoire socio-économique régionale et la structuration communautaire par la recherche-action. Diplômée avec mention du master Management responsable des entreprises de Sciences Po Lille. Expérience en conseil service civique (Impulso), accompagnement décarbonation CSE (Représente.org) et conseil RSE (Parangone / GenAct). Coordonne deux ouvrages collectifs pour le projet.",
    color: "bg-rose-600",
  },
  {
    name: "Pablo Maria",
    initials: "PM",
    role: "Doctorant (1ère année)",
    title: "Recherche européenne",
    affiliation: "UPHF/ESPOL/LARSH",
    description:
      "Doctorant en sciences de gestion à l\u2019UPHF et ESPOL, rattaché au LARSH. Diplômé du master MRE de Sciences Po Lille. Recherche sur les modèles européens de purpose-driven company, analysant le rôle du territoire dans la diffusion des pratiques de gouvernance responsable. Étude comparative de la mise en œuvre de la société à mission dans les métropoles de Lille, Rome et Barcelone. Co-fondateur de la startup Intersektion, accompagnant les transitions écologiques et sociales des entreprises.",
    color: "bg-navy-800",
  },
  {
    name: "Jean-Marie Massonnat",
    initials: "JM",
    role: "Rapporteur du projet",
    title: "Professeur de chaire supérieure",
    affiliation: "Observatoire de l\u2019Éthique Publique",
    description:
      "Ancien élève de l\u2019ENS Cachan, agrégé d\u2019économie et gestion, titulaire d\u2019un DEA en sciences de gestion (Paris II Panthéon-Assas) et d\u2019une licence en droit (Rennes I). Enseigne en classes préparatoires à Nantes, au master de l\u2019IAE de Nantes et au master MRE de Sciences Po Lille. Recherches sur la régulation économique par le droit, les théories de la croissance et de la post-croissance, la théorie de l\u2019entreprise, l\u2019évaluation extra-financière et les modèles d\u2019entreprise alternatifs. Membre fondateur et administrateur de l\u2019Observatoire de l\u2019Éthique Publique, rapporteur chargé de documenter l\u2019histoire du projet.",
    color: "bg-jaune-400",
  },
  {
    name: "Aïcha Barry",
    initials: "AB",
    role: "Stagiaire",
    title: "Droit public & éthique des affaires",
    affiliation: "UPHF / Observatoire de l\u2019Éthique Publique",
    description:
      "Étudiante en Master II droit public, spécialité éthique des affaires (UPHF). Stage à l\u2019Observatoire de l\u2019Éthique Publique, recherches sur la compliance, l\u2019anti-corruption, la transparence financière et la RSE. Mémoire sur la déontologie et l\u2019éthique des magistrats (étude comparée France / CJUE). Expérience en alternance juridique chez Décathlon France (conformité réglementaire, scoring environnemental) et stage au Secrétariat général du Gouvernement de Guinée (gouvernance institutionnelle). Appui transversal au projet et veille stratégique sur les sociétés à mission en Hauts-de-France.",
    color: "bg-rose-600",
  },
];

const livrables = [
  { count: 14, label: "Productions scientifiques et opérationnelles" },
  { count: 10, label: "Événements" },
  { count: 4, label: "Études" },
  { count: 4, label: "Ouvrages" },
  { count: 3, label: "Livres blancs" },
  { count: 2, label: "Cartographies" },
  { count: 1, label: "Thèse de doctorat" },
];

export default function ProjetPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              Le Projet
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Le projet de recherche{" "}
              <span className="text-rose-600">Société à Mission Europe</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-700 font-medium italic mb-4">
              De la société à mission française à la purpose-driven company européenne
            </p>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-navy-700 leading-relaxed">
              Programme de recherche-action soutenu par le FEDER, le projet Société à Mission Europe s&apos;organise autour de trois
              groupes de travail complémentaires, du territoire local à
              l&apos;échelle européenne, portés par{" "}
              <Link href="/partenaires" className="text-rose-600 hover:text-rose-700 underline underline-offset-2">
                nos partenaires académiques
              </Link>.
            </p>
          </div>
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
                    Participer à ce groupe
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
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
                      Objectifs
                    </h3>
                    <ul className="space-y-3">
                      {groupe.objectifs.map((obj) => (
                        <li key={obj} className="flex items-start gap-3">
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
            <h2 className="section-title">L&apos;équipe</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Une équipe pluridisciplinaire de 7 chercheurs, ingénieurs et doctorants engagés dans le projet.
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
              Découvrir toute l&apos;équipe
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Calendrier du projet</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Les grandes étapes de notre programme de recherche sur 3 ans (2025-2028).
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
            <h2 className="section-title">Livrables attendus</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Le projet produira un ensemble de ressources scientifiques et opérationnelles à destination des chercheurs, entreprises et décideurs publics.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {livrables.map((item) => (
              <div
                key={item.label}
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

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Questions fréquentes</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Tout savoir sur le programme de recherche Société à Mission Europe.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">Qu&apos;est-ce qu&apos;une société à mission ?</h3>
              <p className="text-navy-700 leading-relaxed">
                Une société à mission est une entreprise qui inscrit dans ses statuts une raison d&apos;être et des objectifs sociaux et environnementaux. En France, ce statut a été créé par la loi PACTE de 2019. Le projet Société à Mission Europe vise à étendre ce modèle à l&apos;échelle européenne.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">Qui porte le projet Société à Mission Europe ?</h3>
              <p className="text-navy-700 leading-relaxed">
                Le projet est porté par l&apos;UPHF (Université Polytechnique Hauts-de-France) et l&apos;Observatoire de l&apos;Éthique Publique, en collaboration avec un réseau de{" "}
                <Link href="/partenaires" className="text-rose-600 hover:underline">partenaires académiques</Link>{" "}
                prestigieux : HEC Paris, ESSEC, Sciences Po Lille, EDHEC et Mines Paris.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">Comment participer au programme de recherche ?</h3>
              <p className="text-navy-700 leading-relaxed">
                Chercheurs, entreprises, institutions publiques et associations peuvent rejoindre l&apos;un des trois groupes de travail (territorial, national, européen).{" "}
                <Link href="/contact" className="text-rose-600 hover:underline">Contactez-nous</Link>{" "}
                pour en savoir plus sur les modalités de participation.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">Quelle est la durée du projet ?</h3>
              <p className="text-navy-700 leading-relaxed">
                Le programme de recherche Société à Mission Europe se déroule sur 3 ans (2025-2028), avec un colloque de lancement le 6 février 2026 à Wallers-Arenberg. Depuis 2019, environ 2390 entreprises ont adopté le statut de société à mission en France. Le projet aboutira à la publication de rapports finaux incluant des recommandations pour une directive européenne.
              </p>
            </div>

            <div className="bg-white rounded-card p-6 border border-beige-200">
              <h3 className="text-lg font-bold text-navy-800 mb-2">Qu&apos;est-ce que la loi PACTE ?</h3>
              <p className="text-navy-700 leading-relaxed">
                La loi PACTE (Plan d&apos;Action pour la Croissance et la Transformation des Entreprises), adoptée en 2019 en France, a créé le statut de société à mission. Elle permet aux entreprises d&apos;inscrire une mission sociétale dans leurs statuts, avec un suivi par un comité de mission et un organisme tiers indépendant.
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
            Contribuez au projet
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10">
            Chercheurs, entreprises, institutions publiques : rejoignez l&apos;un
            de nos trois groupes de travail.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors text-lg"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
