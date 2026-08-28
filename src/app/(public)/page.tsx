import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title:
    "Société à Mission Europe | Programme de recherche européen sur l'entreprise à mission",
  description:
    "Découvrez le programme de recherche Société à Mission Europe : 50 chercheurs, 20+ partenaires académiques (UPHF, HEC, ESSEC) construisent le modèle européen de l'entreprise à mission.",
  alternates: {
    canonical: "https://societe-mission-europe.com",
  },
};

export default function Home() {
  return <HomeContent />;
}
