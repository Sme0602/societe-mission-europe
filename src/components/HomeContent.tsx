"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { newsItems, badgeConfig } from "@/data/news-items";

const heroPhotos = [
  1,77,2,78,3,79,4,80,5,81,6,82,7,83,8,84,9,85,10,86,
  11,87,12,88,13,89,14,90,15,91,16,92,17,93,18,94,19,95,20,96,
  21,97,22,98,23,99,24,100,26,101,27,102,28,103,29,104,30,105,31,106,
  32,107,33,108,34,109,35,110,36,111,37,112,38,113,39,114,40,115,42,116,
  43,117,44,118,45,119,46,120,47,121,48,122,49,123,50,124,51,125,52,126,
  53,127,54,128,55,129,56,130,57,131,58,132,59,133,60,134,61,135,62,136,
  63,137,64,138,65,66,67,68,69,70,71,72,73,74,75,76,
].map((n) => `/images/carousel/photo-${n}.jpg`);

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function NewsCarousel() {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 340 + 20;
    if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 10) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(scroll, 3500);
    return () => clearInterval(interval);
  }, [paused, scroll]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-beige-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-rose-600 mb-2">
            {t("Dernières nouvelles", "Latest news")}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">
            {t("Actualités du projet", "Project news")}
          </h2>
          <div className="tricolor-separator w-24" />
        </div>
      </div>
      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100%-80rem)/2+1.5rem))]"
        style={{ scrollbarWidth: "none" }}
      >
        {newsItems.map((item, i) => {
          const badge = badgeConfig[item.type];
          const isFirst = i === 0;
          const linkConfig: Record<string, { label: string; labelEn: string; href?: string }> = {
            publication: { label: "Voir nos travaux", labelEn: "See our work", href: "/travaux" },
            presse: { label: "Voir les articles de presse", labelEn: "See press articles", href: "/presse-news" },
            linkedin: { label: "Voir le post LinkedIn", labelEn: "See LinkedIn post" },
            podcast: { label: "Écouter le podcast", labelEn: "Listen to the podcast" },
            evenement: { label: "Voir l'événement", labelEn: "See the event" },
            newsletter: { label: "Lire la newsletter", labelEn: "Read the newsletter" },
            video: { label: "Voir la vidéo", labelEn: "Watch the video" },
          };
          const lc = linkConfig[item.type] || { label: "Voir", labelEn: "View" };
          const href = lc.href || item.url;
          const isExternal = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`flex-none snap-start rounded-2xl p-6 flex flex-col gap-3 transition-all group ${
                isFirst
                  ? "w-[380px] bg-navy-800 text-white hover:shadow-2xl min-h-[220px] justify-end relative overflow-hidden"
                  : "w-[320px] bg-white border border-beige-200 hover:shadow-lg hover:border-rose-200 hover:-translate-y-1"
              }`}
            >
              {isFirst && (
                <div className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-widest text-rose-300">
                  {t("À la une", "Featured")}
                </div>
              )}
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full w-fit ${
                isFirst ? "bg-white/15 text-white" : `${badge.bg} ${badge.text}`
              }`}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
                </svg>
                {badge.label}
              </span>
              <span className={`text-xs ${isFirst ? "text-beige-200" : "text-navy-500"}`}>{item.date}</span>
              <p className={`font-medium leading-snug flex-1 ${
                isFirst ? "text-base md:text-lg text-white" : "text-sm text-navy-800"
              }`}>{item.title}</p>
              <span className={`text-xs font-semibold flex items-center gap-1 mt-1 ${
                isFirst
                  ? "text-rose-300 group-hover:text-rose-200"
                  : "text-rose-600 group-hover:text-rose-700"
              }`}>
                {t(lc.label, lc.labelEn)}
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          );
        })}
        <div className="flex-none w-4 sm:w-6 lg:w-8" aria-hidden="true" />
      </div>
    </section>
  );
}

function PhotoBubbles() {
  const [shuffled] = useState(() => shuffleArray(heroPhotos));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (shuffled.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [shuffled.length]);

  const photos = [
    shuffled[index % shuffled.length],
    shuffled[(index + 1) % shuffled.length],
    shuffled[(index + 2) % shuffled.length],
  ];

  return (
    <div className="hidden md:flex flex-col items-center gap-4 py-8">
      {photos.map((src, i) => (
        <div
          key={`${index}-${i}`}
          className="rounded-full overflow-hidden border-4 border-white/40 shadow-lg transition-all duration-700 w-48 h-48 lg:w-56 lg:h-56"
          style={{ animation: "fadeIn 0.8s ease-in-out" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default function HomeContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-main text-navy-800 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="flex items-center justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                <span className="text-orange-600">Société à Mission</span>{" "}
                <span className="text-rose-600">Europe</span>
                <span className="block text-xl sm:text-2xl lg:text-3xl font-normal text-navy-700 mt-4">
                  {t(
                    "Bâtir le modèle européen de l'entreprise de demain",
                    "Building the European model of the company of tomorrow"
                  )}
                </span>
              </h1>

              <div className="tricolor-separator w-32 mb-8" />

              <p className="text-navy-700 text-base max-w-2xl mb-10 leading-relaxed">
                {t(
                  "Un programme de recherche-action de 3 ans consacré à l'analyse et à la diffusion du modèle de la société à mission en France et en Europe, porté par l'UPHF et cofinancé par l'Union européenne et la Région Hauts-de-France.",
                  "A 3-year action-research programme dedicated to analysing and promoting the purpose-driven company model in France and Europe, led by UPHF and co-funded by the European Union and the Hauts-de-France Region."
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projet" className="btn-primary text-base px-6 py-3">
                  {t("Découvrir le projet de recherche", "Discover the research project")}
                </Link>
              </div>

              {/* Logo FEDER */}
              <div className="mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/feder-double-v2.png"
                  alt={t(
                    "Cofinancé par l'Union européenne et la Région Hauts-de-France",
                    "Co-funded by the European Union and the Hauts-de-France Region"
                  )}
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </div>
            </div>

            <PhotoBubbles />
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Le projet en bref */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
                {t(
                  <>Un projet de recherche-action <span className="text-rose-600">inédit</span></>,
                  <>An <span className="text-rose-600">unprecedented</span> action-research project</>
                )}
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  {t(
                    "Issue d'un travail collectif associant chercheurs, dirigeants d'entreprise, partenaires sociaux, hauts fonctionnaires et responsables politiques, la société à mission française constitue une innovation juridique majeure introduite par la loi Pacte de 2019.",
                    "Born from a collective effort bringing together researchers, business leaders, social partners, senior civil servants and policymakers, the French purpose-driven company (société à mission) represents a major legal innovation introduced by the Pacte Law of 2019."
                  )}
                </p>
                <p>
                  {t(
                    <>Quinze ans après l&apos;émergence de cette réflexion en France, et sept ans après son inscription dans le droit positif, le projet <strong className="text-navy-800">Société à Mission Europe</strong> ambitionne d&apos;ouvrir une nouvelle étape de recherche et d&apos;expérimentation.</>,
                    <>Fifteen years after the emergence of this concept in France, and seven years after its incorporation into positive law, the <strong className="text-navy-800">Société à Mission Europe</strong> project aims to open a new stage of research and experimentation.</>
                  )}
                </p>
                <p>
                  {t(
                    "Conçu comme un « acte II » de la société à mission, il élargit l'analyse — jusqu'ici principalement nationale — à l'échelle des territoires et de l'Europe, afin d'en évaluer les effets concrets, d'en identifier les forces et les limites, et d'explorer les conditions de sa diffusion.",
                    "Conceived as an \"Act II\" of the purpose-driven company, it broadens the analysis — hitherto mainly national — to the territorial and European scale, in order to evaluate its concrete effects, identify its strengths and limitations, and explore the conditions for its wider adoption."
                  )}
                </p>
              </div>
              <Link href="/projet" className="inline-flex items-center gap-2 mt-6 text-rose-600 hover:text-rose-700 font-semibold transition-colors">
                {t("En savoir plus sur le projet", "Learn more about the project")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Photo */}
            <div className="relative">
              <div className="rounded-card overflow-hidden shadow-lg border border-beige-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lancement/keynote.jpg" alt={t("Présentation lors de la journée de lancement — Wallers-Arenberg", "Presentation at the launch event — Wallers-Arenberg")} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-rose-600 text-white rounded-card px-5 py-3 shadow-lg">
                <p className="text-sm font-bold">{t("Lancement du projet", "Project launch")}</p>
                <p className="text-xs text-rose-100">Matthieu Caron & Stéphane Vernac</p>
                <p className="text-xs text-rose-100">Wallers-Arenberg — {t("6 février 2026", "6 February 2026")}</p>
              </div>
            </div>

            {/* Photos Sarah & Alix — Summer School */}
            <div className="relative mt-10 lg:order-1">
              <div className="rounded-card overflow-hidden shadow-lg border border-beige-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/summer-school/alix-sarah-summer-school.jpg" alt={t("Alix Vanmeervenne et Sarah Vandenbroucke à la Summer School — Sciences Po Lille, 26 juin 2026", "Alix Vanmeervenne and Sarah Vandenbroucke at the Summer School — Sciences Po Lille, 26 June 2026")} className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-rose-600 text-white rounded-card px-5 py-3 shadow-lg">
                <p className="text-sm font-bold">Summer School</p>
                <p className="text-xs text-rose-100">Alix Vanmeervenne & Sarah Vandenbroucke</p>
                <p className="text-xs text-rose-100">Sciences Po Lille — {t("26 juin 2026", "26 June 2026")}</p>
              </div>
            </div>

            {/* Texte Summer School */}
            <div className="mt-10 lg:order-2 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-3">
                {t("Summer School 2026", "Summer School 2026")}
              </h3>
              <div className="tricolor-separator w-20 mb-4" />
              <div className="space-y-3 text-navy-700 leading-relaxed">
                <p>
                  {t(
                    "Le 26 juin 2026, Sciences Po Lille a accueilli la première Summer School « Purpose at the Heart of Europe », réunissant chercheurs, praticiens et institutionnels de toute l'Europe.",
                    "On 26 June 2026, Sciences Po Lille hosted the first Summer School 'Purpose at the Heart of Europe', bringing together researchers, practitioners and institutional representatives from across Europe."
                  )}
                </p>
                <p>
                  {t(
                    "Une journée d'échanges et de réflexion pour penser ensemble l'avenir de l'entreprise à mission à l'échelle européenne.",
                    "A day of exchange and reflection to collectively envision the future of the purpose-driven company at the European scale."
                  )}
                </p>
              </div>
              <Link href="/evenements/summer-school-juin-2026" className="inline-flex items-center gap-2 mt-4 text-rose-600 hover:text-rose-700 font-semibold transition-colors">
                {t("Découvrir la Summer School", "Discover the Summer School")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités du projet */}
      <NewsCarousel />

      {/* Le projet en chiffres */}
      <section className="py-16 md:py-20 bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {t("Le projet en quelques mots", "The project in a nutshell")}
            </h2>
            <div className="tricolor-separator w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/5 rounded-card p-8 border border-white/10">
              <h3 className="text-lg font-bold text-rose-400 mb-4">
                {t("3 ans de recherche-action", "3 years of action-research")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(
                  "Un programme de 2025 à 2028, cofinancé par la Région Hauts-de-France et l'Union européenne (FEDER), structuré autour de 3 axes : territorial, national et européen.",
                  "A programme from 2025 to 2028, co-funded by the Hauts-de-France Region and the European Union (ERDF), structured around 3 axes: territorial, national and European."
                )}
              </p>
            </div>

            <div className="bg-white/5 rounded-card p-8 border border-white/10">
              <h3 className="text-lg font-bold text-rose-400 mb-4">
                {t("L'équipe", "The team")}
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0" />
                  {t("2 porteurs de projet", "2 project leaders")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0" />
                  {t("2 ingénieures (recherche / études)", "2 research engineers")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0" />
                  {t("1 doctorant", "1 PhD student")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0" />
                  {t("1 rapporteur du projet", "1 project rapporteur")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full shrink-0" />
                  {t("1 responsable administrative", "1 administrative manager")}
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-card p-8 border border-white/10 text-center">
              <div className="text-3xl font-bold text-rose-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">
                {t("Contributeurs & participants", "Contributors & participants")}
              </div>
            </div>
            <div className="bg-white/5 rounded-card p-8 border border-white/10 text-center">
              <div className="text-3xl font-bold text-rose-400 mb-2">30+</div>
              <div className="text-gray-300 text-sm">
                {t("Partenaires académiques et institutionnels", "Academic and institutional partners")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Axes */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t("Trois axes de recherche", "Three research axes")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-beige-200 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-yellow-50 text-jaune-400 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-2 text-jaune-400">
                {t("Axe territorial", "Territorial axis")}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Hauts-de-France</h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  "Un laboratoire d'analyse et d'expérimentation pour accompagner les entreprises du territoire dans leur transformation en sociétés à mission.",
                  "A laboratory for analysis and experimentation to support local businesses in their transformation into purpose-driven companies."
                )}
              </p>
            </div>

            <div className="bg-white rounded-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-beige-200 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-rose-50 text-rose-600 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-2 text-rose-600">
                {t("Axe national", "National axis")}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">France</h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  "L'évolution du modèle français de la société à mission : bilan de la loi Pacte, forces, limites et leviers d'amélioration.",
                  "The evolution of the French purpose-driven company model: assessment of the Pacte Law, strengths, limitations and levers for improvement."
                )}
              </p>
            </div>

            <div className="bg-white rounded-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-beige-200 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-navy-800 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-2 text-navy-800">
                {t("Axe européen", "European axis")}
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Europe</h3>
              <p className="text-navy-700 leading-relaxed">
                {t(
                  "Étude comparative des modèles d'entreprises à mission et des formes de gouvernance alternatives en Europe, vers une purpose-driven company européenne.",
                  "Comparative study of purpose-driven company models and alternative governance forms in Europe, towards a European purpose-driven company."
                )}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/groupes-de-travail" className="btn-primary">
              {t("Découvrir les groupes de travail", "Discover the working groups")}
            </Link>
          </div>
        </div>
      </section>

      {/* Photo de groupe + citation */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/lancement/photo-groupe.jpg" alt={t("Photo de groupe — Journée de lancement, Wallers-Arenberg, 6 février 2026", "Group photo — Launch event, Wallers-Arenberg, 6 February 2026")} className="w-full h-auto" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-navy-600 text-sm italic">
            {t(
              "Près de 300 participants réunis à Wallers-Arenberg pour le lancement du projet — 6 février 2026",
              "Nearly 300 participants gathered in Wallers-Arenberg for the project launch — 6 February 2026"
            )}
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/summer-school/photos/photo-groupe.jpg" alt={t("Photo de groupe — Summer School 2026, Sciences Po Lille", "Group photo — Summer School 2026, Sciences Po Lille")} className="w-full h-auto" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-navy-600 text-sm italic">
            {t(
              "Summer School « Purpose at the Heart of Europe » — chercheurs, praticiens et institutionnels européens réunis à Sciences Po Lille, 26 juin 2026",
              "Summer School 'Purpose at the Heart of Europe' — European researchers, practitioners and institutional representatives gathered at Sciences Po Lille, 26 June 2026"
            )}
          </p>
          <div className="mt-6">
            <Link href="/evenements" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-semibold transition-colors">
              {t("Voir nos événements", "See our events")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Vidéo de la journée de lancement */}
      <section className="py-16 md:py-20 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-2">
              {t("Retour en images", "Highlights")}
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="text-navy-700 text-sm">
              {t(
                "Revivez la journée de lancement du 6 février 2026 à Wallers-Arenberg.",
                "Relive the launch event of 6 February 2026 in Wallers-Arenberg."
              )}
            </p>
          </div>
          <div className="rounded-card overflow-hidden shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/JjAIkQHwtxA"
                title={t(
                  "Journée de lancement — Société à Mission Europe",
                  "Launch Day — Société à Mission Europe"
                )}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <div className="rounded-card overflow-hidden shadow-lg mt-8">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/bBbCPa_DPeA"
                title="Société à mission europe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soutien FEDER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy-700 text-sm leading-relaxed">
            {t(
              "Le projet est soutenu par le Fonds européen de développement régional (FEDER), l'un des principaux instruments de la politique de cohésion de l'Union européenne. Le FEDER a pour mission de renforcer la cohésion économique, sociale et territoriale en soutenant l'innovation, la recherche, la transition écologique et le développement des territoires.",
              "The project is supported by the European Regional Development Fund (ERDF), one of the main instruments of the European Union's cohesion policy. The ERDF's mission is to strengthen economic, social and territorial cohesion by supporting innovation, research, ecological transition and territorial development."
            )}
          </p>
          <div className="mt-8 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/feder-double-v2.png"
              alt={t("Région Hauts-de-France — Cofinancé par l'Union européenne", "Région Hauts-de-France — Co-funded by the European Union")}
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <div className="mt-6">
            <a href="https://www.linkedin.com/company/soci%C3%A9t%C3%A9-%C3%A0-mission-europe/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-navy-700 hover:text-rose-600 transition-colors font-medium text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              {t("Suivez-nous sur LinkedIn", "Follow us on LinkedIn")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
