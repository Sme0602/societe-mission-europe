import type { Metadata } from "next";
import ProjetContent from "@/components/ProjetContent";

export const metadata: Metadata = {
  title: 'Le Projet de recherche | Société à Mission Europe',
  description: 'Programme de recherche-action sur 3 ans : étude territoriale Hauts-de-France, bilan national loi PACTE, propositions pour une directive européenne sur la société à mission.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/projet' }
};

export default function ProjetPage() {
  return <ProjetContent />;
}
