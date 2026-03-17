"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  { id: "territoire", label: "Territoire (Hauts-de-France)" },
  { id: "france", label: "France (National)" },
  { id: "europe", label: "Europe" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function GroupesDeTravailPage() {
  const [activeTab, setActiveTab] = useState<TabId>("territoire");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              Recherche
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Groupes de{" "}
              <span className="text-rose-600">travail</span>
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              Le programme Société à Mission Europe s&apos;articule autour de trois
              axes de recherche complémentaires : territorial, national et européen.
              Chaque groupe produit des ouvrages, des études et organise des événements
              pour construire le modèle de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-beige-200 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-navy-800 hover:bg-beige-100 hover:text-rose-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="min-h-[60vh]">
        {activeTab === "territoire" && <TerritoireTab />}
        {activeTab === "france" && <FranceTab />}
        {activeTab === "europe" && <EuropeTab />}
      </div>

      {/* Shared section: Ouvrage 7 */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Ouvrage transversal</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-card p-8 border border-beige-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                7
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  Ouvrage de récit et de synthèse
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  Ouvrage de récit et de synthèse de tous les apports du programme de
                  recherche, partagé entre les trois groupes de travail. Ce livre
                  constituera la mémoire collective du projet Société à Mission Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer School 2026 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-3xl overflow-hidden">
            <div className="tricolor-separator" />
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-500 text-sm font-bold mb-6">
                  Summer School 2026
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Summer School
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Deux jours d&apos;échanges intensifs entre chercheurs et praticiens
                  européens autour de la société à mission et de la purpose-driven
                  company.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">25-26 juin 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Lille</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">
                  En savoir plus
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center p-16">
                <div className="w-full max-w-xs">
                  <div className="bg-white/10 backdrop-blur-sm rounded-card p-8 text-center border border-white/20">
                    <div className="text-5xl font-bold text-rose-600 mb-2">25-26</div>
                    <div className="text-2xl font-bold text-white mb-1">Juin</div>
                    <div className="text-gray-300">2026</div>
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="text-white font-bold">Lille</div>
                      <div className="text-gray-400 text-sm mt-1">Hauts-de-France</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Gouvernance du projet</h2>
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
                Comité de partenaires
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-rose-600">Président</p>
                  <p className="text-navy-800 font-medium">Emery Jacquillat</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-600">Vice-Présidents</p>
                  <p className="text-navy-800 font-medium">Paolo Di Cesare</p>
                  <p className="text-navy-800 font-medium">Benoît Quittre</p>
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
                Conseil scientifique
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-rose-600">Direction</p>
                  <p className="text-navy-800 font-medium">Stéphane Vernac</p>
                  <p className="text-navy-800 font-medium">Matthieu Caron</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez un groupe de travail
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10 max-w-2xl mx-auto">
            Chercheurs, entreprises, institutions : votre expertise est essentielle
            pour construire le modèle européen de la société à mission.
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

/* ─────────────────────── Territoire Tab ─────────────────────── */

function TerritoireTab() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-yellow-50 text-jaune-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-2 text-jaune-400">
                Axe territorial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Axe Territorial — Hauts-de-France
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                Observer le déploiement du modèle de l&apos;entreprise autrement et de
                la société à mission en Hauts-de-France, berceau du projet.
              </p>

              {/* Coordination */}
              <div className="bg-beige-50 rounded-card p-6 border border-beige-200 mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-3">
                  Coordination
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">MC</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Matthieu Caron</p>
                      <p className="text-navy-600 text-xs">Porteur de projet, UPHF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">AV</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Alix Vanmeervenne</p>
                      <p className="text-navy-600 text-xs">Ingénieure d&apos;études, UPHF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Ouvrages */}
              <div className="bg-yellow-50 rounded-card p-8 border border-yellow-100">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-jaune-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Ouvrages prévus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-jaune-400 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">1</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      Les entreprises du nord, une histoire sociale singulière
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-jaune-400 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">2</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      Ces entrepreneurs du nord qui changent le monde
                    </p>
                  </div>
                </div>
              </div>

              {/* Études */}
              <div className="bg-beige-50 rounded-card p-8 border border-beige-200">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Études
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      Cartographie &quot;l&apos;entreprise autrement en HDF&quot;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      La société à mission à l&apos;échelle territoriale : le bilan dans les HDF
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Territoire */}
      <section className="py-16 md:py-24 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Calendrier territorial</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-beige-300 -translate-x-1/2" />

              <div className="space-y-12">
                {[
                  {
                    year: "2026",
                    items: ["Cartographie HDF", "Journée de partage chercheurs/entrepreneurs"],
                  },
                  {
                    year: "2027",
                    items: ["Ouvrage 1 : Les entreprises du nord", "Summer School 2"],
                  },
                  {
                    year: "2028",
                    items: ["Ouvrage 2 : Ces entrepreneurs du nord", "Livre blanc", "Restitution au World Forum"],
                  },
                ].map((phase, index) => (
                  <div
                    key={phase.year}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-jaune-400 rounded-full border-4 border-white shadow -translate-x-1/2 z-10" />
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-white rounded-card p-6 shadow-sm border border-beige-200">
                        <div className="text-sm font-bold text-orange-600 mb-2">
                          {phase.year}
                        </div>
                        <ul className={`space-y-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          {phase.items.map((item) => (
                            <li key={item} className="text-navy-700 text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────── France Tab ─────────────────────── */

function FranceTab() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-rose-50 text-rose-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-2 text-rose-600">
                Axe national
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Axe National — France
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                Analyser en pratique les forces et limites du modèle de société à
                mission pour le consolider et en assurer la diffusion.
              </p>

              {/* Coordination */}
              <div className="bg-beige-50 rounded-card p-6 border border-beige-200 mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-3">
                  Coordination
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">MC</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Matthieu Caron</p>
                      <p className="text-navy-600 text-xs">UPHF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy-800 text-white flex items-center justify-center text-xs font-bold">SV</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Stéphane Vernac</p>
                      <p className="text-navy-600 text-xs">UPJV</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-jaune-400 text-white flex items-center justify-center text-xs font-bold">SV</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Sarah Vandenbroucke</p>
                      <p className="text-navy-600 text-xs">Ingénieure de recherche, UPHF</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Events highlight */}
              <div className="bg-rose-600 rounded-card p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="font-bold text-lg">16 événements prévus</h3>
                </div>
                <p className="text-rose-100 text-sm">
                  Summer Schools, Workshops, Colloques — un programme riche pour
                  fédérer la communauté nationale de recherche.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Ouvrages */}
              <div className="bg-rose-50 rounded-card p-8 border border-rose-100">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Ouvrages prévus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-rose-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">3</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      La société à mission française : Bilan et perspectives
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-rose-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">4</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      La société à mission, mode(s) d&apos;emploi
                    </p>
                  </div>
                </div>
              </div>

              {/* Études */}
              <div className="bg-beige-50 rounded-card p-8 border border-beige-200">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Études
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      Panorama des modèles de gouvernance de l&apos;entreprise en Europe
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      Les traductions juridiques de la mission
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      Penser l&apos;éthique des comités de mission et organismes tiers indépendants
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────── Europe Tab ─────────────────────── */

function EuropeTab() {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-50 text-navy-800">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm font-bold uppercase tracking-wider mb-2 text-navy-800">
                Axe européen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Axe Européen — Europe
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                Fédérer un réseau de chercheurs européens pour explorer les conditions
                d&apos;émergence d&apos;un modèle européen de purpose-driven company.
              </p>

              {/* Coordination */}
              <div className="bg-beige-50 rounded-card p-6 border border-beige-200 mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-3">
                  Coordination
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">MC</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Matthieu Caron</p>
                      <p className="text-navy-600 text-xs">UPHF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-jaune-400 text-white flex items-center justify-center text-xs font-bold">SV</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Sarah Vandenbroucke</p>
                      <p className="text-navy-600 text-xs">UPHF</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scientific Council */}
              <div className="bg-blue-50 rounded-card p-6 border border-blue-100">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-800 mb-3">
                  Conseil scientifique de l&apos;axe
                </h3>
                <ul className="space-y-2 text-sm text-navy-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-800 rounded-full shrink-0" />
                    Stéphane Vernac
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-800 rounded-full shrink-0" />
                    Kevin Levillain &amp; Blanche Segrestin
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-navy-800 rounded-full shrink-0" />
                    Alessio Bartolacelli
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Ouvrages */}
              <div className="bg-blue-50 rounded-card p-8 border border-blue-100">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Ouvrages prévus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-navy-800 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">5</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      Convergences and Divergences of National Models of Purpose-Driven
                      Companies in Europe
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-navy-800 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">6</div>
                    <div>
                      <p className="text-navy-700 text-sm leading-relaxed">
                        Towards a European purpose-driven company
                      </p>
                      <p className="text-navy-500 text-xs italic mt-1">
                        (Penser la société à mission européenne)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Europe Timeline - visually prominent */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-beige-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Feuille de route européenne</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              Trois phases pour construire le modèle européen de la purpose-driven company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical gradient line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-rose-500 to-rose-700 rounded-full" />

              <div className="space-y-12">
                {/* 2026 */}
                <div className="relative pl-20 md:pl-28">
                  <div className="absolute left-4 md:left-8 top-0 w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs">26</span>
                  </div>
                  <div className="bg-white rounded-card p-8 shadow-md border border-beige-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                        2026
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full uppercase tracking-wider">
                        Phase exploratoire
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      Cartographie et analyse comparative des modèles nationaux de purpose-driven
                      companies en Europe.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-navy-700">
                          <strong>Juin :</strong> Deadline call for contributions (ouvrage 1)
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-navy-700">
                          <strong>Septembre :</strong> Rencontre en présentiel des contributeurs
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm sm:col-span-2">
                        <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-navy-700">
                          <strong>25-26 juin :</strong> Summer School (Lille)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2027 */}
                <div className="relative pl-20 md:pl-28">
                  <div className="absolute left-4 md:left-8 top-0 w-9 h-9 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs">27</span>
                  </div>
                  <div className="bg-white rounded-card p-8 shadow-md border border-beige-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                        2027
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full uppercase tracking-wider">
                        Comparaison approfondie
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      Approfondissement de l&apos;analyse comparative et premières publications.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-navy-700">
                          Publication ouvrage 1 (<em>Convergences and Divergences</em>)
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-navy-700">Summer School</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-navy-700">
                          Validation des contributeurs &amp; sommaire ouvrage 2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2028 */}
                <div className="relative pl-20 md:pl-28">
                  <div className="absolute left-4 md:left-8 top-0 w-9 h-9 bg-gradient-to-br from-rose-600 to-rose-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white font-bold text-xs">28</span>
                  </div>
                  <div className="bg-white rounded-card p-8 shadow-md border border-beige-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                        2028
                      </span>
                      <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full uppercase tracking-wider">
                        Phase prospective
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      Aboutissement du programme : publications finales, dialogue
                      institutionnel et conférence au Parlement européen.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-navy-700">
                          Summer School, discussion des résultats ouvrage 2
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-navy-700">
                          Publication ouvrage 2 (<em>Towards a European purpose-driven company</em>)
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-navy-700">
                          Dialogue institutionnel avec Bruxelles
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="text-navy-700 font-medium">
                          <strong>Décembre :</strong> Conférence finale au Parlement européen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
