import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C'est quoi une entreprise à mission ? | Société à Mission Europe",
  description: "Découvrez ce qu'est une entreprise à mission : définition, exemples concrets (Danone, MAIF, Patagonia, La Poste...) et cadre légal européen.",
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/entreprise-a-mission' },
  keywords: ['entreprise à mission', 'société à mission', 'loi PACTE', 'raison d\'être', 'B Corp', 'benefit corporation'],
};

export default function EntrepriseMissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
