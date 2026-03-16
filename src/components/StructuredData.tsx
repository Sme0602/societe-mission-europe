export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Société à Mission Europe",
    "alternateName": "SME Research Program",
    "description": "Programme de recherche-action sur la société à mission en Europe, porté par l'UPHF et l'Observatoire de l'Éthique Publique",
    "url": "https://societe-mission-europe.surge.sh",
    "logo": "https://societe-mission-europe.surge.sh/logo.jpg",
    "foundingDate": "2025",
    "foundingLocation": {
      "@type": "Place",
      "name": "Valenciennes, Hauts-de-France, France"
    },
    "funder": [
      {
        "@type": "Organization",
        "name": "FEDER - Fonds Européen de Développement Régional"
      },
      {
        "@type": "Organization",
        "name": "Région Hauts-de-France"
      }
    ],
    "member": [
      {"@type": "Organization", "name": "UPHF - Université Polytechnique Hauts-de-France"},
      {"@type": "Organization", "name": "Observatoire de l'Éthique Publique"},
      {"@type": "Organization", "name": "HEC Paris"},
      {"@type": "Organization", "name": "ESSEC Business School"},
      {"@type": "Organization", "name": "Sciences Po Lille"},
      {"@type": "Organization", "name": "EDHEC Business School"},
      {"@type": "Organization", "name": "Mines Paris - PSL"}
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Europe"
    },
    "keywords": "société à mission, entreprise à mission, purpose-driven company, loi PACTE, Europe"
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Lancement du projet Société à Mission Europe",
    "description": "Journée de lancement du programme de recherche Société à Mission Europe",
    "startDate": "2026-02-06T09:00:00+01:00",
    "endDate": "2026-02-06T17:00:00+01:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Site minier de Wallers-Arenberg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wallers-Arenberg",
        "addressRegion": "Hauts-de-France",
        "addressCountry": "FR"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "UPHF - Université Polytechnique Hauts-de-France",
      "url": "https://www.uphf.fr"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://societe-mission-europe.surge.sh"},
      {"@type": "ListItem", "position": 2, "name": "Le Projet", "item": "https://societe-mission-europe.surge.sh/projet"},
      {"@type": "ListItem", "position": 3, "name": "Partenaires", "item": "https://societe-mission-europe.surge.sh/partenaires"},
      {"@type": "ListItem", "position": 4, "name": "Actualités", "item": "https://societe-mission-europe.surge.sh/actualites"},
      {"@type": "ListItem", "position": 5, "name": "Contact", "item": "https://societe-mission-europe.surge.sh/contact"}
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
