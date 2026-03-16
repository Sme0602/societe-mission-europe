import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Société à Mission Europe",
  description:
    "Politique de confidentialité et protection des données personnelles du site Société à Mission Europe - Conformité RGPD.",
  alternates: {
    canonical: "https://societe-mission-europe.surge.sh/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-navy-700">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD - Règlement UE 2016/679).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Responsable du traitement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              1. Responsable du traitement
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
              2. Données collectées et finalités
            </h2>
            <div className="tricolor-separator w-24 mb-4" />

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              Formulaire de contact
            </h3>
            <div className="bg-beige-50 rounded-card p-6 mb-4">
              <p className="text-navy-700 mb-2">
                <strong>Données collectées :</strong> nom, prénom, email, organisation, message
              </p>
              <p className="text-navy-700 mb-2">
                <strong>Finalité :</strong> répondre à vos demandes d&apos;information
              </p>
              <p className="text-navy-700">
                <strong>Base légale :</strong> intérêt légitime (Article 6.1.f du RGPD)
              </p>
            </div>

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              Newsletter
            </h3>
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="text-navy-700 mb-2">
                <strong>Données collectées :</strong> adresse email
              </p>
              <p className="text-navy-700 mb-2">
                <strong>Finalité :</strong> envoi d&apos;informations sur le projet
              </p>
              <p className="text-navy-700">
                <strong>Base légale :</strong> consentement (Article 6.1.a du RGPD)
              </p>
            </div>

            {/* Destinataires */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              3. Destinataires des données
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              Vos données personnelles sont destinées uniquement :
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-8 space-y-2">
              <li>À l&apos;équipe du projet Société à Mission Europe</li>
              <li>Aux partenaires académiques impliqués dans le projet</li>
              <li>À notre hébergeur technique (Surge.sh)</li>
            </ul>
            <p className="text-navy-700 mb-8">
              Nous ne vendons, ne louons ni ne partageons vos données avec des
              tiers à des fins commerciales.
            </p>

            {/* Durée de conservation */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              4. Durée de conservation
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-beige-50">
                    <th className="p-3 border border-beige-200 font-semibold">
                      Type de données
                    </th>
                    <th className="p-3 border border-beige-200 font-semibold">
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      Formulaire de contact
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      3 ans après le dernier échange
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      Newsletter
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      Jusqu&apos;à désinscription
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Vos droits */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              5. Vos droits
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Droit d'accès",
                  desc: "Obtenir une copie de vos données personnelles",
                },
                {
                  title: "Droit de rectification",
                  desc: "Corriger des données inexactes ou incomplètes",
                },
                {
                  title: "Droit à l'effacement",
                  desc: "Demander la suppression de vos données",
                },
                {
                  title: "Droit à la limitation",
                  desc: "Geler temporairement l'utilisation de vos données",
                },
                {
                  title: "Droit d'opposition",
                  desc: "Refuser un traitement basé sur l'intérêt légitime",
                },
                {
                  title: "Droit à la portabilité",
                  desc: "Récupérer vos données dans un format exploitable",
                },
                {
                  title: "Retrait du consentement",
                  desc: "Retirer votre consentement à tout moment",
                },
                {
                  title: "Réclamation CNIL",
                  desc: "Saisir l'autorité de contrôle française",
                },
              ].map((item) => (
                <div
                  key={item.title}
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
              6. Comment exercer vos droits
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              Pour exercer vos droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-4 space-y-2">
              <li>
                Par email : via notre{" "}
                <Link href="/contact" className="text-rose-600 hover:underline">
                  formulaire de contact
                </Link>
              </li>
              <li>
                Par courrier : UPHF - Campus Mont Houy, 59313 Valenciennes cedex 9
              </li>
            </ul>
            <p className="text-navy-700 mb-8">
              Nous répondrons à votre demande dans un délai maximum d&apos;un mois.
            </p>

            {/* Réclamation */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              7. Réclamation auprès de la CNIL
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              Si vous estimez que le traitement de vos données ne respecte pas
              la réglementation, vous pouvez déposer une réclamation auprès de
              la Commission Nationale de l&apos;Informatique et des Libertés :
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
              Ce site utilise uniquement des cookies techniques strictement
              nécessaires à son fonctionnement. Aucun cookie de suivi
              publicitaire ou de mesure d&apos;audience n&apos;est déposé sans votre
              consentement.
            </p>
            <p className="text-navy-700 mb-8">
              Vous pouvez à tout moment modifier vos préférences de cookies dans
              les paramètres de votre navigateur.
            </p>

            {/* Sécurité */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              9. Sécurité des données
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-8">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout
              accès non autorisé, perte ou destruction accidentelle. Le site est
              protégé par un certificat SSL (HTTPS).
            </p>

            {/* Modification */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              10. Modification de la politique
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700">
              Cette politique de confidentialité peut être mise à jour. En cas
              de modification substantielle, nous vous en informerons par email
              ou via le site.
            </p>
          </div>

          {/* Dernière mise à jour */}
          <div className="mt-12 pt-6 border-t border-beige-200">
            <p className="text-sm text-navy-700">
              Dernière mise à jour : Février 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
