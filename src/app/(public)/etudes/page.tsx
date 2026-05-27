import type { Metadata } from "next";
import EtudesContent from "@/components/EtudesContent";

export const metadata: Metadata = {
  title: 'Études & Publications | Société à Mission Europe',
  description: 'Découvrez les études produites dans le cadre du programme de recherche Société à Mission Europe : cartographie européenne, SARS, Società Benefit.',
  alternates: { canonical: 'https://societe-mission-europe-pi.vercel.app/etudes' }
};

export default function EtudesPage() {
  return <EtudesContent />;
}
