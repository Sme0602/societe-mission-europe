import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Summer School 2026 — Purpose at the Heart of Europe | Société à Mission Europe",
  description:
    "Retour sur la Summer School du projet Société à Mission Europe, les 25-26 juin 2026 à Sciences Po Lille. Programme, keynote de la Commission européenne, European Scientific Council on Purpose, et photos.",
  alternates: {
    canonical:
      "https://societe-mission-europe-pi.vercel.app/evenements/summer-school-juin-2026",
  },
};

const programMatin = [
  {
    time: "9h00",
    title: "Accueil café & petit déjeuner",
  },
  {
    time: "9h30",
    title: "Ouverture par l'équipe du projet",
    subtitle: "Contenu de la journée",
  },
  {
    time: "10h00 – 12h00",
    title: "Ateliers thématiques — Discussion par groupe de travail",
    subtitle: "Réservé aux membres des groupes de travail du projet",
    ateliers: [
      { name: "Europe", color: "bg-blue-50 text-blue-700" },
      { name: "National", color: "bg-rose-50 text-rose-700" },
      { name: "Territorial", color: "bg-amber-50 text-amber-700" },
    ],
  },
  {
    time: "12h00 – 14h00",
    title: "Déjeuner — Cafétéria",
  },
];

const programApresMidi = [
  {
    time: "14h00 – 14h30",
    title: "Discours d'ouverture — Keynote",
    speakers: [
      "Michael Ristaniemi, Chef d'équipe, Unité de conduite responsable des entreprises, DG GROW, Commission européenne",
    ],
  },
  {
    time: "14h30 – 16h30",
    title: "European Scientific Council on Purpose",
    subtitle:
      "Présentations de chercheurs européens sur le concept de \"purpose\"",
    speakers: [
      "Alessio Bartolacelli — Università di Modena e Reggio Emilia",
      "Carolina Cunha — University of Coimbra",
      "Kevin Levillain — Mines Paris PSL",
      "Florian Möslein — University of Vienna",
      "Anne Sanders — University of Bielefeld & Harvard Business School",
      "Blanche Segrestin — Mines Paris PSL",
      "Jeroen Veldman — Nyenrode Business University",
      "Anne-Marie Weber — University of Warsaw",
    ],
    moderator: "Sarah Vandenbroucke",
  },
  {
    time: "17h00",
    title: "Synthèse & perspectives pour l'avenir",
    speakers: [
      "Stéphane Vernac, porteur du projet Société à Mission Europe",
      "Emery Jacquillat, ancien PDG de la Camif, cofondateur de la CEM",
    ],
  },
];

