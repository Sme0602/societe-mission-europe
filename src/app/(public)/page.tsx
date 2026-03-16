import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Société à Mission Europe | Programme de recherche européen sur l\'entreprise à mission',
  description: 'Découvrez le programme de recherche Société à Mission Europe : 50 chercheurs, 20+ partenaires académiques (UPHF, HEC, ESSEC) construisent le modèle européen de l\'entreprise à mission.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh' }
};

const piliers = [
  {
    title: "Hauts-de-France",
    subtitle: "Laboratoire territorial",
    description:
      "Les Hauts-de-France comme territoire d'expérimentation pour accompagner les entreprises dans leur transformation en sociétés à mission, avec un ancrage local fort.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "jaune",
  },
  {
    title: "France",
    subtitle: "Bilan national",
    description:
      "Un état des lieux complet de la loi PACTE et de son impact sur les sociétés à mission en France, pour dresser un bilan et identifier les leviers d'amélioration.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    color: "rose",
  },
  {
    title: "Europe",
    subtitle: "Propositions UE",
    description:
      "Élaborer des recommandations concrètes pour une directive européenne sur la société à mission, en s'appuyant sur les meilleures pratiques françaises et internationales.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "navy",
  },
];

const chiffres = [
  { value: "2 390+", label: "Sociétés à mission en France" },
  { value: "27", label: "Pays membres de l'UE" },
  { value: "3", label: "Groupes de travail" },
  { value: "30+", label: "Partenaires" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-main text-navy-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-orange-600">Société à Mission</span>{" "}
              <span className="text-rose-600">Europe</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-navy-700 mt-4">
                Bâtir le modèle européen de l&apos;entreprise de demain
              </span>
            </h1>

            {/* Tricolor separator */}
            <div className="tricolor-separator w-32 mb-8" />

            <p className="text-navy-700 text-lg max-w-2xl mb-10 leading-relaxed">
              Un{" "}
              <Link href="/projet" className="text-rose-600 hover:text-rose-700 underline underline-offset-2">
                programme de recherche société à mission
              </Link>{" "}
              fédérant les acteurs académiques, institutionnels et
              entrepreneuriaux pour construire un cadre européen ambitieux, avec{" "}
              <Link href="/partenaires" className="text-rose-600 hover:text-rose-700 underline underline-offset-2">
                nos partenaires académiques
              </Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projet" className="btn-primary text-lg px-8 py-4">
                Découvrir le projet
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-lg px-8 py-4"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 md:py-20 bg-white -mt-px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {chiffres.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-navy-700">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Piliers */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Trois échelles d&apos;action</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Une approche multi-niveaux pour transformer la société à mission du
              territoire local à l&apos;échelle européenne.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {piliers.map((pilier) => (
              <div
                key={pilier.title}
                className="bg-white rounded-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-beige-200 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pilier.color === "jaune"
                      ? "bg-yellow-50 text-jaune-400"
                      : pilier.color === "rose"
                      ? "bg-rose-50 text-rose-600"
                      : "bg-blue-50 text-navy-800"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {pilier.icon}
                </div>
                <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${
                  pilier.color === "jaune"
                    ? "text-jaune-400"
                    : pilier.color === "rose"
                    ? "text-rose-600"
                    : "text-navy-800"
                }`}>
                  {pilier.subtitle}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {pilier.title}
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  {pilier.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projet" className="btn-primary">
              En savoir plus sur le projet
            </Link>
          </div>
        </div>
      </section>

      {/* Événement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-3xl overflow-hidden">
            <div className="tricolor-separator" />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-500 text-sm font-bold mb-6">
                  Prochain événement
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Colloque de lancement
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Rejoignez-nous pour le colloque inaugural du projet Société à
                  Mission Europe, réunissant chercheurs, dirigeants et
                  décideurs publics.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">6 février 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>9h00 – 17h00</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Wallers Arenberg</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  S&apos;inscrire à l&apos;événement
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center p-16">
                <div className="w-full max-w-xs">
                  <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 text-center border border-white/20">
                    <div className="text-6xl font-bold text-rose-600 mb-2">6</div>
                    <div className="text-2xl font-bold text-white mb-1">Février</div>
                    <div className="text-gray-300">2026</div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="text-white font-bold">Wallers Arenberg</div>
                      <div className="text-gray-400 text-sm mt-1">Hauts-de-France</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires preview */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos partenaires</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Un réseau d&apos;excellence académique et institutionnelle au
              service du projet.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {[
              { name: "UPHF", logo: "/logos/uphf.svg" },
              { name: "Observatoire Éthique Publique", logo: "/logos/observatoire.png" },
              { name: "HEC Paris", logo: "/logos/hec.svg" },
              { name: "ESSEC", logo: "/logos/essec.svg" },
              { name: "EDHEC", logo: "/logos/edhec.svg" },
              { name: "Mines Paris", logo: "/logos/mines-paris.png" },
              { name: "Université de Lille", logo: "/logos/univ-lille.svg" },
              { name: "Carac", logo: "/logos/carac.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-card p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-beige-200 h-24"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/partenaires" className="btn-outline">
              Voir tous les partenaires
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez le mouvement
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10 max-w-2xl mx-auto">
            Participez à la construction du modèle européen de la société à
            mission. Chercheurs, entreprises, institutions : votre contribution
            est essentielle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors text-lg"
            >
              Nous contacter
            </Link>
            <Link
              href="/projet"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-rose-600 transition-colors text-lg"
            >
              Découvrir le projet
            </Link>
          </div>
          <a
            href="https://www.linkedin.com/company/soci%C3%A9t%C3%A9-%C3%A0-mission-europe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-rose-50 hover:text-white transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Suivez-nous sur LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
