"use client";

import Link from "next/link";
import { teamMembers } from "@/data/team-members";
import { useI18n } from "@/lib/i18n/context";

export default function EquipeContent() {
  const { t, lang } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              {t("L'Équipe", "The Team")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t(
                <>
                  Les chercheurs qui portent{" "}
                  <span className="text-rose-600">le projet</span>
                </>,
                <>
                  The researchers behind{" "}
                  <span className="text-rose-600">the project</span>
                </>
              )}
            </h1>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Une équipe pluridisciplinaire de chercheurs, ingénieurs et doctorants rattachés à l'UPHF, au LARSH et à l'Observatoire de l'Éthique Publique, engagés dans l'étude et la promotion de la société à mission en France et en Europe.",
                "A multidisciplinary team of researchers, engineers and doctoral students affiliated with UPHF, LARSH and the Observatory of Public Ethics, committed to the study and promotion of the purpose-driven company in France and across Europe."
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

      {/* Photos d'équipe */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="rounded-card overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/equipe/equipe-complete.jpg"
                alt={t(
                  "L'équipe du projet Société à Mission Europe sur scène",
                  "The Société à Mission Europe project team on stage"
                )}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-card overflow-hidden shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/equipe/equipe-scene.jpg"
                alt={t(
                  "L'équipe du projet lors de la clôture avec bouquets de fleurs",
                  "The project team at the closing ceremony with flower bouquets"
                )}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-center text-navy-600 text-sm italic mt-4">
            {t(
              "L'équipe du projet lors de la journée de lancement — Wallers-Arenberg, 6 février 2026",
              "The project team at the launch event — Wallers-Arenberg, 6 February 2026"
            )}
          </p>
        </div>
      </section>

      {/* Équipe complète */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">{t("Notre équipe", "Our Team")}</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {t(
                `${teamMembers.length} membres dédiés au projet Société à Mission Europe.`,
                `${teamMembers.length} members dedicated to the Société à Mission Europe project.`
              )}
            </p>
          </div>

          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <Link
                key={member.name}
                href={`/equipe/${member.slug}`}
                className={`block bg-white rounded-card overflow-hidden border border-beige-200 shadow-sm hover:shadow-lg hover:border-rose-300 transition-all duration-200 group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start gap-5 mb-5">
                    {member.photo ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-beige-100 shadow">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-xl shrink-0`}
                      >
                        {member.initials}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-rose-600/10 text-rose-600 text-xs font-bold rounded-full mb-2">
                        {(lang === 'en' && member.roleEn) ? member.roleEn : member.role}
                      </div>
                      <h3 className="text-2xl font-bold text-navy-800 leading-tight group-hover:text-rose-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium text-navy-800 mt-1">
                        {(lang === 'en' && member.titleEn) ? member.titleEn : member.title}
                      </p>
                      <p className="text-sm text-rose-600 font-medium">
                        {member.affiliation}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="tricolor-separator w-16 mb-4" />
                  <p className="text-navy-700 leading-relaxed text-base line-clamp-3">
                    {(lang === 'en' && member.bioEn) ? member.bioEn[0] : member.bio[0]}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-rose-600 group-hover:underline">
                    {t("Voir le profil complet", "View full profile")}
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("Rejoignez notre équipe", "Join Our Team")}
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10">
            {t(
              "Vous souhaitez contribuer au projet Société à Mission Europe ? Chercheurs, doctorants et professionnels sont les bienvenus.",
              "Would you like to contribute to the Société à Mission Europe project? Researchers, doctoral students and professionals are welcome."
            )}
          </p>
          <a
            href="mailto:contact@observatoire-ethique-publique.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors text-lg"
          >
            {t("Nous contacter", "Contact Us")}
          </a>
        </div>
      </section>
    </>
  );
}
