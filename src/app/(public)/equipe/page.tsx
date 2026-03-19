import type { Metadata } from "next";
import EquipeContent from "@/components/EquipeContent";

export const metadata: Metadata = {
  title: "L'Équipe | Société à Mission Europe",
  description:
    "Découvrez les chercheurs et ingénieurs qui portent le projet Société à Mission Europe : Matthieu Caron, Stéphane Vernac, Sarah Vandenbroucke et toute l'équipe.",
  alternates: {
    canonical: "https://societe-mission-europe.surge.sh/equipe",
  },
};

export default function EquipePage() {
  return <EquipeContent />;
}
