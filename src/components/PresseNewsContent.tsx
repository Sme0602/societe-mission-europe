"use client";

import { useI18n } from "@/lib/i18n/context";
import { NewsletterFormFull } from "@/components/NewsletterForm";
import type { Newsletter } from "@/lib/types/database";

const pressArticles = [
  {
    title:
      "Société à Mission : Et si les Hauts-de-France devenaient le Laboratoire d'une Révolution Entrepreneuriale Européenne",
    source: "UPHF / LARSH",
    date: "2026-03-04",
    url: "https://www.uphf.fr/larsh/actualites/societe-mission-si-hauts-france-devenaient-laboratoire-dune-revolution-entrepreneuriale-europeenne",
    image: null,
    excerpt:
      "Le projet « Société à Mission Europe », porté par Matthieu Caron, vise à étendre le modèle d'entreprise à mission à l'échelle européenne, en utilisant les Hauts-de-France comme laboratoire d'expérimentation.",
  },
  {
    title:
      "L'Europe peut-elle inventer l'entreprise du XXIe siècle ?",
    source: "Novethic",
    date: "2026-03-04",
    url: "https://www.novethic.fr/economie-et-social/transformation-de-leconomie/europe-peut-elle-inventer-entreprise-xxi-siecle",
    image: "https://www.novethic.fr/wp-content/uploads/2026/03/Societe-entreprise-a-mission-@Pexels-Tara-Winstead.jpg",
    excerpt:
      "Des dirigeants et experts plaident pour que l'Europe reconnaisse officiellement le statut d'entreprise à mission à l'échelle continentale, un modèle qui réconcilie performance économique et résilience à long terme.",
  },
  {
    title:
      "L'Europe peut-elle inventer l'entreprise du XXIe siècle ?",
    source: "L'Écho",
    date: "2026-03-04",
    url: "https://www.lecho.be/opinions/general/opinion-l-europe-peut-elle-inventer-l-entreprise-du-xxi-siecle/10651704.html",
    image: null,
    excerpt:
      "Tribune signée par des acteurs de la Communauté des entreprises à mission, KAYA et Assobenefit, appelant à un statut européen pour les entreprises à mission.",
  },
  {
    title:
      "Un projet de « société à mission » européenne lancé pour imaginer un modèle d'entreprise alternatif avec Matthieu Caron",
    source: "Communauté des Entreprises à Mission",
    date: "2026-03-02",
    url: "https://entreprisesamission.org/un-projet-de-societe-a-mission-europeenne-lance-pour-imaginer-un-modele-dentreprise-alternatif-avec-matthieu-caron-co-porteur-du-projet/",
    image: null,
    excerpt:
      "La Communauté des Entreprises à Mission relaie le lancement du projet européen porté par Matthieu Caron, co-porteur du projet, visant à imaginer un modèle d'entreprise alternatif à l'échelle du continent.",
  },
  {
    title:
      "Société à mission : un modèle européen en expérimentation",
    source: "Euradio",
    date: "2026-02-27",
    url: "https://euradio.fr/emission/4zej-euradio-a-lille/dYl6-societe-a-mission-un-modele-europeen-en-experimentation",
    image: null,
    excerpt:
      "Émission radio de 22 minutes consacrée au projet « Société à Mission Europe », explorant comment les Hauts-de-France servent de territoire pilote pour adapter le modèle d'entreprise à mission au niveau européen.",
  },
  {
    title:
      "Vers une « société à mission européenne » : lancement d'un projet pour faire de l'Europe le premier continent à mission",
    source: "The Good",
    date: "2026-02-17",
    url: "https://www.thegood.fr/vers-une-societe-a-mission-europeenne-lancement-dun-projet-pour-faire-de-leurope-le-premier-continent-a-mission/",
    image: "https://www.thegood.fr/app/uploads/2026/02/CEM-EmeryJ.jpg",
    excerpt:
      "Le projet « Société à mission Europe » a été lancé dans les Hauts-de-France le 6 février, réunissant près de 300 chercheurs, dirigeants, étudiants et responsables publics européens.",
  },
  {
    title:
      "Un projet de « société à mission » européenne lancé pour imaginer un modèle d'entreprise alternatif",
    source: "Carenews",
    date: "2026-02-12",
    url: "https://www.carenews.com/carenews-info/news/un-projet-de-societe-a-mission-europeenne-lance-pour-imaginer-un-modele-d",
    image: "https://www.carenews.com/sites/default/files/styles/etire_grand/public/2026-02/performance%20%C3%A9conomique%20%281%29.png?itok=Bm9QUs3V",
    excerpt:
      "Matthieu Caron, maître de conférences en droit public et directeur général de L'Observatoire de l'éthique publique, co-porte le projet aux côtés de Stéphane Vernac.",
  },
  {
    title:
      "Wallers-Arenberg, berceau du projet Société à mission européenne",
    source: "La Gazette France",
    date: "2026-02-08",
    url: "https://www.lagazettefrance.fr/article/wallers-arenberg-berceau-du-projet-societe-a-mission-europeenne",
    image: "https://www.lagazettefrance.fr/media/2026/02/1-c-elias-berrahal-698c9812214a3.jpg",
    excerpt:
      "C'est dans le cadre du site minier de Wallers-Arenberg que l'Université Polytechnique Hauts-de-France a lancé le projet « Société à mission en Europe ».",
  },
  {
    title: "Lancement du projet FEDER « Société à mission en Europe »",
    source: "Réseau Alliances",
    date: "2026-02-06",
    url: "https://www.reseau-alliances.org/agenda-rse/3481-lancement-du-projet-feder-societe-a-mission-en-europe",
    image: null,
    excerpt:
      "L'événement de lancement a eu lieu le jeudi 6 février 2026, de 9h00 à 17h00, sur le site minier de Wallers-Arenberg.",
  },
  {
    title: "Lancement de la chaire Société à Mission Européenne",
    source: "Observatoire de l'Éthique Publique",
    date: "2026-02-06",
    url: "https://www.observatoireethiquepublique.com/agenda/20251/lancement-de-la-chaire-societe-a-mission-europeenne.html",
    image: null,
    excerpt:
      "L'Observatoire de l'Éthique Publique, co-porteur du projet Société à Mission Europe, annonce le lancement officiel de la chaire de recherche dédiée au modèle européen de la société à mission.",
  },
  {
    title:
      "Les Hauts-de-France, tête de pont d'une société à mission européenne",
    source: "Mediatico",
    date: "2026-02-05",
    url: "https://mediatico.fr/les-hauts-de-france-tete-de-pont-dune-societe-a-mission-europeenne/",
    image: "https://mediatico.fr/wp-content/uploads/2026/02/Actu-Societe-a-mission-UE.jpeg",
    excerpt:
      "L'Université Polytechnique Hauts-de-France lance une initiative de recherche ambitieuse pour développer un modèle européen d'entreprise à mission.",
  },
  {
    title: "Société à Mission Européenne — Projet FEDER 2026/2029",
    source: "ESSCA",
    date: "2025-12-01",
    url: "https://www.essca.eu/app/uploads/2025/12/societe-a_mission_europeenne_projet_feder_20262029.pdf",
    image: null,
    excerpt:
      "Document de présentation du projet FEDER « Société à Mission Européenne » couvrant la période 2026-2029, détaillant la structure, les objectifs et le financement du projet.",
  },
];