export default function SummerSchoolPage() {
  return (
    <>
      {/* Hero with group photo */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/summer-school/photos/photo-groupe.jpg"
            alt="Photo de groupe — Summer School 2026, Sciences Po Lille"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-navy-800/70 to-navy-800/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/evenements"
                className="inline-flex items-center gap-1.5 text-rose-200 hover:text-white text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Événements
              </Link>
              <span className="text-rose-300/50">·</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/30 rounded-full text-rose-200 text-sm font-medium">
                Événement passé
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
              Summer School{" "}
              <span className="text-rose-400">2026</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-rose-200 italic mb-4">
              Purpose at the Heart of Europe
            </p>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-rose-50 leading-relaxed mb-6">
              Les 25 et 26 juin 2026, le projet Société à Mission Europe a
              organisé sa première Summer School à Sciences Po Lille, réunissant
              chercheurs, praticiens et institutionnels européens autour du
              concept de &quot;purpose&quot;.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-rose-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                25–26 juin 2026
              </div>
              <div className="flex items-center gap-2 text-rose-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                9h00 – 18h00
              </div>
              <div className="flex items-center gap-2 text-rose-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Sciences Po Lille, 9 rue Auguste Angellier
              </div>
              <div className="flex items-center gap-2 text-rose-100">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                En présentiel & en ligne
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Photo de groupe panoramique */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/summer-school/photos/photo-groupe.jpg"
            alt="L'ensemble des participants à la Summer School — Sciences Po Lille, 25-26 juin 2026"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Programme de la journée */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Programme de la journée
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="text-navy-700 text-lg">
              Ateliers de recherche le matin, conférence publique
              l&apos;après-midi avec keynote de la Commission européenne et le
              premier European Scientific Council on Purpose.
            </p>
            <a
              href="/images/summer-school/programme-summer-school-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-rose-50 text-rose-700 font-medium text-sm rounded-lg hover:bg-rose-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Voir le visuel de présentation (PDF)
            </a>
          </div>

          {/* Matinée */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-800">Matinée</h3>
                <p className="text-sm text-navy-600">Amphi B — 9 rue Auguste Angellier, Lille</p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-800 text-sm font-medium">
                La matinée est réservée aux membres des groupes de travail du projet.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-beige-200" />
              <div className="space-y-6">
                {programMatin.map((item, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="relative z-10 w-11 h-11 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-orange-600">
                        {item.time.split("h")[0]}h
                      </span>
                    </div>
                    <div className="bg-beige-50 rounded-card p-5 border border-beige-200 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-bold text-navy-800 text-sm">
                          {item.title}
                        </h4>
                        <span className="text-xs text-navy-600 bg-white px-2 py-0.5 rounded-full border border-beige-200 shrink-0">
                          {item.time}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-rose-600 text-xs font-medium italic mb-2">
                          {item.subtitle}
                        </p>
                      )}
                      {"ateliers" in item && item.ateliers && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.ateliers.map((a) => (
                            <span key={a.name} className={`inline-flex items-center gap-1 px-2.5 py-1 ${a.color} text-xs font-medium rounded-full`}>
                              {a.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Après-midi */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-800">Après-midi</h3>
                <p className="text-sm text-navy-600">Amphi B — 9 rue Auguste Angellier, Lille</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <p className="text-emerald-800 text-sm font-medium">
                L&apos;après-midi est ouverte au public — chercheurs, praticiens, étudiants et citoyens. En anglais.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-beige-200" />
              <div className="space-y-6">
                {programApresMidi.map((item, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="relative z-10 w-11 h-11 bg-white border-2 border-rose-600 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-rose-600">
                        {item.time.split("h")[0].split(" ")[0]}h
                      </span>
                    </div>
                    <div className="bg-beige-50 rounded-card p-5 border border-beige-200 flex-1">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-bold text-navy-800 text-sm">
                          {item.title}
                        </h4>
                        <span className="text-xs text-navy-600 bg-white px-2 py-0.5 rounded-full border border-beige-200 shrink-0">
                          {item.time}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-rose-600 text-xs font-medium italic mb-2">
                          {item.subtitle}
                        </p>
                      )}
                      {item.speakers && (
                        <ul className="space-y-1 mt-2">
                          {item.speakers.map((s, j) => (
                            <li
                              key={j}
                              className="text-navy-700 text-xs leading-relaxed flex items-start gap-1.5"
                            >
                              <span className="w-1 h-1 bg-navy-400 rounded-full shrink-0 mt-1.5" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                      {"moderator" in item && item.moderator && (
                        <p className="text-navy-600 text-xs mt-2 italic">
                          Modéré par {item.moderator}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Photos de l&apos;événement
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/summer-school/photos/vue-amphi.jpg", alt: "Vue de l'amphithéâtre — présentation en plénière", span: "col-span-2 row-span-2" },
              { src: "/images/summer-school/photos/amphi-speaker.jpg", alt: "Intervenant à l'amphithéâtre de Sciences Po Lille" },
              { src: "/images/summer-school/photos/keynote-partenaires.jpg", alt: "Keynote devant la bannière des partenaires" },
              { src: "/images/summer-school/photos/speakers-banniere.jpg", alt: "Intervenants devant la bannière Société à Mission Europe" },
              { src: "/images/summer-school/photos/atelier.jpg", alt: "Session de travail en atelier" },
              { src: "/images/summer-school/photos/atelier-sourires.jpg", alt: "Atelier thématique — échanges entre participants", span: "col-span-2" },
              { src: "/images/summer-school/photos/speaker-audience.jpg", alt: "Intervenant face à l'audience" },
              { src: "/images/summer-school/photos/discussion-atelier.jpg", alt: "Discussion en groupe de travail" },
              { src: "/images/summer-school/photos/prise-parole.jpg", alt: "Prise de parole lors de la Summer School" },
              { src: "/images/summer-school/photos/networking.jpg", alt: "Networking entre participants" },
              { src: "/images/summer-school/photos/banniere-axes.jpg", alt: "Devant la bannière des trois axes du projet" },
              { src: "/images/summer-school/photos/celebration.jpg", alt: "Moment de célébration — bouquet de tournesols" },
              { src: "/images/summer-school/photos/photo-equipe.jpg", alt: "L'équipe organisatrice de la Summer School", span: "col-span-2" },
            ].map((photo, i) => (
              <div
                key={i}
                className={`${photo.span || ""} rounded-card overflow-hidden group`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA retour */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Découvrez nos autres événements
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Colloques, journées de lancement, groupes de travail — retrouvez
            tous les temps forts du projet Société à Mission Europe.
          </p>
          <Link
            href="/evenements"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors"
          >
            Tous les événements
          </Link>
        </div>
      </section>
    </>
  );
}
