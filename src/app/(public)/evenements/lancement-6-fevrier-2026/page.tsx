import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Journée de lancement — 6 février 2026 | Société à Mission Europe",
  description:
    "Retour sur la journée de lancement du projet Société à Mission Europe, le 6 février 2026 sur le site minier de Wallers-Arenberg. Programme, photos et retombées.",
  alternates: {
    canonical:
      "https://societe-mission-europe.com/evenements/lancement-6-fevrier-2026",
  },
};

const programMatin = [
  {
    time: "8:45",
    title: "Accueil",
    lieu: "Salle Leaud",
  },
  {
    time: "9:15",
    title: "Propos introductifs — Lancement du projet",
    subtitle:
      "De la société à mission française à la European Purpose-driven Company",
    speakers: [
      "Abdelhakim Artiba, président de l'Université Polytechnique Hauts-de-France (UPHF)",
      "Roland Lescure, ministre de l'Économie, des Finances et de la Souveraineté industrielle, énergétique et numérique",
      "Xavier Bertrand, président de la région Hauts-de-France",
      "Yvan Verougstraete, député Européen (Belgique), président du parti Les Engagés",
      "Matthieu Caron, porteur du projet, maître de conférences de droit public à l'UPHF, LARSH",
      "Emery Jacquillat, cofondateur de la Communauté des Entreprises à Mission",
      "Jean-Marie Massonnat, représentant de René Dosière, président de l'OEP",
    ],
  },
  {
    time: "10:00",
    title: "Présentation du modèle de la Société à Mission",
    speakers: [
      "Alix Vanmeervenne, ingénieure d'études au LARSH, UPHF",
      "Aïcha Barry, stagiaire à l'OEP, étudiante en Master II droit public, spécialité éthique publique des affaires",
    ],
  },
  {
    time: "10:15",
    title: "Niveau territorial — Présentation du projet de recherche",
    subtitle:
      "Faire des Hauts-de-France un laboratoire de la société à mission en Europe",
    speakers: [
      "Matthieu Caron & Stéphane Vernac, porteurs de projets",
    ],
  },
  {
    time: "10:30",
    title:
      "Niveau national — Aux origines de la société à mission française",
    subtitle: "Fondements intellectuels et institutionnels",
    speakers: [
      "Blanche Segrestin, professeure de sciences de gestion, École des Mines de Paris",
      "Armand Hatchuel, professeur émérite de sciences de gestion, École des Mines de Paris",
      "Kevin Levillain, maître de conférences en sciences de gestion, École des Mines de Paris",
      "Jérémy Lévêque, post-doctorant, École des Mines de Paris",
    ],
  },
  { time: "11:00", title: "Pause" },
  {
    time: "11:15",
    title: "Niveau européen — Comparatif des modèles",
    speakers: [
      "Sarah Vandenbroucke, ingénieure de recherche au LARSH, UPHF",
      "Pablo Maria, doctorant UPHF-ESPOL",
      "Paolo Di Cesare, cofondateur, Nativa Società Benefit",
    ],
  },
];

const programApresMidi = [
  {
    time: "14:30 – 15:15",
    title: "Cas d'étude : le modèle belge de la Société à Mission d'Intérêt Commun",
    speakers: [
      "Benoît Quittre, président de la Coalition belge des Ecopreneurs, Kaya",
      "Jean-Marc Gollier, juriste au cabinet Law4Nature et chargé de cours à l'Université de Louvain",
      "Alexandre Helson, co-CEO de la Maison Dandoy",
      "Serge Hiligsmann, député fédéral porteur de la proposition de loi sur la SMIC",
      "Rachel Feller, lifelong learning manager, Guberna",
    ],
  },
  {
    time: "15:30 – 16:45",
    title: "Ateliers thématiques parallèles",
    ateliers: [
      {
        name: "Atelier 1 — Territoires et niveau national",
        lieu: "Salle Grande Chercheur",
        topic:
          "Société à mission : dynamiques territoriales et cadres nationaux",
      },
      {
        name: "Atelier 2 — European dimensions (English)",
        lieu: "Salle Leaud",
        topic: "Purpose-driven Companies: toward a European model?",
      },
    ],
  },
  {
    time: "17:15 – 17:30",
    title: "Restitution de la journée",
    subtitle: "Par les étudiants",
    speakers: [
      "Master Éthique publique des affaires — UPHF",
      "Master Management Responsable des Entreprises (MRE) — Sciences Po Lille",
    ],
  },
  {
    time: "17:30",
    title: "Propos conclusifs",
    speakers: [
      "Emery Jacquillat, cofondateur de la Communauté des Entreprises à Mission, ancien PDG de la CAMIF",
    ],
  },
];

