"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function PolitiqueConfidentialiteContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Politique de confidentialité", "Privacy Policy")}
          </h1>
          <p className="text-navy-700">
            {t(
              "Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679).",
              "In accordance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679)."
            )}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Responsable du traitement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("1. Responsable du traitement", "1. Data Controller")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="mb-2">
                <strong>Université Polytechnique Hauts-de-France (UPHF)</strong>
              </p>
              <p className="text-navy-700 mb-1">
                Campus Mont Houy
                <br />
                59313 Valenciennes cedex 9
                <br />
                France
              </p>
              <p className="text-navy-700">
                SIRET : 130 025 745 00014
              </p>
            </div>

            {/* Données collectées */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("2. Données collectées et finalités", "2. Data Collected and Purposes")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              {t("Formulaire de contact", "Contact Form")}
            </h3>
            <div className="bg-beige-50 rounded-card p-6 mb-4">
              <p className="text-navy-700 mb-2">
                <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                {t(
                  "nom, prénom, email, organisation, message",
                  "last name, first name, email, organisation, message"
                )}
              </p>
              <p className="text-navy-700 mb-2">
                <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                {t(
                  "répondre à vos demandes d'information",
                  "responding to your information requests"
                )}
              </p>
              <p className="text-navy-700">
                <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                {t(
                  "intérêt légitime (Article 6.1.f du RGPD)",
                  "legitimate interest (Article 6.1.f of the GDPR)"
                )}
              </p>
            </div>

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              Newsletter
            </h3>
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="text-navy-700 mb-2">
                <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                {t("adresse email", "email address")}
              </p>
              <p className="text-navy-700 mb-2">
                <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                {t(
                  "envoi d'informations sur le projet",
                  "sending information about the project"
                )}
              </p>
              <p className="text-navy-700">
                <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                {t(
                  "consentement (Article 6.1.a du RGPD)",
                  "consent (Article 6.1.a of the GDPR)"
                )}
              </p>
            </div>

            {/* Destinataires */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("3. Destinataires des données", "3. Data Recipients")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                "Vos données personnelles sont destinées uniquement :",
                "Your personal data is intended solely for:"
              )}
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-8 space-y-2">
              <li>{t("À l'équipe du projet Société à Mission Europe", "The Société à Mission Europe project team")}</li>
              <li>{t("Aux partenaires académiques impliqués dans le projet", "Academic partners involved in the project")}</li>
              <li>{t("À notre hébergeur technique (Surge.sh)", "Our technical host (Surge.sh)")}</li>
            </ul>
            <p className="text-navy-700 mb-8">
              {t(
                "Nous ne vendons, ne louons ni ne partageons vos données avec des tiers à des fins commerciales.",
                "We do not sell, rent or share your data with third parties for commercial purposes."
              )}
            </p>

            {/* Durée de conservation */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("4. Durée de conservation", "4. Retention Period")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-beige-50">
                    <th className="p-3 border border-beige-200 font-semibold">
                      {t("Type de données", "Data type")}
                    </th>
                    <th className="p-3 border border-beige-200 font-semibold">
                      {t("Durée", "Duration")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Formulaire de contact", "Contact form")}
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("3 ans après le dernier échange", "3 years after the last exchange")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      Newsletter
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Jusqu'à désinscription", "Until unsubscription")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Vos droits */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("5. Vos droits", "5. Your Rights")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                "Conformément au RGPD, vous disposez des droits suivants :",
                "In accordance with the GDPR, you have the following rights:"
              )}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: t("Droit d'accès", "Right of access"),
                  desc: t("Obtenir une copie de vos données personnelles", "Obtain a copy of your personal data"),
                },
                {
                  title: t("Droit de rectification", "Right to rectification"),
                  desc: t("Corriger des données inexactes ou incomplètes", "Correct inaccurate or incomplete data"),
                },
                {
                  title: t("Droit à l'effacement", "Right to erasure"),
                  desc: t("Demander la suppression de vos données", "Request the deletion of your data"),
                },
                {
                  title: t("Droit à la limitation", "Right to restriction"),
                  desc: t("Geler temporairement l'utilisation de vos données", "Temporarily freeze the use of your data"),
                },
                {
                  title: t("Droit d'opposition", "Right to object"),
                  desc: t("Refuser un traitement basé sur l'intérêt légitime", "Refuse processing based on legitimate interest"),
                },
                {
                  title: t("Droit à la portabilité", "Right to data portability"),
                  desc: t("Récupérer vos données dans un format exploitable", "Retrieve your data in a usable format"),
                },
                {
                  title: t("Retrait du consentement", "Withdrawal of consent"),
                  desc: t("Retirer votre consentement à tout moment", "Withdraw your consent at any time"),
                },
                {
                  title: t("Réclamation CNIL", "CNIL Complaint"),
                  desc: t("Saisir l'autorité de contrôle française", "File with the French supervisory authority"),
                },
              ].map((item) => (
                <div
                  key={typeof item.title === "string" ? item.title : undefined}
                  className="bg-rose-50 border border-rose-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-navy-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-navy-700">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Exercer vos droits */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("6. Comment exercer vos droits", "6. How to Exercise Your Rights")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                "Pour exercer vos droits, vous pouvez nous contacter :",
                "To exercise your rights, you can contact us:"
              )}
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-4 space-y-2">
              <li>
                {t(
                  <>
                    Par email : via notre{" "}
                    <Link href="/contact" className="text-rose-600 hover:underline">
                      formulaire de contact
                    </Link>
                  </>,
                  <>
                    By email: via our{" "}
                    <Link href="/contact" className="text-rose-600 hover:underline">
                      contact form
                    </Link>
                  </>
                )}
              </li>
              <li>
                {t(
                  "Par courrier : UPHF - Campus Mont Houy, 59313 Valenciennes cedex 9",
                  "By post: UPHF - Campus Mont Houy, 59313 Valenciennes cedex 9"
                )}
              </li>
            </ul>
            <p className="text-navy-700 mb-8">
              {t(
                "Nous répondrons à votre demande dans un délai maximum d'un mois.",
                "We will respond to your request within a maximum of one month."
              )}
            </p>

            {/* Réclamation */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("7. Réclamation auprès de la CNIL", "7. Complaint to the CNIL")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                "Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez déposer une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés :",
                "If you believe that the processing of your data does not comply with regulations, you can file a complaint with the Commission Nationale de l'Informatique et des Libertés:"
              )}
            </p>
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="font-semibold text-navy-800 mb-2">CNIL</p>
              <p className="text-navy-700">
                3 Place de Fontenoy
                <br />
                TSA 80715
                <br />
                75334 Paris cedex 07
                <br />
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-600 hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>

            {/* Cookies */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              8. Cookies
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              {t(
                "Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie de suivi publicitaire ou de mesure d'audience n'est déposé sans votre consentement.",
                "This site uses only strictly necessary technical cookies for its operation. No advertising tracking or audience measurement cookies are placed without your consent."
              )}
            </p>
            <p className="text-navy-700 mb-8">
              {t(
                "Vous pouvez à tout moment modifier vos préférences de cookies dans les paramètres de votre navigateur.",
                "You can change your cookie preferences at any time in your browser settings."
              )}
            </p>

            {/* Sécurité */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("9. Sécurité des données", "9. Data Security")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-8">
              {t(
                "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou destruction accidentelle. Le site est protégé par un certificat SSL (HTTPS).",
                "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or accidental destruction. The site is protected by an SSL certificate (HTTPS)."
              )}
            </p>

            {/* Modification */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("10. Modification de la politique", "10. Policy Changes")}
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700">
              {t(
                "Cette politique de confidentialité peut être mise à jour. En cas de modification substantielle, nous vous en informerons par email ou via le site.",
                "This privacy policy may be updated. In the event of a substantial change, we will inform you by email or via the site."
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
