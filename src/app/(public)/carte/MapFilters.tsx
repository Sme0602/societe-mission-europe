"use client";

import { useState } from "react";

interface Filters {
  region: string;
  section: string;
  categorie: string;
  search: string;
}

interface Props {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  regions: string[];
  sections: string[];
  sectionLabels: Record<string, string>;
  regionLabels: Record<string, string>;
  totalCount: number;
  filteredCount: number;
}

export default function MapFilters({
  filters,
  onFiltersChange,
  regions,
  sections,
  sectionLabels,
  regionLabels,
  totalCount,
  filteredCount,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const update = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const hasFilters =
    filters.region || filters.section || filters.categorie || filters.search;

  const clearAll = () => {
    onFiltersChange({ region: "", section: "", categorie: "", search: "" });
  };

  return (
    <div className="absolute top-4 left-4 right-4 md:right-auto md:w-[380px] z-10">
      {/* Search bar */}
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-beige-200 px-4 py-3">
        <svg
          className="w-5 h-5 text-navy-700/40 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Rechercher une entreprise, ville..."
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          className="flex-1 bg-transparent text-sm text-navy-800 placeholder:text-navy-700/30 outline-none"
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 rounded-xl transition-colors ${
            isOpen || hasFilters
              ? "bg-orange-500 text-white"
              : "hover:bg-beige-100 text-navy-700/50"
          }`}
          aria-label="Filtres"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>
      </div>

      {/* Expanded filters */}
      {isOpen && (
        <div className="mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-beige-200 p-4 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-700/40">
              Filtres
            </span>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
              >
                Tout effacer
              </button>
            )}
          </div>

          {/* Region */}
          <select
            value={filters.region}
            onChange={(e) => update("region", e.target.value)}
            className="w-full px-3 py-2.5 bg-beige-50 border border-beige-200 rounded-xl text-sm text-navy-800 outline-none focus:border-orange-500 transition-colors"
          >
            <option value="">Toutes les régions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {regionLabels[r] || r}
              </option>
            ))}
          </select>

          {/* Sector */}
          <select
            value={filters.section}
            onChange={(e) => update("section", e.target.value)}
            className="w-full px-3 py-2.5 bg-beige-50 border border-beige-200 rounded-xl text-sm text-navy-800 outline-none focus:border-orange-500 transition-colors"
          >
            <option value="">Tous les secteurs</option>
            {sections.map((s) => (
              <option key={s} value={s}>
                {sectionLabels[s] || s}
              </option>
            ))}
          </select>

          {/* Company size */}
          <select
            value={filters.categorie}
            onChange={(e) => update("categorie", e.target.value)}
            className="w-full px-3 py-2.5 bg-beige-50 border border-beige-200 rounded-xl text-sm text-navy-800 outline-none focus:border-orange-500 transition-colors"
          >
            <option value="">Toutes les tailles</option>
            <option value="PME">PME</option>
            <option value="ETI">ETI</option>
            <option value="GE">Grande entreprise</option>
          </select>

          {/* Result count */}
          {hasFilters && (
            <p className="text-xs text-navy-700/50 text-center pt-1">
              {filteredCount.toLocaleString("fr-FR")} /{" "}
              {totalCount.toLocaleString("fr-FR")} sociétés
            </p>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
