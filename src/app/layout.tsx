import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://societe-mission-europe-pi.vercel.app'),
  title: {
    default: 'Société à Mission Europe | Programme de recherche européen',
    template: '%s | Société à Mission Europe'
  },
  description: 'Programme de recherche sur la société à mission en Europe. 50 chercheurs, 20+ partenaires académiques construisent le modèle européen de l\'entreprise à mission. UPHF, HEC, ESSEC, Sciences Po.',
  keywords: [
    'société à mission',
    'société à mission Europe',
    'entreprise à mission',
    'loi PACTE',
    'purpose-driven company',
    'mission-driven company',
    'UPHF',
    'recherche entreprise',
    'RSE Europe',
    'gouvernance entreprise'
  ],
  authors: [{ name: 'UPHF - Université Polytechnique Hauts-de-France' }],
  creator: 'Observatoire de l\'Éthique Publique',
  publisher: 'Société à Mission Europe',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://societe-mission-europe-pi.vercel.app',
    siteName: 'Société à Mission Europe',
    title: 'Société à Mission Europe | Bâtir le modèle européen',
    description: 'Programme de recherche fédérant 50 chercheurs et 20+ partenaires pour construire le cadre européen de la société à mission.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Société à Mission Europe - Programme de recherche',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Société à Mission Europe',
    description: 'Programme de recherche européen sur la société à mission. 50 chercheurs, 20+ partenaires.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://societe-mission-europe-pi.vercel.app',
    languages: {
      'fr-FR': 'https://societe-mission-europe-pi.vercel.app',
    },
  },
  verification: {
    google: 'TO_BE_ADDED',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <meta name="theme-color" content="#E33766" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
