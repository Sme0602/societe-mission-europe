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
  {
    type: "presse",
    date: "4 mars 2026",
    title: "UPHF/LARSH — Société à Mission : Et si les Hauts-de-France devenaient le Laboratoire d'une Révolution Entrepreneuriale Européenne",
    url: "https://www.uphf.fr/larsh/actualites/societe-mission-si-hauts-france-devenaient-laboratoire-dune-revolution-entrepreneuriale-europeenne",
    summary: "Article publié sur le site du laboratoire LARSH. Nicole Pertuis recueille les explications de Matthieu Caron sur l'ambition du projet : faire des Hauts-de-France un laboratoire d'innovation pour penser l'avenir des entreprises à mission à l'échelle européenne.",
  },
  {
    type: "presse",
    date: "4 mars 2026",
    title: "Novethic — L'Europe peut-elle inventer l'entreprise du XXIe siècle ?",
    url: "https://www.novethic.fr/economie-et-social/transformation-de-leconomie/europe-peut-elle-inventer-entreprise-xxi-siecle",
    summary: "Des dirigeants et experts plaident pour que l'Europe reconnaisse officiellement le statut d'entreprise à mission à l'échelle continentale, un modèle qui réconcilie performance économique et résilience à long terme.",
  },
  {
    type: "presse",
    date: "4 mars 2026",
    title: "L'Écho — L'Europe peut-elle inventer l'entreprise du XXIe siècle ?",
    url: "https://www.lecho.be/opinions/general/opinion-l-europe-peut-elle-inventer-l-entreprise-du-xxi-siecle/10651704.html",
    summary: "Tribune signée par des acteurs de la Communauté des entreprises à mission, KAYA et Assobenefit, appelant à un statut européen pour les entreprises à mission.",
  },
  {
    type: "presse",
    date: "2 mars 2026",
    title: "Communauté des Entreprises à Mission — Un projet de « société à mission » européenne lancé pour imaginer un modèle d'entreprise alternatif",
    url: "https://entreprisesamission.org/un-projet-de-societe-a-mission-europeenne-lance-pour-imaginer-un-modele-dentreprise-alternatif-avec-matthieu-caron-co-porteur-du-projet/",
    summary: "La Communauté des Entreprises à Mission relaie le lancement du projet européen porté par Matthieu Caron, co-porteur du projet, visant à imaginer un modèle d'entreprise alternatif à l'échelle du continent.",
  },
  {
    type: "podcast",
    date: "27 février 2026",
    title: "Euradio — Société à mission : un modèle européen en expérimentation",
    url: "https://euradio.fr/emission/4zej-euradio-a-lille/dYl6-societe-a-mission-un-modele-europeen-en-experimentation",
    summary: "Matthieu Caron revient sur Euradio sur l'initiative Société à Mission Europe : un projet de recherche-action qui explore comment le modèle de société à mission peut être pensé et adapté à l'échelle européenne.",
  },
  {
    type: "presse",
    date: "17 février 2026",
    title: "The Good — Vers une « société à mission européenne » : lancement d'un projet pour faire de l'Europe le premier continent à mission",
    url: "https://www.thegood.fr/vers-une-societe-a-mission-europeenne-lancement-dun-projet-pour-faire-de-leurope-le-premier-continent-a-mission/",
    summary: "Le projet « Société à mission Europe » a été lancé dans les Hauts-de-France le 6 février, réunissant près de 300 chercheurs, dirigeants, étudiants et responsables publics européens.",
  },
  {
    type: "presse",
    date: "12 février 2026",
    title: "Carenews — Un projet de « société à mission » européenne lancé pour imaginer un modèle d'entreprise alternatif",
    url: "https://www.carenews.com/carenews-info/news/un-projet-de-societe-a-mission-europeenne-lance-pour-imaginer-un-modele-d",
    summary: "Matthieu Caron, maître de conférences en droit public et directeur général de L'Observatoire de l'éthique publique, co-porte le projet aux côtés de Stéphane Vernac.",
  },
  {
    type: "presse",
    date: "8 février 2026",
    title: "La Gazette France — Wallers-Arenberg, berceau du projet Société à mission européenne",
    url: "https://www.lagazettefrance.fr/article/wallers-arenberg-berceau-du-projet-societe-a-mission-europeenne",
    summary: "C'est dans le cadre du site minier de Wallers-Arenberg que l'Université Polytechnique Hauts-de-France a lancé le projet « Société à mission en Europe ».",
  },
  {
    type: "evenement",
    date: "6 février 2026",
    title: "Journée de lancement — Société à Mission Europe, Wallers-Arenberg",
    url: "/evenements/lancement-6-fevrier-2026",
    summary: "Près de 300 participants réunis sur le site minier de Wallers-Arenberg pour le lancement officiel du projet Société à Mission Europe : chercheurs, dirigeants, partenaires sociaux, hauts fonctionnaires et responsables politiques européens.",
  },
  {
    type: "presse",
    date: "6 février 2026",
    title: "Réseau Alliances — Lancement du projet FEDER « Société à mission en Europe »",
    url: "https://www.reseau-alliances.org/agenda-rse/3481-lancement-du-projet-feder-societe-a-mission-en-europe",
    summary: "Le Réseau Alliances annonce l'événement de lancement du projet FEDER sur le site minier de Wallers-Arenberg.",
  },
  {
    type: "presse",
    date: "6 février 2026",
    title: "Observatoire de l'Éthique Publique — Lancement de la chaire Société à Mission Européenne",
    url: "https://www.observatoireethiquepublique.com/agenda/20251/lancement-de-la-chaire-societe-a-mission-europeenne.html",
    summary: "L'Observatoire de l'Éthique Publique, co-porteur du projet, annonce le lancement officiel de la chaire de recherche dédiée au modèle européen de la société à mission.",
  },
  {
    type: "presse",
    date: "5 février 2026",
    title: "Mediatico — Les Hauts-de-France, tête de pont d'une société à mission européenne",
    url: "https://mediatico.fr/les-hauts-de-france-tete-de-pont-dune-societe-a-mission-europeenne/",
    summary: "L'Université Polytechnique Hauts-de-France lance une initiative de recherche ambitieuse pour développer un modèle européen d'entreprise à mission.",
  },
  {
    type: "presse",
    date: "Décembre 2025",
    title: "ESSCA — Société à Mission Européenne — Projet FEDER 2026/2029",
    url: "https://www.essca.eu/app/uploads/2025/12/societe-a_mission_europeenne_projet_feder_20262029.pdf",
    summary: "Document de présentation du projet FEDER « Société à Mission Européenne » couvrant la période 2026-2029, détaillant la structure, les objectifs et le financement du projet.",
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
