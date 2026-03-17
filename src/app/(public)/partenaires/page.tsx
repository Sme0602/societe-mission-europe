import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Nos Partenaires académiques et institutionnels | Société à Mission Europe',
  description: 'Réseau d\'excellence : UPHF, HEC Paris, ESSEC, Sciences Po Lille, EDHEC, Mines Paris, Observatoire de l\'Éthique Publique. 50 chercheurs engagés.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/partenaires' }
};

const partenaires = [
  // === ACADÉMIQUE (Higher Education) ===

  // Porteur du projet
  { name: "UPHF", fullName: "Université Polytechnique Hauts-de-France", category: "Académique", logo: "/logos/uphf.svg", description: "Université d'ancrage territorial, porteur du projet Société à Mission Europe." },
  { name: "INSA Hauts-de-France", fullName: "INSA Hauts-de-France", category: "Académique", logo: "/logos/insa-hdf.png", description: "École d'ingénieurs de l'UPHF, partenaire du projet." },

  // Laboratoires et chaires
  { name: "LARSH", fullName: "Laboratoire de Recherche Sociétés & Humanités", category: "Académique", logo: "/logos/larsh.png", description: "Laboratoire de recherche de l'UPHF en sciences humaines et sociales." },
  { name: "ISH", fullName: "Institut Sociétés & Humanités", category: "Académique", logo: "/logos/ish.svg", description: "Institut de l'UPHF dédié aux humanités et sciences sociales." },
  { name: "Théorie de l'Entreprise", fullName: "Chaire Théorie de l'Entreprise - Mines Paris / Collège des Bernardins", category: "Académique", logo: "/logos/theorie-entreprise.png", description: "Chaire de recherche sur la théorie de l'entreprise, Mines Paris – PSL et Collège des Bernardins." },
  { name: "MRE", fullName: "Management Responsable des Entreprises - Sciences Po Lille", category: "Académique", logo: "/logos/mre.png", description: "Majeure en management responsable à Sciences Po Lille." },

  // Grandes écoles de commerce
  { name: "HEC Paris S&O", fullName: "HEC Paris - Sustainability & Organizations Institute", category: "Académique", logo: "/logos/hec.svg", description: "Institut dédié à la durabilité et aux organisations responsables." },
  { name: "ESSEC", fullName: "ESSEC Business School", category: "Académique", logo: "/logos/essec.svg", description: "Grande école pionnière en entrepreneuriat social." },
  { name: "EDHEC", fullName: "EDHEC Business School", category: "Académique", logo: "/logos/edhec.svg", description: "École de commerce contribuant par ses recherches en RSE." },
  { name: "SKEMA", fullName: "SKEMA Business School", category: "Académique", logo: "/logos/skema.svg", description: "Grande école de commerce internationale." },
  { name: "Excelia", fullName: "Excelia Business School", category: "Académique", logo: "/logos/excelia.svg", description: "École de commerce engagée dans la transition responsable." },
  { name: "ESSCA", fullName: "ESSCA School of Management", category: "Académique", logo: "/logos/essca.png", description: "École de management post-bac." },

  // Sciences Po et IEP
  { name: "Sciences Po Lille", fullName: "Sciences Po Lille", category: "Académique", logo: "/logos/sciences-po-lille.png", description: "Institut d'études politiques en politiques publiques européennes." },
  { name: "ESPOL", fullName: "European School of Political and Social Sciences", category: "Académique", logo: "/logos/espol.svg", description: "École européenne de sciences politiques de l'Université Catholique de Lille." },

  // Universités
  { name: "Université Catholique de Lille", fullName: "Université Catholique de Lille", category: "Académique", logo: "/logos/ucl.png", description: "Université privée catholique du Nord de la France." },
  { name: "Université de Lille", fullName: "Université de Lille", category: "Académique", logo: "/logos/univ-lille.svg", description: "Grande université pluridisciplinaire des Hauts-de-France." },
  { name: "ULCO", fullName: "Université du Littoral Côte d'Opale", category: "Académique", logo: "/logos/ulco.png", description: "Université du littoral Nord-Pas-de-Calais." },
  { name: "UPJV", fullName: "Université de Picardie Jules Verne – CEPRISCA – Centre Antoine Loisel", category: "Académique", logo: "/logos/upjv.svg", description: "Université de Picardie, hébergeant le CEPRISCA dirigé par le responsable scientifique du projet." },
  { name: "ICP", fullName: "Institut Catholique de Paris", category: "Académique", logo: "/logos/icp.png", description: "Université privée catholique parisienne." },
  { name: "Mines Paris", fullName: "Mines Paris – PSL", category: "Académique", logo: "/logos/mines-paris.png", description: "Grande école d'ingénieurs sur l'innovation responsable." },
  { name: "Campus de la Transition", fullName: "Campus de la Transition", category: "Académique", logo: "/logos/campus-transition.svg", description: "Lieu d'expérimentation pour la transition écologique et sociale." },
  { name: "IÉSEG", fullName: "IÉSEG School of Management", category: "Académique", logo: "/logos/ieseg.png", description: "Grande école de management, membre de l'Université Catholique de Lille." },
  { name: "Centrale Lille", fullName: "Centrale Lille", category: "Académique", logo: "/logos/centrale-lille.png", description: "École d'ingénieurs de référence dans les Hauts-de-France." },
  { name: "Chaire ICP-ESSEC", fullName: "Chaire Entreprise et Bien Commun – ICP / ESSEC", category: "Académique", logo: "/logos/icp.png", description: "Chaire de recherche sur l'entreprise et le bien commun, portée par l'ICP et l'ESSEC." },

  // === INSTITUTIONNEL (Research, Networks, NGOs, Think Tanks) ===
  { name: "Observatoire Éthique Publique", fullName: "Observatoire de l'Éthique Publique", category: "Institutionnel", logo: "/logos/observatoire.png", description: "Think tank dédié à l'éthique publique, co-porteur du projet." },
  { name: "Observatoire des Sociétés à Mission", fullName: "Observatoire des Sociétés à Mission", category: "Institutionnel", logo: "/logos/observatoire-sam.png", description: "Observatoire dédié au suivi et à l'analyse des sociétés à mission." },
  { name: "Communauté des entreprises à mission", fullName: "Communauté des entreprises à mission", category: "Institutionnel", logo: "/logos/communaute-mission.png", description: "Réseau de référence des sociétés à mission en France." },
  { name: "Réseau Alliances", fullName: "Réseau Alliances", category: "Institutionnel", logo: "/logos/reseau-alliances.png", description: "Acteur de la transition responsable en Hauts-de-France depuis 30 ans." },
  { name: "Entreprises et Cités", fullName: "Entreprises et Cités", category: "Institutionnel", logo: "/logos/entreprises-cites.png", description: "Réseau d'entreprises engagées dans les territoires." },
  { name: "GenAct", fullName: "GenAct", category: "Institutionnel", logo: "/logos/genact.png", description: "Mouvement de la nouvelle génération d'acteurs engagés." },
  { name: "EBEN", fullName: "European Business Ethics Network", category: "Institutionnel", logo: "/logos/eben.png", description: "Réseau européen d'éthique des affaires." },
  { name: "KAYA", fullName: "KAYA - Belgian Coalition of Ecopreneurs", category: "Institutionnel", logo: "/logos/kaya.jpg", description: "Coalition belge des éco-entrepreneurs." },
  { name: "Intersektion", fullName: "Intersektion", category: "Institutionnel", logo: "/logos/intersektion.svg", description: "Organisation dédiée à l'intersection des enjeux sociétaux." },
  { name: "Management & RSE", fullName: "Management & RSE", category: "Institutionnel", logo: "/logos/management-rse.png", description: "Revue et plateforme dédiée au management responsable." },
  { name: "IEREE", fullName: "Institut Européen pour la Refondation de l'Entreprise et de l'Emploi", category: "Institutionnel", logo: "/logos/ieree.png", description: "Institut européen de recherche sur les entreprises et l'emploi." },
  { name: "Région Hauts-de-France", fullName: "Région Hauts-de-France", category: "Institutionnel", logo: "/logos/region-hdf.svg", description: "Co-financeur du projet via le programme FEDER." },
  { name: "Impact France", fullName: "Impact France", category: "Institutionnel", logo: "/logos/impact-france.png", description: "Mouvement des entreprises sociales et écologiques en France." },
  { name: "Vivoices", fullName: "Vivoices", category: "Institutionnel", logo: "/logos/vivoices.png", description: "Plateforme dédiée à l'amplification des voix engagées." },

  // === ENTREPRISE ===
  { name: "Carac", fullName: "Carac – Mutuelle d'épargne", category: "Entreprise", logo: "/logos/carac.png", description: "Mutuelle engagée dans une démarche de société à mission." },
];

