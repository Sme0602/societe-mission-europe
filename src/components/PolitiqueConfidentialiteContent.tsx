"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function PolitiqueConfidentialiteContent() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t(
              "Politique de confidentialité et de traitement des données personnelles",
              "Privacy Policy and Personal Data Processing"
            )}
          </h1>
          <p className="text-navy-700">
            {t(
              "Collectées sur le site societe-mission-europe.com",
              "Collected on the website societe-mission-europe.com"
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

            {/* 1. Responsable du traitement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("1. Responsable du traitement", "1. Data Controller")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />

            <div className="bg-beige-50 rounded-card p-6 mb-4">
              <p className="text-navy-700 mb-4">
                {t(
                  "La collecte et le traitement des « Données Personnelles » (telles que définies par les textes visés ci-après) effectués à partir du site societe-mission-europe.com sont faits en application du Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et de la loi Informatique et Libertés.",
                  "The collection and processing of \"Personal Data\" (as defined by the texts referred to below) carried out from the website societe-mission-europe.com are done in accordance with the General Data Protection Regulation (GDPR — EU Regulation 2016/679) and the French Data Protection Act (Loi Informatique et Libertés)."
                )}
              </p>
              <p className="text-navy-700 mb-4">
                {t(
                  <>Le « responsable de traitement » des Données Personnelles des utilisateurs du site est l&apos;<strong>Université Polytechnique Hauts-de-France (UPHF)</strong>, dans le cadre du projet de recherche Société à Mission Europe (cf. <Link href="/mentions-legales" className="text-rose-600 hover:underline">mentions légales</Link>).</>,
                  <>The &quot;data controller&quot; of the users&apos; Personal Data is the <strong>Université Polytechnique Hauts-de-France (UPHF)</strong>, within the framework of the Société à Mission Europe research project (see <Link href="/mentions-legales" className="text-rose-600 hover:underline">legal notice</Link>).</>
                )}
              </p>
              <div className="text-navy-700 text-sm space-y-1">
                <p>Campus Mont Houy, 59313 Valenciennes cedex 9, France</p>
                <p>SIRET : 130 025 745 00014</p>
              </div>
            </div>

            <p className="text-navy-700 mb-2">
              {t(
                "Pour toute question ou exercice de vos droits « Informatique et Libertés » sur les traitements de vos données personnelles, vous pouvez nous contacter :",
                "For any questions or to exercise your \"Data Protection\" rights regarding the processing of your personal data, you can contact us:"
              )}
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-8 space-y-1">
              <li>
                {t(
                  <>Par email : <a href="mailto:dpo@uphf.fr" className="text-rose-600 hover:underline">dpo@uphf.fr</a></>,
                  <>By email: <a href="mailto:dpo@uphf.fr" className="text-rose-600 hover:underline">dpo@uphf.fr</a></>
                )}
              </li>
              <li>
                {t(
                  <>Via notre <Link href="/contact" className="text-rose-600 hover:underline">formulaire de contact</Link></>,
                  <>Via our <Link href="/contact" className="text-rose-600 hover:underline">contact form</Link></>
                )}
              </li>
              <li>
                {t(
                  "Par courrier : UPHF — DPO — Campus Mont Houy, 59313 Valenciennes cedex 9, France",
                  "By post: UPHF — DPO — Campus Mont Houy, 59313 Valenciennes cedex 9, France"
                )}
              </li>
            </ul>

            {/* 2. Données collectées et finalités */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("2. Données collectées et finalités", "2. Data Collected and Purposes")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              {t("Celles que vous communiquez", "Data you provide")}
            </h3>
            <p className="text-navy-700 mb-4">
              {t(
                "Nous collectons les Données Personnelles que vous nous transmettez volontairement via les formulaires du site :",
                "We collect Personal Data that you voluntarily provide through the website forms:"
              )}
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-beige-50 rounded-card p-5 border border-beige-200">
                <h4 className="font-semibold text-navy-800 mb-2">
                  {t("Formulaire de contact", "Contact Form")}
                </h4>
                <p className="text-navy-700 text-sm">
                  <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                  {t(
                    "nom, prénom, email, organisation, domaine d'expertise, message",
                    "last name, first name, email, organisation, area of expertise, message"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                  {t(
                    "traiter votre demande d'information, de contact ou d'intégration d'un groupe ou d'un projet",
                    "process your information, contact or group/project integration request"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                  {t("consentement", "consent")}
                </p>
              </div>

              <div className="bg-beige-50 rounded-card p-5 border border-beige-200">
                <h4 className="font-semibold text-navy-800 mb-2">
                  {t("Communication sur le projet", "Project Communications")}
                </h4>
                <p className="text-navy-700 text-sm">
                  <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                  {t("adresse email", "email address")}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                  {t(
                    "envoi d'informations sur les actualités et avancées du projet",
                    "sending information about project news and progress"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                  {t(
                    "intérêt légitime de communication sur le projet aux membres / consentement pour les personnes externes",
                    "legitimate interest for project communication to members / consent for external persons"
                  )}
                </p>
              </div>

              <div className="bg-beige-50 rounded-card p-5 border border-beige-200">
                <h4 className="font-semibold text-navy-800 mb-2">
                  {t("Inscription aux événements", "Event Registration")}
                </h4>
                <p className="text-navy-700 text-sm">
                  <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                  {t("nom, prénom, email, présence", "last name, first name, email, attendance")}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                  {t(
                    "gestion des inscriptions et organisation des événements dans le cadre du projet",
                    "managing registrations and organising events within the project"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                  {t("consentement", "consent")}
                </p>
              </div>

              <div className="bg-beige-50 rounded-card p-5 border border-beige-200">
                <h4 className="font-semibold text-navy-800 mb-2">
                  {t("Diffusion de l'identité des membres du projet", "Display of Project Members' Identity")}
                </h4>
                <p className="text-navy-700 text-sm">
                  <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                  {t("nom, prénom", "last name, first name")}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                  {t(
                    "diffuser l'identité des membres du projet sur le site (nom et affiliation uniquement)",
                    "display the identity of project members on the website (name and affiliation only)"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                  {t("consentement", "consent")}
                </p>
              </div>

              <div className="bg-beige-50 rounded-card p-5 border border-beige-200">
                <h4 className="font-semibold text-navy-800 mb-2">
                  {t("Gestion de la base des membres", "Member Database Management")}
                </h4>
                <p className="text-navy-700 text-sm">
                  <strong>{t("Données collectées", "Data collected")} :</strong>{" "}
                  {t(
                    "nom, prénom, email professionnel, groupe de travail, poste, structure, consentements",
                    "last name, first name, professional email, working group, position, organisation, consents"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Finalité", "Purpose")} :</strong>{" "}
                  {t(
                    "gestion de la base de membres et coordination des groupes de travail",
                    "member database management and working group coordination"
                  )}
                </p>
                <p className="text-navy-700 text-sm mt-1">
                  <strong>{t("Base légale", "Legal basis")} :</strong>{" "}
                  {t("consentement", "consent")}
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              {t("Données collectées automatiquement", "Data collected automatically")}
            </h3>
            <p className="text-navy-700 mb-4">
              {t(
                "Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement (routage, sécurité). Aucun cookie de suivi publicitaire ou de mesure d'audience n'est déposé. Vous pouvez à tout moment modifier vos préférences de cookies dans les paramètres de votre navigateur.",
                "This website only uses technical cookies strictly necessary for its operation (routing, security). No advertising tracking or audience measurement cookies are used. You can change your cookie preferences at any time in your browser settings."
              )}
            </p>
            <p className="text-navy-700 mb-8">
              {t(
                "Seules des données techniques minimales (adresse IP, type de navigateur) sont traitées par notre hébergeur Vercel dans le cadre du fonctionnement normal du site, conformément à leur propre politique de confidentialité.",
                "Only minimal technical data (IP address, browser type) is processed by our host Vercel as part of normal website operation, in accordance with their own privacy policy."
              )}
            </p>

            {/* 3. Destinataires des données */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("3. Destinataires des données", "3. Data Recipients")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />

            <p className="text-navy-700 mb-4">
              {t(
                "Vos données personnelles sont destinées uniquement :",
                "Your personal data is intended solely for:"
              )}
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-4 space-y-2">
              <li>{t("L'équipe du projet Société à Mission Europe (UPHF)", "The Société à Mission Europe project team (UPHF)")}</li>
              <li>{t("Les partenaires académiques impliqués dans le projet", "The academic partners involved in the project")}</li>
              <li>
                {t(
                  "Nos sous-traitants techniques :",
                  "Our technical subcontractors:"
                )}
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>{t("Vercel Inc. (hébergement du site)", "Vercel Inc. (website hosting)")}</li>
                  <li>{t("Supabase (gestion de la base de données)", "Supabase (database management)")}</li>
                </ul>
              </li>
            </ul>
            <p className="text-navy-700 mb-8 font-medium">
              {t(
                "Nous ne vendons, ne louons ni ne partageons vos données avec des tiers à des fins commerciales.",
                "We do not sell, rent or share your data with third parties for commercial purposes."
              )}
            </p>

            {/* 4. Transferts hors UE */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("4. Transferts hors de l'Union européenne", "4. Transfers Outside the European Union")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />
            <p className="text-navy-700 mb-4">
              {t(
                "Dans le cadre de nos sous-traitances techniques, les données pourront faire l'objet d'un transfert hors de l'Union européenne, notamment vers les États-Unis (Vercel Inc., Supabase). Ces transferts sont encadrés par le EU-US Data Privacy Framework et les garanties adéquates sont mises en place conformément au RGPD.",
                "As part of our technical subcontracting, data may be transferred outside the European Union, particularly to the United States (Vercel Inc., Supabase). These transfers are governed by the EU-US Data Privacy Framework and appropriate safeguards are in place in accordance with the GDPR."
              )}
            </p>
            <p className="text-navy-700 mb-8">
              {t(
                "Nous nous efforçons de privilégier autant que possible les outils et services souverains proposés par l'UPHF.",
                "We strive to prioritise sovereign tools and services offered by UPHF wherever possible."
              )}
            </p>

            {/* 5. Durée de conservation */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("5. Durée de conservation", "5. Retention Period")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-beige-50">
                    <th className="p-3 border border-beige-200 font-semibold text-navy-800">
                      {t("Type de données", "Data Type")}
                    </th>
                    <th className="p-3 border border-beige-200 font-semibold text-navy-800">
                      {t("Durée de conservation", "Retention Period")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Gestion de la base de données et demandes de contact", "Database management and contact requests")}
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Jusqu'à la fin du projet — 31/12/2029", "Until the end of the project — 31/12/2029")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Diffusion de l'identité des participants sur le site", "Display of participant identity on the website")}
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Jusqu'à la fin du projet — 31/12/2029", "Until the end of the project — 31/12/2029")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Inscription aux événements", "Event registration")}
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("3 mois après l'événement", "3 months after the event")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t("Communication sur le projet", "Project communications")}
                    </td>
                    <td className="p-3 border border-beige-200 text-navy-700">
                      {t(
                        "Jusqu'à la fin du projet (31/12/2029) ou jusqu'à désinscription",
                        "Until the end of the project (31/12/2029) or until unsubscription"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-navy-700 mb-4">
              {t(
                "Lorsque vos données sont collectées sur la base de votre consentement, nous les utilisons selon les modalités ci-dessus et sommes susceptibles de les utiliser jusqu'à ce que vous retiriez votre consentement, par voie écrite à l'adresse mentionnée ci-dessus.",
                "When your data is collected on the basis of your consent, we use it according to the terms above and may continue to use it until you withdraw your consent, in writing to the address mentioned above."
              )}
            </p>
            <p className="text-navy-700 mb-8">
              {t(
                "À partir du retrait de votre consentement, vos données sont conservées pendant la durée minimale nécessaire pour accomplir les mesures techniques de suppression. À l'issue de ces durées, vos Données Personnelles sont désactivées de nos bases actives.",
                "From the withdrawal of your consent, your data is retained for the minimum period necessary to carry out the technical deletion measures. At the end of these periods, your Personal Data is deactivated from our active databases."
              )}
            </p>

            {/* 6. Vos droits */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("6. Vos droits", "6. Your Rights")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />
            <p className="text-navy-700 mb-4">
              {t(
                "Conformément au RGPD, vous disposez des droits suivants :",
                "In accordance with the GDPR, you have the following rights:"
              )}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
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
                  desc: t("Refuser un traitement basé sur l'intérêt légitime", "Object to processing based on legitimate interest"),
                },
                {
                  title: t("Droit à la portabilité", "Right to data portability"),
                  desc: t("Récupérer vos données dans un format exploitable", "Retrieve your data in a usable format"),
                },
                {
                  title: t("Retrait du consentement", "Withdrawal of consent"),
                  desc: t("Retirer votre consentement à tout moment", "Withdraw your consent at any time"),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-rose-50 border border-rose-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-navy-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-navy-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-navy-800 mb-3">
              {t("Comment exercer vos droits", "How to exercise your rights")}
            </h3>
            <p className="text-navy-700 mb-2">
              {t(
                "Pour exercer vos droits, vous pouvez nous contacter :",
                "To exercise your rights, you can contact us:"
              )}
            </p>
            <ul className="list-disc pl-6 text-navy-700 mb-4 space-y-1">
              <li>
                {t(
                  <>Par email : <a href="mailto:dpo@uphf.fr" className="text-rose-600 hover:underline">dpo@uphf.fr</a></>,
                  <>By email: <a href="mailto:dpo@uphf.fr" className="text-rose-600 hover:underline">dpo@uphf.fr</a></>
                )}
              </li>
              <li>
                {t(
                  "Par courrier : UPHF — DPO — Campus Mont Houy, 59313 Valenciennes cedex 9",
                  "By post: UPHF — DPO — Campus Mont Houy, 59313 Valenciennes cedex 9"
                )}
              </li>
            </ul>
            <p className="text-navy-700 mb-8">
              {t(
                "Nous répondrons à votre demande dans un délai maximum d'un mois.",
                "We will respond to your request within a maximum of one month."
              )}
            </p>

            {/* 8. Réclamation CNIL */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("7. Réclamation auprès de la CNIL", "7. Complaint to the CNIL")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />
            <p className="text-navy-700 mb-4">
              {t(
                "Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez déposer une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés :",
                "If you believe that the processing of your data does not comply with regulations, you can file a complaint with the French Data Protection Authority (CNIL):"
              )}
            </p>
            <div className="bg-beige-50 rounded-card p-5 border border-beige-200 mb-8">
              <p className="text-navy-700 font-semibold">CNIL</p>
              <p className="text-navy-700 text-sm">3 Place de Fontenoy</p>
              <p className="text-navy-700 text-sm">TSA 80715</p>
              <p className="text-navy-700 text-sm">75334 Paris cedex 07</p>
              <p className="text-navy-700 text-sm mt-1">
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">www.cnil.fr</a>
              </p>
            </div>

            {/* 9. Sécurité des données */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("8. Sécurité des données", "8. Data Security")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />
            <p className="text-navy-700 mb-8">
              {t(
                "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte ou destruction accidentelle. Le site est protégé par un certificat SSL (HTTPS).",
                "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or accidental destruction. The site is protected by an SSL certificate (HTTPS)."
              )}
            </p>

            {/* 10. Modification */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              {t("9. Modification de la politique", "9. Policy Changes")}
            </h2>
            <div className="tricolor-separator w-24 mb-6" />
            <p className="text-navy-700">
              {t(
                "Cette politique de confidentialité peut être mise à jour. En cas de modification substantielle, nous vous en informerons par email ou via le site. Nous vous invitons à consulter régulièrement la dernière version en ligne.",
                "This privacy policy may be updated. In the event of a substantial change, we will inform you by email or via the website. We invite you to regularly consult the latest version online."
              )}
            </p>
          </div>

          {/* Dernière mise à jour */}
          <div className="mt-12 pt-6 border-t border-beige-200">
            <p className="text-sm text-navy-700">
              {t("Dernière mise à jour : Juin 2026", "Last updated: June 2026")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
