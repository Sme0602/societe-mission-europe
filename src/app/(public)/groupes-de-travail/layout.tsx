import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groupes de travail | Société à Mission Europe",
  description:
    "Découvrez les trois axes de recherche du programme Société à Mission Europe : Territoire (Hauts-de-France), France (National) et Europe. Ouvrages, études, calendrier et gouvernance.",
  alternates: {
    canonical: "https://societe-mission-europe.surge.sh/groupes-de-travail",
  },
};

export default function GroupesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
