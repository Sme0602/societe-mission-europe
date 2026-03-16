import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact | Société à Mission Europe',
  description: 'Contactez l\'équipe du programme Société à Mission Europe. Chercheurs, entreprises, institutions : rejoignez le mouvement pour l\'entreprise à mission en Europe.',
  alternates: { canonical: 'https://societe-mission-europe.surge.sh/contact' }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