export default function LancementPage() {
  return (
    <>
      {/* Hero with group photo */}
      <section className="relative bg-navy-800 text-white overflow-hidden">
        {/* Photo de groupe en background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lancement/photo-groupe.jpg"
            alt="Photo de groupe — Journée de lancement Société à Mission Europe"
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Journée de{" "}
              <span className="text-rose-400">lancement</span>
            </h1>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-rose-50 leading-relaxed mb-6">
              Le 6 février 2026, le projet Société à Mission Europe a été
              officiellement lancé sur le site minier de Wallers-Arenberg,
              réunissant près de 300 chercheurs, dirigeants, étudiants et
              responsables publics européens.
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
                6 février 2026
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
                Wallers-Arenberg, Hauts-de-France
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                ~300 participants
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
            src="/images/lancement/photo-groupe.jpg"
            alt="L'ensemble des participants à la journée de lancement — Wallers-Arenberg, 6 février 2026"
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
              Une journée riche en échanges, entre plénières, présentations de
              recherche et ateliers collaboratifs.
            </p>
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
              <h3 className="text-2xl font-bold text-navy-800">Matinée</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-beige-200" />
              <div className="space-y-6">
                {programMatin.map((item, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="relative z-10 w-11 h-11 bg-white border-2 border-rose-600 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-rose-600">
                        {item.time.split(":")[0]}h
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
                      {"lieu" in item && item.lieu && (
                        <p className="text-xs text-navy-600 mb-2">
                          📍 {item.lieu}
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-800">Après-midi</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[22px] top-2 bottom-2 w-0.5 bg-beige-200" />
              <div className="space-y-6">
                {programApresMidi.map((item, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="relative z-10 w-11 h-11 bg-white border-2 border-rose-600 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-rose-600">
                        {item.time.split(":")[0].split(" ")[0]}h
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
                      {"ateliers" in item &&
                        item.ateliers &&
                        item.ateliers.map((a, k) => (
                          <div
                            key={k}
                            className="bg-white rounded-lg p-3 border border-beige-200 mb-2 last:mb-0"
                          >
                            <p className="text-navy-800 text-xs font-bold">
                              {a.name}
                            </p>
                            <p className="text-xs text-navy-600">
                              📍 {a.lieu}
                            </p>
                            <p className="text-xs text-navy-700 italic mt-1">
                              {a.topic}
                            </p>
                          </div>
                        ))}
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
              Photos de la journée
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/lancement/keynote.jpg", alt: "Keynote — présentation en plénière", span: "col-span-2 row-span-2" },
              { src: "/images/lancement/gallery-panel.jpg", alt: "Table ronde avec les intervenants" },
              { src: "/images/lancement/gallery-audience2.jpg", alt: "Le public applaudit" },
              { src: "/images/lancement/gallery-signature.jpg", alt: "Signature de la charte partenariale" },
              { src: "/images/lancement/gallery-atelier.jpg", alt: "Atelier thématique en salle" },
              { src: "/images/lancement/gallery-interview.jpg", alt: "Interview devant la bannière du projet" },
              { src: "/images/lancement/gallery-student.jpg", alt: "Restitution par les étudiants" },
              { src: "/images/lancement/networking.jpg", alt: "Networking et échanges entre participants", span: "col-span-2" },
              { src: "/images/lancement/gallery-panel2.jpg", alt: "Panel sur les modèles européens" },
              { src: "/images/lancement/gallery-moderator.jpg", alt: "Modération par un étudiant" },
              { src: "/images/lancement/gallery-atelier2.jpg", alt: "Présentation en atelier" },
              { src: "/images/lancement/gallery-closing.jpg", alt: "Clôture de la journée" },
              { src: "/images/lancement/gallery-stage.jpg", alt: "Les intervenants réunis sur scène", span: "col-span-2" },
              { src: "/images/lancement/gallery-networking2.jpg", alt: "Échanges informels" },
              { src: "/images/lancement/audience.jpg", alt: "L'audience en plénière" },
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

      {/* LinkedIn Post */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Sur les réseaux
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7426946947648819201"
              height="600"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Publication LinkedIn — Journée de lancement Société à Mission Europe"
              className="rounded-card border border-beige-200 shadow-sm max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Vidéo de la journée */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Vidéo de la journée
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>
          <div className="rounded-card overflow-hidden shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/JjAIkQHwtxA"
                title="Journée de lancement — Société à Mission Europe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA retour */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Découvrez nos prochains événements
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Summer Schools, workshops, colloques — rejoignez-nous pour
            construire le modèle européen de la société à mission.
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
