import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/team-members";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return {};
  return {
    title: `${member.name} | L'Équipe`,
    description: `${member.name}, ${member.role} — ${member.title}. Découvrez son parcours et ses travaux au sein du projet Société à Mission Europe.`,
    alternates: {
      canonical: `https://societe-mission-europe.surge.sh/equipe/${member.slug}`,
    },
  };
}

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
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
            Retour à l&apos;équipe
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div
              className={`w-20 h-20 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-2xl shrink-0`}
            >
              {member.initials}
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-rose-600/10 text-rose-600 text-xs font-bold rounded-full mb-2">
                {member.role}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {member.name}
              </h1>
              <p className="text-lg font-medium text-navy-800">
                {member.title}
              </p>
              <p className="text-base text-rose-600 font-medium">
                {member.affiliation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-card border border-beige-200 shadow-sm p-6 md:p-10">
            <div className="tricolor-separator w-16 mb-6" />
            <div className="space-y-4">
              {member.bio.map((paragraph, i) => (
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
                  Publications indicatives
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
