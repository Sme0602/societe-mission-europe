import type { Metadata } from "next";
import PartenairesContent from "@/components/PartenairesContent";

export const metadata: Metadata = {
  title: 'Nos Partenaires académiques et institutionnels | Société à Mission Europe',
  description: 'Réseau d\'excellence : UPHF, HEC Paris, ESSEC, Sciences Po Lille, EDHEC, Mines Paris, Observatoire de l\'Éthique Publique. 50 chercheurs engagés.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/partenaires' }
};

export default function PartenairesPage() {
  return <PartenairesContent />;
}
