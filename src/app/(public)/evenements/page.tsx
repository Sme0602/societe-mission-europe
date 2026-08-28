import type { Metadata } from "next";
import EvenementsContent from "@/components/EvenementsContent";

export const metadata: Metadata = {
  title: "Événements | Société à Mission Europe",
  description:
    "Découvrez les événements du programme Société à Mission Europe : journée de lancement, Summer School et plus encore.",
  alternates: {
    canonical: "https://societe-mission-europe.com/evenements",
  },
};

export default function EvenementsPage() {
  return <EvenementsContent />;
}
