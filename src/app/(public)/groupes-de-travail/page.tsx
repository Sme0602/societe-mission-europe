"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";


function ConseilScientifique({ groupe, color = "bg-blue-50 border-blue-100" }: { groupe: string; color?: string }) {
  const { t } = useI18n();
  const [members, setMembers] = useState<{ nom_prenom: string; poste_structure: string | null }[]>([]);

  useEffect(() => {
    fetch(`/api/contributeurs?groupe=${groupe}`)
      .then((res) => res.json())
      .then((data) => setMembers(data))
      .catch(() => {});
  }, [groupe]);

  if (members.length === 0) return null;

  return (
    <div className={`${color} rounded-card p-6 border`}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-navy-800 mb-3">
        {t("Conseil scientifique", "Scientific Council")}
      </h3>
      <ul className="space-y-2 text-sm text-navy-700">
        {members.map((m) => (
          <li key={m.nom_prenom} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-navy-800 rounded-full shrink-0" />
            {m.nom_prenom}{m.poste_structure ? ` — ${m.poste_structure}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GroupesDeTravailPage() {
  const [activeTab, setActiveTab] = useState<"territoire" | "france" | "europe">("territoire");
  const { t } = useI18n();

  const tabs = [
    { id: "territoire" as const, label: t("Territoire (Hauts-de-France)", "Territory (Hauts-de-France)") },
    { id: "france" as const, label: "France (National)" },
    { id: "europe" as const, label: "Europe" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              {t("Recherche", "Research")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t(
                <>Groupes de{" "}<span className="text-rose-600">travail</span></>,
                <>Working{" "}<span className="text-rose-600">Groups</span></>
              )}
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Le programme Société à Mission Europe s'articule autour de trois axes de recherche complémentaires : territorial, national et européen. Chaque groupe produit des ouvrages, des études et organise des événements pour construire le modèle de demain.",
                "The Société à Mission Europe programme is structured around three complementary research axes: territorial, national and European. Each group produces publications, studies and organises events to build the model of tomorrow."
              )}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("Rejoignez un groupe de travail", "Join a Working Group")}
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10 max-w-2xl mx-auto">
            {t(
              "Chercheurs, entreprises, institutions : votre expertise est essentielle pour construire le modèle européen de la société à mission.",
              "Researchers, companies, institutions: your expertise is essential to build the European model of the purpose-driven company."
            )}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors text-lg"
          >
            {t("Nous contacter", "Contact Us")}
          </Link>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────── Territoire Tab ─────────────────────── */

function ParticipantsList({ groupe, csGroupe, title, titleEn, color = "bg-rose-600", excludeNames = [] }: {
  groupe: string;
  csGroupe?: string;
  title: string;
  titleEn: string;
  color?: string;
  excludeNames?: string[];
}) {
  const { t } = useI18n();
  const [participants, setParticipants] = useState<{ nom_prenom: string; poste_structure: string | null }[]>([]);
  const [csMembers, setCsMembers] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/contributeurs?groupe=${groupe}`)
      .then((res) => res.json())
      .then((data) => setParticipants(data))
      .catch(() => {});
    if (csGroupe) {
      fetch(`/api/contributeurs?groupe=${csGroupe}`)
        .then((res) => res.json())
        .then((data: { nom_prenom: string }[]) => setCsMembers(data.map((m) => m.nom_prenom)))
        .catch(() => {});
    }
  }, [groupe, csGroupe]);

  const filtered = participants
    .filter((c) => !excludeNames.includes(c.nom_prenom) && !csMembers.includes(c.nom_prenom))
    .sort((a, b) => {
      const lastA = a.nom_prenom.split(" ").slice(-1)[0];
      const lastB = b.nom_prenom.split(" ").slice(-1)[0];
      return lastA.localeCompare(lastB, "fr");
    });

  if (filtered.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">{t(title, titleEn)}</h2>
          <div className="tricolor-separator w-24 mx-auto mb-4" />
          <p className="section-subtitle">
            {t(
              `${filtered.length} chercheurs et praticiens participent à ce groupe de travail.`,
              `${filtered.length} researchers and practitioners participate in this working group.`
            )}
          </p>
        </div>
        <ul className="max-w-3xl mx-auto columns-1 sm:columns-2 gap-x-8 space-y-1.5">
          {filtered.map((c) => (
            <li key={c.nom_prenom} className="flex items-start gap-2 text-sm break-inside-avoid">
              <span className={`w-1.5 h-1.5 ${color} rounded-full shrink-0 mt-1.5`} />
              <span className="font-medium text-navy-800">{c.nom_prenom}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TerritoireTab() {
  const { t } = useI18n();

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
                {t("Axe territorial", "Territorial axis")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                {t("Axe Territorial — Hauts-de-France", "Territorial Axis — Hauts-de-France")}
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                {t(
                  "Observer le déploiement du modèle de l'entreprise autrement et de la société à mission en Hauts-de-France, berceau du projet.",
                  "Observe the deployment of the alternative enterprise model and the société à mission in Hauts-de-France, the birthplace of the project."
                )}
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
                      <p className="text-navy-600 text-xs">{t("Porteur de projet, UPHF", "Project Leader, UPHF")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">AV</div>
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Alix Vanmeervenne</p>
                      <p className="text-navy-600 text-xs">{t("Ingénieure d'études, UPHF", "Research Engineer, UPHF")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <ConseilScientifique groupe="cs_territoire" color="bg-yellow-50 border-yellow-100" />
            </div>

            <div className="space-y-6">
              {/* Map silhouette */}
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/map-hauts-de-france.png" alt="Hauts-de-France" className="w-full max-w-[200px] h-auto opacity-80" />
              </div>

              {/* Ouvrages */}
              <div className="bg-yellow-50 rounded-card p-8 border border-yellow-100">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-jaune-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t("Ouvrages prévus", "Planned Publications")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-jaune-400 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">1</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {t(
                        "Une histoire des entreprises du Nord. Des entreprises en mission",
                        "A history of Northern enterprises. Enterprises with a mission"
                      )}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-jaune-400 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">2</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {t(
                        "Ces entrepreneurs du Nord qui changent le monde. Des entrepreneurs en mission",
                        "Northern entrepreneurs changing the world. Entrepreneurs with a mission"
                      )}
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
                  {t("Études", "Studies")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      {t(
                        'Cartographie "l\'entreprise autrement en HDF"',
                        'Mapping "the alternative enterprise in HDF"'
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-jaune-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      {t(
                        "La société à mission à l'échelle territoriale : le bilan dans les HDF",
                        "The société à mission at the territorial level: assessment in HDF"
                      )}
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
            <h2 className="section-title">{t("Calendrier territorial", "Territorial Calendar")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-beige-300 -translate-x-1/2" />

              <div className="space-y-12">
                {[
                  {
                    year: "2026",
                    items: [
                      t("Cartographie « l'entreprise autrement » en HdF", "Mapping \"the alternative enterprise\" in HdF"),
                      t("Journée de rencontre avec les acteurs économiques", "Meeting day with economic actors"),
                      "European Summer School 1",
                    ],
                  },
                  {
                    year: "2027",
                    items: [
                      t("Journée de partage d'expérience : rencontre chercheurs & entrepreneurs du nord", "Experience sharing day: meeting between researchers & northern entrepreneurs"),
                      t("Ouvrage 1", "Publication 1"),
                      t("Ouvrage 2", "Publication 2"),
                      t("Livre blanc", "White Paper"),
                      "European Summer School 2",
                    ],
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
                          {phase.items.map((item, i) => (
                            <li key={i} className="text-navy-700 text-sm">
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

      <ParticipantsList
        groupe="gt_territoire"
        csGroupe="cs_territoire"
        title="Participants du groupe Territoire"
        titleEn="Territory Group Participants"
        color="bg-jaune-400"
        excludeNames={["Matthieu Caron", "Alix Vanmeervenne", "Sarah Vandenbroucke", "Stéphane Vernac"]}
      />
    </>
  );
}

/* ─────────────────────── France Tab ─────────────────────── */

function FranceTab() {
  const { t } = useI18n();

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
                {t("Axe national", "National axis")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                {t("Axe National — France", "National Axis — France")}
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                {t(
                  "Analyser en pratique les forces et limites du modèle de société à mission pour le consolider et en assurer la diffusion.",
                  "Analyse in practice the strengths and limitations of the société à mission model in order to strengthen it and ensure its dissemination."
                )}
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
                      <p className="text-navy-600 text-xs">{t("Ingénieure de recherche, UPHF", "Research Engineer, UPHF")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CS National masqué — en attente de validation des membres */}

            </div>

            <div className="space-y-6">
              {/* Map silhouette */}
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/map-france.png" alt="France" className="w-full max-w-[200px] h-auto opacity-80" />
              </div>

              {/* Ouvrages */}
              <div className="bg-rose-50 rounded-card p-8 border border-rose-100">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t("Ouvrages prévus", "Planned Publications")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-rose-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">3</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {t(
                        "La société à mission française : Bilan et perspectives",
                        "La société à mission française : Bilan et perspectives (The French société à mission: Assessment and outlook)"
                      )}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-rose-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">4</div>
                    <p className="text-navy-700 text-sm leading-relaxed">
                      {t(
                        "La société à mission, mode(s) d'emploi",
                        "La société à mission, mode(s) d'emploi (The société à mission, user guide(s))"
                      )}
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
                  {t("Études", "Studies")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      {t(
                        "Les traductions juridiques de la mission",
                        "Legal translations of the mission"
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      {t(
                        "Penser l'éthique des comités de mission et organismes tiers indépendants",
                        "Rethinking the ethics of mission committees and independent third-party bodies"
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParticipantsList
        groupe="gt_national"
        title="Participants du groupe France"
        titleEn="France Group Participants"
        color="bg-orange-600"
        excludeNames={["Matthieu Caron", "Alix Vanmeervenne", "Sarah Vandenbroucke", "Stéphane Vernac"]}
      />
    </>
  );
}

/* ─────────────────────── Europe Tab ─────────────────────── */

function EuropeTab() {
  const { t } = useI18n();

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
                {t("Axe européen", "European axis")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
                {t("Axe Européen — Europe", "European Axis — Europe")}
              </h2>
              <div className="tricolor-separator w-24 mb-6" />
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                {t(
                  "Fédérer un réseau de chercheurs européens pour explorer les conditions d'émergence d'un modèle européen de purpose-driven company.",
                  "Unite a network of European researchers to explore the conditions for the emergence of a European model of purpose-driven company."
                )}
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

              <ConseilScientifique groupe="cs_europe" color="bg-blue-50 border-blue-100" />
            </div>

            <div className="space-y-6">
              {/* Map silhouette */}
              <div className="flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/map-europe.png" alt="Europe" className="w-full max-w-[220px] h-auto opacity-80" />
              </div>

              {/* Ouvrages */}
              <div className="bg-blue-50 rounded-card p-8 border border-blue-100">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t("Ouvrages prévus", "Planned Publications")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-navy-800 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">5</div>
                    <div>
                      <p className="text-navy-700 text-sm leading-relaxed">
                        {t(
                          "Convergences et divergences des modèles nationaux de sociétés à mission en Europe",
                          "Convergences and Divergences of National Models of Purpose-Driven Companies in Europe"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-navy-800 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">6</div>
                    <div>
                      <p className="text-navy-700 text-sm leading-relaxed">
                        Towards a European purpose-driven company
                      </p>
                      <p className="text-navy-500 text-xs italic mt-1">
                        {t("(Penser la société à mission européenne)", "(Thinking the European société à mission)")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Études */}
              <div className="bg-beige-50 rounded-card p-8 border border-beige-200">
                <h3 className="font-bold text-navy-800 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {t("Études", "Studies")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-navy-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700 text-sm">
                      {t(
                        "Panorama des modèles de gouvernance de l'entreprise en Europe",
                        "Overview of corporate governance models in Europe"
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Europe Timeline - visually prominent */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-beige-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t("Feuille de route européenne", "European Roadmap")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {t(
                "Trois phases pour construire le modèle européen de la purpose-driven company.",
                "Three phases to build the European model of the purpose-driven company."
              )}
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
                        {t("Phase exploratoire", "Exploratory Phase")}
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      {t(
                        "Cartographie et analyse comparative des modèles nationaux de purpose-driven companies en Europe.",
                        "Mapping and comparative analysis of national models of purpose-driven companies in Europe."
                      )}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            <><strong>Juin :</strong> Deadline call for contributions (ouvrage 1)</>,
                            <><strong>June:</strong> Deadline call for contributions (publication 1)</>
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            <><strong>Septembre :</strong> Rencontre en présentiel des contributeurs</>,
                            <><strong>September:</strong> In-person contributors meeting</>
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm sm:col-span-2">
                        <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            <><strong>25-26 juin :</strong> Summer School (Lille)</>,
                            <><strong>25-26 June:</strong> Summer School (Lille)</>
                          )}
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
                        {t("Comparaison approfondie", "In-depth Comparison")}
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      {t(
                        "Approfondissement de l'analyse comparative et premières publications.",
                        "Deepening of the comparative analysis and first publications."
                      )}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            <>Publication ouvrage 1 (<em>Convergences and Divergences</em>)</>,
                            <>Publication 1 (<em>Convergences and Divergences</em>)</>
                          )}
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
                          {t(
                            "Validation des contributeurs & sommaire ouvrage 2",
                            "Contributors validation & publication 2 table of contents"
                          )}
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
                        {t("Phase prospective", "Prospective Phase")}
                      </span>
                    </div>
                    <p className="text-navy-700 leading-relaxed mb-4">
                      {t(
                        "Aboutissement du programme : publications finales, dialogue institutionnel et conférence au Parlement européen.",
                        "Programme culmination: final publications, institutional dialogue and conference at the European Parliament."
                      )}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            "Summer School, discussion des résultats ouvrage 2",
                            "Summer School, discussion of publication 2 results"
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            <>Publication ouvrage 2 (<em>Towards a European purpose-driven company</em>)</>,
                            <>Publication 2 (<em>Towards a European purpose-driven company</em>)</>
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-navy-700">
                          {t(
                            "Dialogue institutionnel avec Bruxelles",
                            "Institutional dialogue with Brussels"
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <svg className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="text-navy-700 font-medium">
                          {t(
                            <><strong>Décembre :</strong> Conférence finale au Parlement européen</>,
                            <><strong>December:</strong> Final conference at the European Parliament</>
                          )}
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

      <ParticipantsList
        groupe="gt_europe"
        csGroupe="cs_europe"
        title="Participants du groupe Europe"
        titleEn="Europe Group Participants"
        color="bg-navy-800"
        excludeNames={["Matthieu Caron", "Alix Vanmeervenne", "Sarah Vandenbroucke", "Stéphane Vernac"]}
      />
    </>
  );
}
