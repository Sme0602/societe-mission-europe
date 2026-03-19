import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/team-members";
import TeamMemberContent from "@/components/TeamMemberContent";

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

  return <TeamMemberContent member={member} />;
}
