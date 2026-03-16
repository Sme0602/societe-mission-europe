export interface TeamMember {
  name: string;
  slug: string;
  initials: string;
  role: string;
  title: string;
  affiliation: string;
  color: string;
  bio: string[];
  publications?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Matthieu Caron",
    slug: "matthieu-caron",
    initials: "MC",
    role: "Porteur du projet",
    title: "Maître de conférences HDR en droit",
    affiliation: "UPHF & Sciences Po Lille",
    color: "bg-rose-600",
    bio: [
      "Ancien élève de l\u2019École Normale Supérieure de Cachan, agrégé d\u2019économie et de gestion, titulaire d\u2019un DEA de droit public approfondi de l\u2019université de Paris 1 et d\u2019un magistère de droit européen ainsi que d\u2019un doctorat en droit public, Matthieu Caron est maître de conférences HDR en droit à l\u2019université polytechnique des Hauts-de-France et Sciences Po Lille. Il est par ailleurs certifié d\u2019HEC Paris en Sustainable Transition Management et de l\u2019ESSEC en RSE et développement durable.",
      "Il dirige actuellement le Master Management responsable des entreprises de Sciences Po Lille, le Cycle supérieur de management public Sciences Po-Edhec ainsi que la préparation aux grands concours administratifs de Sciences Po Lille. Il est par ailleurs Directeur général de L\u2019Observatoire de l\u2019éthique publique et titulaire de la Chaire Société à mission européenne.",
      "Ses travaux portent sur le droit gouvernemental, l\u2019éthique publique, l\u2019analyse juridique de l\u2019économie et, plus récemment, sur l\u2019éthique des affaires.",
      "Depuis le début de sa carrière, il a enseigné à la fois l\u2019économie politique (Histoire de la pensée économique, histoire des faits économiques et sociaux, actualité économique sociale et environnementale, analyse économique du droit, économie des finances publiques), le droit public (droit constitutionnel, droit des finances publiques et droit de l\u2019union européenne) ainsi que le management (Leadership, influence publique, Business Ethics, refondation de la gouvernance des entreprises et introduction aux sciences de gestion).",
    ],
    publications: [
      "Éthique publique des affaires, ouvrage collectif en codirection avec Mathieu Disant et Mathias Amilhat, à paraître début 2026 à la LGDJ.",
      "L\u2019éthique des affaires, Que sais-je, PUF, octobre 2025.",
      "\u00AB L\u2019Union européenne doit défendre le modèle de l\u2019entreprise responsable \u00BB, (en collaboration avec Stéphane Vernac, PP n°16 OEP, mars 2025.",
      "\u00AB L\u2019éthique publique des affaires, Essai de définition et déclinaison de nouveaux champs de recherches \u00BB, note n°41 OEP, 11 mars 2025.",
      "\u00AB Faisons de la France une pionnière en matière d\u2019éthique des affaires \u00BB, tribune collective, Le Monde du 13 janvier 2020.",
    ],
  },
  {
    name: "Stéphane Vernac",
    slug: "stephane-vernac",
    initials: "SV",
    role: "Co-porteur / Direction scientifique",
    title: "Professeur de droit",
    affiliation: "UPJV, Directeur du CEPRISCA-Centre Antoine Loisel",
    color: "bg-navy-800",
    bio: [
      "Stéphane Vernac est agrégé de droit privé et professeur de droit à l\u2019université de Picardie Jules-Vernes (UPJV) où il dirige actuellement le Centre de droit privé et de sciences criminelles d\u2019Amiens (CEPRISCA-Centre Antoine Loisel). Il est également co-directeur du Master de droit social de l\u2019UPJV au sein de la faculté de droit d\u2019Amiens. Il assure des responsabilités éditoriales en qualité de directeur scientifique de la revue Lexbase social. Il est aussi responsable de rubrique et membre du comité éditorial de la Revue de droit du travail (Dalloz), et co-responsable des panoramas de droit du travail pour le Recueil général Dalloz.",
      "Ancien élève de l\u2019ENS Cachan et agrégé en économie gestion, il est également chercheur associé au Centre de gestion scientifique de Mines ParisTech et membre de l\u2019Observatoire de l\u2019Éthique Publique. Il est par ailleurs membre du conseil scientifique de la Communauté des entreprises à missions (CEM).",
      "Outre des publications dans le champ du droit du travail, ses travaux concernent également l\u2019entreprise. Il s\u2019intéresse tout particulièrement au pouvoir qui structure les entreprises \u2013 qu\u2019il appelle pouvoir d\u2019organisation \u2013 ainsi qu\u2019à leur gouvernement et à leurs responsabilités. Il a participé au programme de recherche sur l\u2019entreprise au sein du Collège des Bernardins (Paris) entre 2009 et 2018. Il a participé, dans le cadre d\u2019une recherche post-doctorale menée à l\u2019École des Mines, en 2013, à la conception et à la définition du régime juridique de la \u00AB Société à objet social étendu \u00BB (qui deviendra la société à mission) aux côtés de chercheurs spécialistes des sciences de gestion (A. Hatchuel, B. Segrestin, K. Levillain). Il a ensuite contribué, en qualité de conseiller technique au sein du Ministère de l\u2019Économie Sociale et Solidaire (ESS), à la rédaction des dispositions de la loi ESS du 31 juillet 2014 relatives à la Coopérative d\u2019Activité et d\u2019Emploi (CAE). Il contribuera également, avec un député et des universitaires, à la rédaction d\u2019une proposition de loi sur le devoir de vigilance, qui deviendra la loi du 27 mars 2017 relative au devoir de vigilance des sociétés mères et des entreprises donneuses d\u2019ordre. Il a été à plusieurs reprises auditionné par des parlementaires sur diverses questions à l\u2019Assemblée nationale et au Sénat, notamment sur la question du statut des travailleurs de plateformes.",
    ],
    publications: [
      "\u00AB Entreprises, Responsabilités et Civilisations. Vers un nouveau cycle du développement durable \u00BB, sous la dir. de K. Levillain, B. Segrestin, A. Hatchuel et S. Vernac, Presse des Mines, 2020.",
      "\u00AB Gouvernement, participation et mission de l\u2019entreprise \u00BB, B. Segrestin et S. Vernac, préf. J.D. Senard, post. B. Roger, éd. Hermann, oct. 2018.",
      "\u00AB L\u2019entreprise, point aveugle du savoir \u00BB, sous la direction de B. Segrestin, B. Roger et S. Vernac, Paris, éd. Sciences humaines, 343 p., 2014.",
      "\u00AB La \u201CSociété à Objet Social Étendu\u201D. Un nouveau statut pour l\u2019entreprise \u00BB, sous la direction de B. Segrestin, K. Levillain, S. Vernac, A. Hatchuel, Paris, Presses des Mines, 122 p. 2015.",
      "\u00AB Multinationals and the constitutionalization of the world power system \u00BB, ouvrage collectif sous la direction de A. Lyon-Caen, J.P. Robé et S. Vernac, Préface de J. Ruggie, éd. Routledge, 2016 (langue anglaise).",
      "\u00AB Les responsabilités de l\u2019entreprise face aux risques : du droit du gouvernement de l\u2019incertain au droit du gouvernement de l\u2019inconnu \u00BB, in L\u2019entreprise résiliente, I. Desbarats (dir.), LexisNexis, Coll. Planète Social, 2023.",
      "\u00AB La pérennité de l\u2019entreprise en quête de modèles \u00BB, in La pérennité de l\u2019entreprise, sous dir. G. Bargain, F. Juredieu, éd. Lexis Nexis, 2022, p. 135.",
      "\u00AB L\u2019entreprise et sa raison d\u2019être \u00BB, Semaine sociale Lamy n°1807, 19 mars 2018.",
      "\u00AB La RSE ou l\u2019essor de l\u2019entreprise-providence \u00BB, S. Vernac avec A.C. Hannoun, in \u00AB À droit ouvert \u00BB, Mélanges en l\u2019honneur d\u2019Antoine Lyon-Caen, éd. Dalloz, novembre 2018.",
      "\u00AB Du bon gouvernement de l\u2019entreprise en société \u00BB, Revue de droit du travail 2018, p. 261, également publié dans \u00AB La mission de l\u2019entreprise responsable. Principes et normes de gestion \u00BB, sous dir. B. Segrestin et K. Levillain, Paris, Presses des Mines, oct. 2018 \u2013 Prix du livre RH Science Po, Le Monde Syntec).",
      "\u00AB L\u2019objet social étendu : une voie pour réaligner le droit et la théorie des parties prenantes \u00BB, S. Vernac, avec B. Segrestin, A. Hatchuel et K. Levillain, Revue Finance Contrôle Stratégie, vol. 17, n°3 septembre 2014.",
      "\u00AB Quelle(s) finalité(s) de l\u2019entreprise. De l\u2019entreprise déformée à l\u2019entreprise réformée \u00BB, in Entreprise et responsabilité sociale en questions, Savoirs et controverses, sous dir. J.-P. Chanteau, K. Martin-Chenut, M. Capron, éd. Classiques Garnier, 2017, p. 185-200.",
    ],
  },
  {
    name: "Sarah Vandenbroucke",
    slug: "sarah-vandenbroucke",
    initials: "SV",
    role: "Ingénieure de recherche",
    title: "Axe France & Europe",
    affiliation: "UPHF/LARSH",
    color: "bg-jaune-400",
    bio: [
      "Sarah Vandenbroucke est titulaire d\u2019un doctorat en droit de l\u2019Université de Leiden (Pays-Bas). Elle est également diplômée d\u2019un Bachelor en droit de l\u2019Université de Lille 2, d\u2019un LL.M. en droit européen de Leiden Law School (2017) et d\u2019un double Master en droit du travail et en sociologie des organisations (University of Toulouse 1 Capitole & Graduate School of Social Sciences of Amsterdam, 2018). Elle a précédemment travaillé au sein de l\u2019Assemblée parlementaire du Conseil de l\u2019Europe (Commission Égalité et non-discrimination, Strasbourg), au Bureau régional de l\u2019Organisation Internationale du Travail (OIT) pour l\u2019Asie du Sud-Est (New Delhi), ainsi qu\u2019en tant que consultante pour les institutions européennes sur les politiques sociales et de l\u2019emploi à Bruxelles.",
      "Ses responsabilités et fonctions académiques passées incluent la coordination de l\u2019Empirical Legal Studies Lab de Leiden University pendant 4 ans, un séjour de six mois en tant que Visiting Scholar à l\u2019European University Institute (Florence) ainsi que des activités d\u2019enseignement à Leiden Law School (Advanced Master in European and International Human Rights) et à Sciences Po Lille (Master Management Responsable des Entreprises). Elle est aujourd\u2019hui administratrice de l\u2019Observatoire de l\u2019Éthique Publique (OEP), membre du Netherlands Network for Human Rights Research, et intervient comme consultante pour plusieurs institutions, notamment Expertise France (coopération technique UE\u2013Mexique) et l\u2019Agence des droits fondamentaux de l\u2019Union européenne (FRA).",
      "Ses travaux portent sur la conduite responsable des entreprises, l\u2019éthique des affaires et l\u2019analyse de modes alternatifs de gouvernance visant à promouvoir la responsabilité sociale, environnementale et sociétale des entreprises. Son approche est interdisciplinaire et combine droit et sociologie, en articulant enquêtes empiriques de terrain et analyse juridique.",
    ],
    publications: [
      "Vandenbroucke S.E.M. (2025), Navigating corporate responsibility in global supply chains using codes of conduct, Thèse de doctorat, Leiden University, Meijers-reeks MI-433.",
      "Vandenbroucke S.E.M., Kantorowicz J.J. & Erkens M.Y.H.G. (2024), \u201CDecoding supplier codes of conduct with content and text as data approaches\u201D, Corporate Social Responsibility and Environmental Management, 31(1): 472\u2013492.",
      "Vandenbroucke S.E.M., Pluut H., Erkens M.Y.H.G. & Kantorowicz J.J. (2024), \u201CDo companies walk the talk? Commitments and actions in global supply chain labor standards\u201D, International Journal of Corporate Social Responsibility, 9:17.",
      "Vandenbroucke S.E.M. (2024), \u201CThe evolution of codes of conduct to ensure labor rights in global supply chains\u201D, AJIL Unbound, 118: 297\u2013302.",
    ],
  },
  {
    name: "Alix Vanmeervenne",
    slug: "alix-vanmeervenne",
    initials: "AV",
    role: "Ingénieure d\u2019études",
    title: "Axe territorial Hauts-de-France",
    affiliation: "UPHF/LARSH",
    color: "bg-rose-600",
    bio: [
      "Alix Vanmeervenne est ingénieure d\u2019études à l\u2019Université Polytechnique Hauts-de-France. Rattachée au laboratoire Sociétés et Humanités, elle est associée au projet FEDER Société à mission Europe, consacré à l\u2019analyse et à l\u2019expérimentation des modèles d\u2019entreprise orientés par une mission sociale et environnementale.",
      "Ses travaux portent plus particulièrement sur la société à mission, l\u2019histoire sociale et économique des Hauts-de-France, ainsi que sur l\u2019animation et la structuration de communautés d\u2019acteurs académiques, économiques et institutionnels, dans une logique de recherche-action visant à créer des ponts durables entre monde académique et monde économique.",
      "Diplômée avec la mention magna cum laude du Master Management Responsable des Entreprises de Sciences Po Lille, ce parcours académique s\u2019est construit à l\u2019intersection des sciences sociales et des sciences de gestion, avec pour objectif d\u2019accompagner les organisations dans leurs transitions économiques, sociales et environnementales. En parallèle de sa première année de master, elle a exercé comme consultante solidaire en service civique chez Impulso, développant une appétence pour l\u2019accompagnement des organisations sur les enjeux de durabilité. Elle a ensuite réalisé une première alternance chez Représente.org, coopérative spécialisée dans l\u2019accompagnement des comités sociaux et économiques (CSE) sur les trajectoires de décarbonation, en tant que chargée de communication et de sensibilisation aux enjeux écologiques.",
      "Elle a poursuivi son parcours par une seconde alternance chez Parangone, cabinet de conseil en responsabilité sociétale des entreprises (RSE), où elle a exercé en tant que cheffe de projet. Dans ce cadre, elle a contribué à la création et au lancement de GenAct, association dédiée à la promotion de l\u2019économie régénérative, de sa genèse jusqu\u2019à son déploiement public et au lancement de sa plateforme numérique.",
      "À l\u2019issue de son diplôme, elle a rédigé une étude intitulée \u00AB Les différents modèles de gouvernance d\u2019entreprises en Europe \u00BB, avant de rejoindre le projet Société à mission Europe, au sein duquel elle coordonne notamment deux ouvrages collectifs :",
    ],
    publications: [
      "Les entreprises du Nord, une histoire sociale singulière.",
      "Ces entrepreneurs du Nord qui changent le monde.",
    ],
  },
  {
    name: "Pablo Maria",
    slug: "pablo-maria",
    initials: "PM",
    role: "Doctorant (1ère année)",
    title: "Recherche européenne",
    affiliation: "UPHF/ESPOL/LARSH",
    color: "bg-navy-800",
    bio: [
      "Diplômé du master Management Responsable des Entreprises de Sciences Po Lille, Pablo Maria est doctorant en 1ère année en gestion à l\u2019Université Polytechnique des Hauts de France et l\u2019ESPOL, et rattaché au laboratoire de Recherche Sociétés & Humanités (LARSH).",
      "Ses recherches portent sur une première exploration d\u2019un modèle européen de la Purpose-Driven Company avec comme angle de recherche l\u2019étude du rôle du \u00AB territoire \u00BB dans la diffusion de pratiques de gouvernance dites responsables.",
      "Ses travaux portent sur une analyse comparée de l\u2019implantation territoriale de la Société à Mission au sein de la métropole lilloise, la Societa Benefit autour du territoire romain ainsi que la Sociedad de Beneficio e Interés Común (SBIC) au sein de la métropole de Barcelone.",
      "Pablo Maria est également cofondateur de la startup Intersektion qui accompagne les entreprises dans leur transition sociale et écologique. À la fois doctorant et entrepreneur, il participe au projet de recherche-action Société à Mission Europe à travers sa recherche doctorale et sa contribution aux nombreuses productions et évènements prévus.",
    ],
  },
  {
    name: "Jean-Marie Massonnat",
    slug: "jean-marie-massonnat",
    initials: "JM",
    role: "Rapporteur du projet",
    title: "Professeur de chaire supérieure en économie et gestion",
    affiliation: "Observatoire de l\u2019Éthique Publique",
    color: "bg-jaune-400",
    bio: [
      "Jean-Marie Massonnat est professeur de chaire supérieure en économie et gestion.",
      "Ancien élève de l\u2019École Normale Supérieure de Cachan, il est agrégé d\u2019économie et gestion et titulaire d\u2019un diplôme d\u2019études approfondies en sciences de gestion (Université Paris II Panthéon-Assas) et d\u2019une maîtrise en droit (Université Rennes I).",
      "Jean-Marie Massonnat enseigne l\u2019économie en classe préparatoire aux grandes écoles à Nantes, à l\u2019Institut d\u2019administration des entreprises (IAE) de Nantes en Master Management et administration des entreprises (MAE) et à l\u2019Institut d\u2019études politiques (IEP) de Lille en Master Management Responsable des Entreprises (MRE).",
      "Ses principaux centres d\u2019intérêts et de travail concernent la régulation de l\u2019économie par le droit, les théories de la croissance et de la post-croissance, la théorie de l\u2019entreprise, la responsabilité de l\u2019entreprise, l\u2019évaluation extra-financière de l\u2019entreprise, le(s) nouveau(x) modèle(s) d\u2019entreprise(s) à penser pour affirmer, défendre et promouvoir les valeurs françaises et européennes face aux défis de notre temps.",
      "Jean-Marie Massonnat est membre fondateur et administrateur de l\u2019Observatoire de l\u2019éthique publique (OEP), convaincu que l\u2019éthique des affaires est consubstantiellement liée à l\u2019éthique publique et persuadé que l\u2019entreprise a un rôle essentiel à jouer dans la société, qu\u2019elle fait partie de la solution pour transformer le monde.",
      "Il est membre de l\u2019équipe porteuse du projet FEDER Société à mission Europe en tant que rapporteur dudit projet. Acteur et témoin privilégié de l\u2019ensemble du processus, son rôle est de rendre compte du projet en lui-même, de son histoire et de son déroulement, notamment et tout particulièrement à travers la parution d\u2019un ouvrage final de récit et de synthèse de tous les apports du programme de recherche.",
    ],
  },
  {
    name: "Aïcha Barry",
    slug: "aicha-barry",
    initials: "AB",
    role: "Stagiaire",
    title: "Droit public & éthique des affaires",
    affiliation: "UPHF / Observatoire de l\u2019Éthique Publique",
    color: "bg-rose-600",
    bio: [
      "Étudiante en Master II Droit public, parcours Éthique publique des affaires à l\u2019Université Polytechnique des Hauts-de-France (UPHF), Aïcha Barry est actuellement stagiaire au sein de l\u2019Observatoire de l\u2019Éthique Publique. Son cursus est axé sur les enjeux de la compliance, de la lutte contre la corruption, de la transparence financière et de la Responsabilité Sociétale des Entreprises (RSE).",
      "Ses travaux de recherche actuels se concrétisent par la rédaction d\u2019un mémoire intitulé : \u00AB La déontologie et l\u2019éthique des magistrats : étude comparée des exigences applicables aux juridictions françaises et à la Cour de justice de l\u2019Union européenne \u00BB. Cette étude interroge les standards d\u2019intégrité et les cadres réglementaires au sein des hautes instances juridictionnelles.",
      "Forte d\u2019une expérience variée, Aïcha a exercé comme juriste en alternance chez Décathlon France, où elle a notamment travaillé sur la conformité réglementaire et le scoring \u201CGreen Lease\u201D des baux commerciaux. Elle a également réalisé un stage au Secrétariat Général du Gouvernement de la République de Guinée, participant aux travaux de la revue fonctionnelle du SGG, soutenue par l\u2019Union Européenne, afin de renforcer la bonne gouvernance institutionnelle.",
      "Aujourd\u2019hui, elle contribue au déploiement du projet Société à Mission Europe. Dans ce cadre, elle assure la coordination et la communication du lancement de la journée dédiée au projet, tout en effectuant un travail de veille stratégique sur les entreprises à mission et les pratiques RSE au sein de la région Hauts-de-France. Elle participe également à la production des rapports d\u2019activité et à la relecture scientifique des travaux de l\u2019Observatoire.",
    ],
  },
];
