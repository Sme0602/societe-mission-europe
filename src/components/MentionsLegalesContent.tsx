"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function MentionsLegalesContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-12 md:py-16 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Mentions légales", "Legal Notice")}
          </h1>
          <p className="text-navy-700">
            {t(
              <>Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique (LCEN).</>,
              <>In accordance with French Law No. 2004-575 of 21 June 2004 on confidence in the digital economy (LCEN).</>
            )}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-px">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Éditeur */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("1. Éditeur du site", "1. Site Publisher")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="mb-2">
                <strong>Sarah Vandenbroucke</strong> & <strong>Alix Vanmeervenne</strong>
              </p>
              <p className="text-navy-700 mb-1">
                {t("Contact", "Contact")} : <Link href="/contact" className="text-rose-600 hover:underline">{t("Formulaire de contact", "Contact form")}</Link>
              </p>
              <p className="text-navy-700">
                {t(
                  "Dans le cadre du projet de recherche Société à Mission Europe, porté par l'UPHF et l'Observatoire de l'Éthique Publique.",
                  "As part of the Société à Mission Europe research project, led by UPHF and the Observatoire de l'Éthique Publique."
                )}
              </p>
            </div>

            {/* Directeur de publication */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("2. Directeur de la publication", "2. Publication Director")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-8">
              {t(
                <>
                  <strong>Sarah Vandenbroucke</strong> & <strong>Alix Vanmeervenne</strong>, co-directrices de la publication.
                </>,
                <>
                  <strong>Sarah Vandenbroucke</strong> & <strong>Alix Vanmeervenne</strong>, co-publication directors.
                </>
              )}
            </p>

            {/* Hébergement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("3. Hébergement", "3. Hosting")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="mb-2">
                <strong>Vercel Inc.</strong>
              </p>
              <p className="text-navy-700">
                440 N Barranca Ave #4133
                <br />
                Covina, CA 91723
                <br />
                {t("États-Unis", "United States")}
                <br />
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">vercel.com</a>
              </p>
            </div>

            {/* Financement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("4. Financement du projet", "4. Project Funding")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="bg-blue-50 border border-blue-200 rounded-card p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-12 bg-blue-800 rounded flex items-center justify-center">
                    <span className="text-yellow-400 text-2xl">★</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-navy-800 mb-2">
                    {t("Cofinancé par l'Union européenne", "Co-funded by the European Union")}
                  </p>
                  <p className="text-navy-700 text-sm">
                    {t(
                      "Ce projet est cofinancé par le Fonds Européen de Développement Régional (FEDER) et la Région Hauts-de-France dans le cadre du programme opérationnel 2021-2027.",
                      "This project is co-funded by the European Regional Development Fund (ERDF) and the Hauts-de-France Region as part of the 2021-2027 operational programme."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("5. Propriété intellectuelle", "5. Intellectual Property")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                "L'ensemble du contenu de ce site (textes, images, logos, documents) est protégé par le droit d'auteur et appartient à l'UPHF et ses partenaires, sauf mention contraire.",
                "All content on this site (texts, images, logos, documents) is protected by copyright and belongs to UPHF and its partners, unless otherwise stated."
              )}
            </p>
            <p className="text-navy-700 mb-8">
              {t(
                "Toute reproduction, représentation ou diffusion, intégrale ou partielle, du contenu de ce site est interdite sans autorisation préalable écrite de l'éditeur.",
                "Any reproduction, representation or distribution, in whole or in part, of the content of this site is prohibited without prior written authorisation from the publisher."
              )}
            </p>

            {/* Crédits */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("6. Crédits", "6. Credits")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-8">
              {t(
                <>Conception et développement : Sarah Vandenbroucke & Alix Vanmeervenne<br />Photographies : droits réservés</>,
                <>Design and development: Sarah Vandenbroucke & Alix Vanmeervenne<br />Photographs: all rights reserved</>
              )}
            </p>

            {/* Données personnelles */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("7. Données personnelles", "7. Personal Data")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                <>
                  Pour toute information concernant le traitement de vos données personnelles, veuillez consulter notre{" "}
                  <Link href="/politique-de-confidentialite" className="text-rose-600 hover:underline">
                    politique de confidentialité
                  </Link>
                  .
                </>,
                <>
                  For any information regarding the processing of your personal data, please consult our{" "}
                  <Link href="/politique-de-confidentialite" className="text-rose-600 hover:underline">
                    privacy policy
                  </Link>
                  .
                </>
              )}
            </p>
            <p className="text-navy-700 mb-8">
              {t(
                "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
                "In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify and delete your data."
              )}
            </p>

            {/* Contact */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              8. Contact
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700">
              {t(
                <>
                  Pour toute question relative à ce site, vous pouvez nous contacter via notre{" "}
                  <Link href="/contact" className="text-rose-600 hover:underline">
                    formulaire de contact
                  </Link>
                  .
                </>,
                <>
                  For any questions about this site, you can contact us via our{" "}
                  <Link href="/contact" className="text-rose-600 hover:underline">
                    contact form
                  </Link>
                  .
                </>
              )}
            </p>
          </div>

          {/* Dernière mise à jour */}
          <div className="mt-12 pt-6 border-t border-beige-200">
            <p className="text-sm text-navy-700">
              {t("Dernière mise à jour : Février 2026", "Last updated: February 2026")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
