import type { Metadata } from "next";
import TravauxContent from "@/components/TravauxContent";

export const metadata: Metadata = {
  title: 'Nos travaux | Société à Mission Europe',
  description: 'Découvrez les productions scientifiques du programme Société à Mission Europe : études, cartographies, ouvrages collectifs.',
  alternates: { canonical: 'https://societe-mission-europe-pi.vercel.app/travaux' }
};

export default function TravauxPage() {
  return <TravauxContent />;
}
