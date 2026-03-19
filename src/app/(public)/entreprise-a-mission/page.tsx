"use client";

import Link from "next/link";
import { useState } from "react";
import entreprisesData from "@/data/entreprises-mission.json";

// Types
interface Entreprise {
  name: string;
  location: string | null;
  employees: string | null;
  actions: string | null;
  logo?: string | null;
  shortDescription?: string;
  missionUrl?: string;
}

const entreprises: Entreprise[] = entreprisesData;

// Group by country
const getCountry = (location: string | null): string => {
  if (!location) return "International";
  const loc = location.toLowerCase();
  if (loc.includes("france")) return "France";
  if (loc.includes("italie") || loc.includes("italy")) return "Italie";
  if (loc.includes("allemagne") || loc.includes("berlin") || loc.includes("germany")) return "Allemagne";
  if (loc.includes("espagne") || loc.includes("barcelone") || loc.includes("spain")) return "Espagne";
  if (loc.includes("belgique") || loc.includes("belgium")) return "Belgique";
  if (loc.includes("états-unis") || loc.includes("californie") || loc.includes("usa")) return "États-Unis";
  return "International";
};

const countryCounts = entreprises.reduce((acc, e) => {
  const country = getCountry(e.location);
  acc[country] = (acc[country] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export default function EntrepriseMissionPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");

  const filteredEntreprises = activeFilter === "Tous"
    ? entreprises
    : entreprises.filter((e) => getCountry(e.location) === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-medium mb-6">
              Comprendre
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              C&apos;est quoi une{" "}
              <span className="text-rose-600">entreprise à mission</span> ?
            </h1>
            <p className="text-xl text-navy-700 leading-relaxed mb-8">
              Une entreprise à mission inscrit sa raison d&apos;être et ses objectifs sociaux
              ou environnementaux dans ses statuts. Ce modèle, né en France avec la loi PACTE (2019),
              essaime désormais en Europe.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#exemples" className="btn-primary">
                Voir les exemples
              </a>
              <a href="#definition" className="btn-outline-white">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">{entreprises.length}</div>
              <div className="text-navy-700">Exemples présentés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">{Object.keys(countryCounts).length}</div>
              <div className="text-navy-700">Pays représentés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">2019</div>
              <div className="text-navy-700">Loi PACTE (France)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-rose-600 mb-2">1500+</div>
              <div className="text-navy-700">SAM en France</div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section id="definition" className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                Définition et cadre légal
              </h2>
              <div className="tricolor-separator mb-6" />
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  <strong className="text-navy-800">La société à mission</strong> est un statut juridique
                  créé par la loi PACTE du 22 mai 2019 en France. Elle permet aux entreprises d&apos;inscrire
                  dans leurs statuts une <strong className="text-rose-600">raison d&apos;être</strong> et
                  des <strong className="text-rose-600">objectifs sociaux et environnementaux</strong>.
                </p>
                <p>
                  Ce modèle s&apos;inspire des <strong>Benefit Corporations</strong> américaines et
                  des <strong>Società Benefit</strong> italiennes. Il représente une évolution majeure
                  du droit des sociétés, dépassant la seule recherche du profit.
                </p>
              </div>

              <div className="mt-8 p-6 bg-white rounded-card border border-beige-200">
                <h3 className="font-bold text-navy-800 mb-4">Les 3 piliers d&apos;une société à mission</h3>
                <ul className="space-y-3">
                  {[
                    "Une raison d'être inscrite dans les statuts",
                    "Des objectifs sociaux et environnementaux définis",
                    "Un comité de mission pour suivre l'exécution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-beige-200">
              <h3 className="text-xl font-bold text-navy-800 mb-6">Modèles européens</h3>
              <div className="space-y-4">
                {[
                  { country: "France", flag: "\ud83c\uddeb\ud83c\uddf7", model: "Société à mission", year: "2019", law: "Loi PACTE" },
                  { country: "Italie", flag: "\ud83c\uddee\ud83c\uddf9", model: "Società Benefit", year: "2016", law: "Legge di Stabilità" },
                  { country: "Espagne", flag: "\ud83c\uddea\ud83c\uddf8", model: "Empresa con Propósito", year: "En projet", law: "-" },
                  { country: "Belgique", flag: "\ud83c\udde7\ud83c\uddea", model: "Entreprise sociale", year: "2019", law: "Code des sociétés" },
                  { country: "Allemagne", flag: "\ud83c\udde9\ud83c\uddea", model: "Verantwortungseigentum", year: "Pratique", law: "Droit commun" },
                ].map((item) => (
                  <div key={item.country} className="flex items-center justify-between p-4 bg-beige-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-navy-800">{item.flag} {item.country}</div>
                      <div className="text-sm text-navy-700">{item.model}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-rose-600 font-bold">{item.year}</div>
                      <div className="text-xs text-gray-400">{item.law}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples */}
      <section id="exemples" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              {entreprises.length} exemples d&apos;entreprises à mission
            </h2>
            <div className="tricolor-separator mx-auto mb-4" />
            <p className="text-navy-700 text-lg max-w-2xl mx-auto">
              Des multinationales aux PME, ces entreprises ont inscrit leur mission dans leurs statuts.
            </p>
          </div>

          {/* Filters by country */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveFilter("Tous")}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                activeFilter === "Tous"
                  ? "bg-rose-600 text-white"
                  : "bg-gray-100 hover:bg-rose-50 text-navy-700"
              }`}
            >
              Tous ({entreprises.length})
            </button>
            {Object.entries(countryCounts)
              .sort((a, b) => b[1] - a[1])
              .map(([country, count]) => (
                <button
                  key={country}
                  onClick={() => setActiveFilter(country)}
                  className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                    activeFilter === country
                      ? "bg-rose-600 text-white"
                      : "bg-gray-100 hover:bg-rose-50 text-navy-700"
                  }`}
                >
                  {country} ({count})
                </button>
              ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEntreprises.map((entreprise) => (
              <a
                key={entreprise.name}
                href={entreprise.missionUrl || "#"}
                target={entreprise.missionUrl ? "_blank" : undefined}
                rel={entreprise.missionUrl ? "noopener noreferrer" : undefined}
                className={`bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col ${entreprise.missionUrl ? 'cursor-pointer hover:border-rose-300' : 'cursor-default'}`}
              >
                {/* Header: Logo + Name + Tags */}
                <div className="p-5 pb-3 flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-beige-50 to-beige-100 group-hover:from-rose-50 group-hover:to-rose-100 rounded-xl flex items-center justify-center transition-colors duration-300">
                    {entreprise.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={entreprise.logo}
                        alt={`Logo ${entreprise.name}`}
                        className="max-w-[48px] max-h-[40px] object-contain"
                      />
                    ) : (
                      <span className="text-xl font-bold text-navy-800/40">
                        {entreprise.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-navy-800 leading-tight mb-2">
                      {entreprise.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block px-2 py-0.5 bg-rose-50 text-rose-600 text-xs font-medium rounded-full">
                        {getCountry(entreprise.location)}
                      </span>
                      {entreprise.employees && (
                        <span className="inline-block px-2 py-0.5 bg-gray-100 text-navy-700 text-xs font-medium rounded-full">
                          {entreprise.employees} employés
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {entreprise.shortDescription && (
                  <div className="px-5 pb-2">
                    <p className="text-sm text-navy-700 leading-relaxed">
                      {entreprise.shortDescription}
                    </p>
                  </div>
                )}

                {/* Mission / Actions - L'info la plus importante */}
                {entreprise.actions && (
                  <div className="px-5 pb-4 pt-2 flex-1">
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                          Pourquoi entreprise à mission
                        </span>
                      </div>
                      <p className="text-sm text-navy-700 leading-relaxed">
                        {entreprise.actions}
                      </p>
                    </div>
                  </div>
                )}

                {/* Indicateur discret "Plus de détails" */}
                {entreprise.missionUrl && (
                  <div className="px-5 pb-4 mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 group-hover:text-rose-600 transition-colors duration-200">
                      <span>Plus de détails</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre entreprise veut devenir société à mission ?
          </h2>
          <div className="tricolor-separator mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-8">
            Notre programme de recherche étudie les meilleures pratiques européennes
            et accompagne la diffusion de ce modèle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
              Nous contacter
            </Link>
            <Link href="/projet" className="btn-outline-white">
              Découvrir le projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
