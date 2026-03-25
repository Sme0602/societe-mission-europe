"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import type { TeamMember } from "@/data/team-members";

export default function TeamMemberContent({ member }: { member: TeamMember }) {
  const { t, lang } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 text-rose-600 font-medium mb-8 hover:text-rose-700 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t("Retour à l'équipe", "Back to the team")}
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {member.photo ? (
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 ring-2 ring-white shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div
                className={`w-24 h-24 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-2xl shrink-0`}
              >
                {member.initials}
              </div>
            )}
            <div>
              <div className="inline-block px-3 py-1 bg-rose-600/10 text-rose-600 text-xs font-bold rounded-full mb-2">
                {(lang === 'en' && member.roleEn) ? member.roleEn : member.role}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {member.name}
              </h1>
              <p className="text-lg font-medium text-navy-800">
                {(lang === 'en' && member.titleEn) ? member.titleEn : member.title}
              </p>
              <p className="text-base text-rose-600 font-medium">
                {member.affiliation}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card border border-beige-200 shadow-sm p-6 md:p-10">
            <div className="tricolor-separator w-16 mb-6" />
            <div className="space-y-4">
              {((lang === 'en' && member.bioEn) ? member.bioEn : member.bio).map((paragraph, i) => (
                <p
                  key={i}
                  className="text-navy-700 leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {member.publications && member.publications.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-bold text-navy-800 mb-4">
                  {t("Publications indicatives", "Selected Publications")}
                </h2>
                <div className="tricolor-separator w-12 mb-4" />
                <ul className="space-y-3">
                  {member.publications.map((pub, i) => (
                    <li
                      key={i}
                      className="text-navy-700 text-sm leading-relaxed pl-4 border-l-2 border-rose-600/30"
                    >
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