const categories = ["Tous", "Académique", "Institutionnel", "Entreprise"];

export default function PartenairesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-medium mb-6">
              Partenaires
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos partenaires{" "}
              <span className="text-orange-600">académiques et institutionnels</span>
            </h1>
            <p className="text-xl text-navy-700 leading-relaxed">
              Le projet Société à Mission Europe fédère les meilleures
              institutions académiques, des acteurs institutionnels engagés et
              des entreprises pionnières.{" "}
              <Link href="/contact" className="text-rose-600 hover:text-rose-500 underline underline-offset-2">
                Rejoignez le projet
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Photo événement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Un réseau d&apos;excellence en action
            </h2>
            <div className="tricolor-separator" />
            <p className="text-navy-700 text-lg max-w-2xl mx-auto">
              Chercheurs, dirigeants et experts réunis pour construire le modèle européen de l&apos;entreprise à mission.
            </p>
          </div>
          <div className="relative rounded-card overflow-hidden shadow-xl">
            <Image
              src="/partenaires-event.jpg"
              alt="Conférence Société à Mission Europe - Partenaires réunis sur scène"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-800/80 to-transparent p-6 md:p-8">
              <p className="text-white text-lg md:text-xl font-medium">
                Lancement du projet Société à Mission Europe — Wallers-Arenberg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 bg-white border-b border-beige-200 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  index === 0
                    ? "bg-rose-600 text-white"
                    : "bg-beige-100 text-navy-700 hover:bg-beige-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grille des partenaires */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partenaires.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Logo area */}
                <div className="h-40 bg-gradient-to-br from-beige-50 to-beige-100 flex items-center justify-center p-6 group-hover:from-beige-50 group-hover:to-beige-100 transition-colors duration-300">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={100}
                    height={100}
                    className="w-24 h-24 object-contain rounded-xl"
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
                  Devenir partenaire
                </h2>
                <div className="tricolor-separator" />
                <p className="text-navy-700 text-lg leading-relaxed mb-6">
                  Vous êtes une institution académique, un organisme de
                  recherche, une entreprise engagée ou un acteur public ?
                  Rejoignez notre réseau de partenaires et contribuez à
                  l&apos;émergence du modèle européen de la société à mission.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Accès aux travaux de recherche",
                    "Participation aux colloques et événements",
                    "Réseau européen d'experts",
                    "Visibilité et reconnaissance",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
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
                  Nous contacter
                </Link>
              </div>
              <div className="hidden lg:flex bg-gradient-to-br from-rose-600 to-rose-700 items-center justify-center p-16">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">35+</div>
                  <div className="text-xl font-bold mb-2">Partenaires</div>
                  <p className="text-rose-50">
                    Institutions académiques et acteurs engagés
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
