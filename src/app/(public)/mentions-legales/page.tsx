import type { Metadata } from "next";
import MentionsLegalesContent from "@/components/MentionsLegalesContent";

export const metadata: Metadata = {
  title: "Mentions légales | Société à Mission Europe",
  description:
    "Mentions légales du site Société à Mission Europe - Projet de recherche FEDER porté par l'UPHF et l'Observatoire de l'Éthique Publique.",
  alternates: { canonical: "https://societe-mission-europe.surge.sh/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />;
}