interface PresseNewsContentProps {
  newsletters: Newsletter[];
}

export default function PresseNewsContent({
  newsletters,
}: PresseNewsContentProps) {
  const { t, lang } = useI18n();

  const dateLocale = lang === "en" ? "en-GB" : "fr-FR";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              Communication
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Presse", "Press")} &{" "}
              <span className="text-rose-600">News</span>
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Articles de presse, newsletters et communications du projet Société à Mission Europe.",
                "Press articles, newsletters and communications about the Société à Mission Europe project."
              )}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("Nos newsletters", "Our Newsletters")}
          </h2>
          <div className="tricolor-separator mb-8" />

          {newsletters.length === 0 ? (
            <div className="text-center py-12 bg-beige-50 rounded-card border border-beige-200">
              <p className="text-navy-700">
                {t(
                  "Notre première newsletter est en cours de préparation.",
                  "Our first newsletter is being prepared."
                )}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletters.map((nl) => (
                <div
                  key={nl.id}
                  className="bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* Cover image */}
                  <div className="relative aspect-[3/4] bg-beige-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={nl.pdf_url.replace(".pdf", "-cover.png")}
                      alt={nl.title}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {nl.issue_number && (
                        <span className="inline-block px-3 py-1 bg-rose-600 text-white text-xs font-bold rounded-full mb-2">
                          N°{nl.issue_number}
                        </span>
                      )}
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {nl.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">
                        {new Date(nl.published_date).toLocaleDateString(
                          dateLocale,
                          { month: "long", year: "numeric" }
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {nl.description && (
                      <p className="text-navy-700 text-sm leading-relaxed mb-4">
                        {nl.description}
                      </p>
                    )}
                    <a
                      href={nl.pdf_url}
                      download
                      className="btn-primary text-sm w-full inline-flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {t("Télécharger", "Download")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Articles de presse */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("Revue de presse", "Press Review")}
          </h2>
          <div className="tricolor-separator mb-8" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressArticles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-card border border-beige-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {article.image ? (
                  <div className="aspect-[16/9] bg-beige-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-1 tricolor-separator" />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-2.5 py-0.5 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full">
                      {article.source}
                    </span>
                    <span className="text-xs text-navy-700">
                      {new Date(article.date).toLocaleDateString(dateLocale, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-rose-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  {article.url && (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-navy-700 hover:text-rose-600 text-xs font-medium transition-colors"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      {t("Lire l\u2019article", "Read the article")}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Presse */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800 rounded-card p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                {t("Contact Presse", "Press Contact")}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t(
                  "Vous êtes journaliste et souhaitez en savoir plus sur le projet, réaliser une interview ou obtenir des informations ? N'hésitez pas à nous contacter.",
                  "Are you a journalist and would like to learn more about the project, conduct an interview or obtain information? Don't hesitate to get in touch."
                )}
              </p>
            </div>
            <a
              href="mailto:contact@observatoire-ethique-publique.com?subject=Contact%20Presse%20-%20Soci%C3%A9t%C3%A9%20%C3%A0%20Mission%20Europe"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t("Nous écrire", "Contact Us")}
            </a>
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                {t("Suivez-nous sur LinkedIn", "Follow Us on LinkedIn")}
              </h2>
              <div className="tricolor-separator" />
            </div>
            <a
              href="https://www.linkedin.com/company/soci%C3%A9t%C3%A9-%C3%A0-mission-europe/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white rounded-lg text-sm font-bold hover:bg-[#004182] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t("Suivre notre page", "Follow Our Page")}
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "7431678339154669568",
              "7426946947648819201",
              "7425499014881607680",
            ].map((activityId) => (
              <div key={activityId} className="rounded-card border border-beige-200 shadow-sm overflow-hidden">
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`}
                  height="300"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`LinkedIn post ${activityId}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter subscription */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">
            {t("Restez informé", "Stay Informed")}
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-4" />
          <p className="section-subtitle mb-8">
            {t(
              "Inscrivez-vous pour recevoir les prochaines newsletters et actualités du projet.",
              "Subscribe to receive upcoming newsletters and project updates."
            )}
          </p>
          <NewsletterFormFull />
        </div>
      </section>
    </>
  );
}
