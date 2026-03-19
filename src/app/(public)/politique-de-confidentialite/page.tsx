import type { Metadata } from "next";
import PolitiqueConfidentialiteContent from "@/components/PolitiqueConfidentialiteContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Société à Mission Europe",
  description:
    "Politique de confidentialité et protection des données personnelles du site Société à Mission Europe - Conformité RGPD.",
  alternates: {
    canonical: "https://societe-mission-europe.surge.sh/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />;
}
