export type NewsType = "presse" | "podcast" | "linkedin" | "evenement" | "publication" | "newsletter" | "video";

export type NewsItem = {
  type: NewsType;
  date: string;
  title: string;
  url: string;
  summary: string;
};

export const newsItems: NewsItem[] = [
  {
    type: "video",
    date: "Juillet 2026",
    title: "Vidéo Summer School 2026 — Regardez la journée en images",
    url: "https://youtu.be/bBbCPa_DPeA",
    summary: "Vidéo récapitulative de la Summer School « Purpose at the Heart of Europe » à Sciences Po Lille (26 juin 2026). Réalisée par Maxime Carlier et Inès Meunier, elle retrace les moments forts de cette journée réunissant chercheurs, praticiens et institutionnels européens.",
  },
  {
    type: "newsletter",
    date: "Juillet 2026",
    title: "Newsletter N°2 — Summer School 2026 : Purpose at the Heart of Europe",
    url: "/presse-news",
    summary: "Deuxième newsletter du projet Société à Mission Europe, consacrée au retour sur la Summer School « Purpose at the Heart of Europe » organisée à Sciences Po Lille le 26 juin 2026. Bilan des échanges entre chercheurs, praticiens et institutionnels européens.",
  },
  {
    type: "publication",
    date: "Juillet 2026",
    title: "Pablo Maria, doctorant LARSH — À quoi sert une société à mission ? (L'Économie Politique N°111)",
    url: "https://boutique.alternatives-economiques.fr/economie-politique",
    summary: "Article scientifique publié dans la revue L'Économie Politique (N°111, Alternatives Économiques). Pablo Maria, doctorant au LARSH, y analyse les fondements et la portée du modèle de la société à mission, entre ambition transformatrice et risques d'instrumentalisation.",
  },
  {
    type: "publication",
    date: "2 juillet 2026",
    title: "Elena Codoni, chercheuse associée au projet — La composition du comité de mission, élément clé pour rétablir la crédibilité de la société à mission",
    url: "https://www.dalloz-revues.fr/revues/revue_des_societes-38.htm",
    summary: "Article publié dans la Revue des Sociétés (Dalloz). Elena Codoni examine comment la composition du comité de mission — indépendance des membres, diversité des profils, compétences — constitue un levier essentiel pour restaurer la crédibilité du dispositif de société à mission.",
  },
  {
    type: "linkedin",
    date: "2 juillet 2026",
    title: "Summer School à Sciences Po Lille — académiques et entrepreneurs réunis autour des modèles d'entreprises à mission en Europe",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7478450065611661326",
    summary: "Post LinkedIn partageant les moments forts de la Summer School « Purpose at the Heart of Europe » à Sciences Po Lille, avec photos et témoignages des participants venus de toute l'Europe.",
  },
  {
    type: "evenement",
    date: "26 juin 2026",
    title: "Summer School — Purpose at the Heart of Europe, Sciences Po Lille",
    url: "/evenements/summer-school-juin-2026",
    summary: "Première Summer School du projet, réunissant chercheurs, praticiens et institutionnels européens à Sciences Po Lille pour une journée d'échanges sur l'avenir de l'entreprise à mission à l'échelle européenne.",
  },
  {
    type: "podcast",
    date: "25 juin 2026",
    title: "Euradio — La France a montré la voie, et si l'Europe suivait ? Par Emery Jacquillat et Sarah Vandenbroucke",
    url: "https://euradio.fr/emission/4zej-euradio-a-lille/5dAL-societe-a-mission-la-france-a-montre-la-voie-et-si-leurope-suivait",
    summary: "Émission de radio sur Euradio. Emery Jacquillat (Président de la Communauté des Entreprises à Mission) et Sarah Vandenbroucke présentent le projet Société à Mission Europe et discutent de la diffusion du modèle français en Europe.",
  },
  {
    type: "presse",
    date: "22 juin 2026",
    title: "La Voix du Nord — On ne changera pas le monde sans les entreprises",
    url: "https://www.lavoixdunord.fr/1714514/article/2026-06-22/projet-societe-mission-europe-ne-changera-pas-le-monde-contre-les-entreprises-et",
    summary: "Article de presse dans La Voix du Nord couvrant le projet Société à Mission Europe et la conviction portée par ses fondateurs que la transformation sociétale passe aussi par les entreprises.",
  },
  {
    type: "publication",
    date: "16 juin 2026",
    title: "Martin Richer — L'Europe : nouvelle frontière de la raison d'être et de la société à mission",
    url: "https://www.observatoireethiquepublique.com/nos-propositions/etudes/leurope-nouvelle-frontiere-de-la-raison-detre-et-de-la-societe-a-mission.html",
    summary: "Libre propos publié avec l'Observatoire de l'Éthique Publique. Martin Richer analyse comment l'Europe peut devenir le nouveau terrain de développement de la raison d'être et de la société à mission, au-delà du cadre français.",
  },
];

export const badgeConfig: Record<NewsType, { label: string; bg: string; text: string; icon: string }> = {
  presse: { label: "Presse", bg: "bg-red-50", text: "text-red-700", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" },
  podcast: { label: "Podcast", bg: "bg-purple-50", text: "text-purple-700", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4 0h8M12 3a3 3 0 00-3 3v4a3 3 0 006 0V6a3 3 0 00-3-3z" },
  linkedin: { label: "LinkedIn", bg: "bg-blue-50", text: "text-blue-700", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  evenement: { label: "Événement", bg: "bg-amber-50", text: "text-amber-700", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  publication: { label: "Publication", bg: "bg-emerald-50", text: "text-emerald-700", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  newsletter: { label: "Newsletter", bg: "bg-rose-50", text: "text-rose-700", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  video: { label: "Vidéo", bg: "bg-pink-50", text: "text-pink-700", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
};
