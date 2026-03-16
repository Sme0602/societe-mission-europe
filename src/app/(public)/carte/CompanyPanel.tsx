"use client";

interface Company {
  id: string;
  nom: string;
  nom_raison_sociale?: string;
  siren?: string;
  adresse?: string;
  code_postal?: string;
  commune?: string;
  departement?: string;
  region?: string;
  latitude: number;
  longitude: number;
  raison_etre?: string;
  date_qualification_mission?: string;
  categorie_entreprise?: string;
  tranche_effectif_salarie?: string;
  activite_principale?: string;
  section_activite_principale?: string;
  secteur_scrape?: string;
  nature_juridique?: string;
  url_fiche_observatoire?: string;
}

interface Props {
  company: Company | null;
  onClose: () => void;
  trancheLabels: Record<string, string>;
  sectionLabels: Record<string, string>;
  regionLabels: Record<string, string>;
}

export default function CompanyPanel({
  company,
  onClose,
  trancheLabels,
  sectionLabels,
  regionLabels,
}: Props) {
  if (!company) return null;

  const formatDate = (d?: string) => {
    if (!d) return null;
    return new Date(d).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categLabel =
    company.categorie_entreprise === "PME"
      ? "PME"
      : company.categorie_entreprise === "ETI"
        ? "ETI"
        : company.categorie_entreprise === "GE"
          ? "Grande entreprise"
          : company.categorie_entreprise || null;

  const effectifLabel = company.tranche_effectif_salarie
    ? trancheLabels[company.tranche_effectif_salarie] || null
    : null;

  const sectionLabel = company.section_activite_principale
    ? sectionLabels[company.section_activite_principale] ||
      company.section_activite_principale
    : null;

  return (
    <>
      {/* Backdrop on mobile */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-10 md:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="
          fixed z-20
          bottom-0 left-0 right-0 max-h-[75vh]
          md:absolute md:top-0 md:right-0 md:bottom-0 md:left-auto md:max-h-none
          md:w-[420px]
          bg-white/95 backdrop-blur-md
          shadow-2xl
          overflow-y-auto
          animate-slide-up md:animate-slide-left
          rounded-t-2xl md:rounded-none
        "
      >
        {/* Header with gradient accent */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md">
          <div className="h-1 bg-gradient-tricolor" />
          <div className="flex items-start justify-between p-5 pb-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold text-navy-800 leading-tight pr-4">
                {company.nom}
              </h2>
              {company.commune && (
                <p className="text-sm text-navy-700/60 mt-1">
                  {company.commune}
                  {company.departement ? ` (${company.departement})` : ""}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-1 rounded-lg hover:bg-beige-100 transition-colors"
              aria-label="Fermer"
            >
              <svg
                className="w-5 h-5 text-navy-700/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 px-5 pb-4">
            {categLabel && (
              <span className="inline-flex items-center px-3 py-1 rounded-badge text-xs font-semibold bg-orange-100 text-orange-700">
                {categLabel}
              </span>
            )}
            {sectionLabel && (
              <span className="inline-flex items-center px-3 py-1 rounded-badge text-xs font-semibold bg-beige-200 text-navy-700">
                {sectionLabel}
              </span>
            )}
            {effectifLabel && (
              <span className="inline-flex items-center px-3 py-1 rounded-badge text-xs font-semibold bg-rose-100 text-rose-700">
                {effectifLabel} salariés
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-6 space-y-5">
          {/* Raison d'être */}
          {company.raison_etre && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
                Raison d&apos;être
              </h3>
              <p className="text-sm text-navy-800 leading-relaxed bg-beige-50 rounded-xl p-4 border border-beige-200">
                {company.raison_etre}
              </p>
            </div>
          )}

          {/* Info grid */}
          <div className="grid grid-cols-2 gap-3">
            {company.date_qualification_mission && (
              <InfoCard
                label="Qualité de mission"
                value={formatDate(company.date_qualification_mission)!}
              />
            )}
            {company.siren && (
              <InfoCard label="SIREN" value={company.siren} />
            )}
            {company.adresse && (
              <InfoCard
                label="Adresse"
                value={company.adresse}
                span2
              />
            )}
            {company.region && (
              <InfoCard label="Région" value={regionLabels[company.region] || company.region} />
            )}
            {company.activite_principale && (
              <InfoCard label="Code NAF" value={company.activite_principale} />
            )}
          </div>

          {/* Link to observatoire */}
          {company.url_fiche_observatoire && (
            <a
              href={company.url_fiche_observatoire}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-rose-700 transition-all shadow-lg shadow-rose-500/20"
            >
              <span>Voir la fiche complète</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slide-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

function InfoCard({
  label,
  value,
  span2,
}: {
  label: string;
  value: string;
  span2?: boolean;
}) {
  return (
    <div
      className={`bg-beige-50 rounded-xl p-3 border border-beige-200 ${span2 ? "col-span-2" : ""}`}
    >
      <p className="text-[10px] font-bold uppercase tracking-wider text-navy-700/40 mb-1">
        {label}
      </p>
      <p className="text-sm font-medium text-navy-800">{value}</p>
    </div>
  );
}
