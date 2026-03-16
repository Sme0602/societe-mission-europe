import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Société à Mission Europe",
  description:
    "Mentions légales du site Société à Mission Europe - Projet de recherche FEDER porté par l'UPHF et l'Observatoire de l'Éthique Publique.",
  alternates: { canonical: "https://societe-mission-europe.surge.sh/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mentions légales
          </h1>
          <p className="text-navy-700">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance
            dans l&apos;économie numérique (LCEN).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Éditeur */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              1. Éditeur du site
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
              <p className="text-navy-700 mb-1">
                Téléphone : 03 27 51 12 34
              </p>
              <p className="text-navy-700 mb-1">
                SIRET : 130 025 745 00014
              </p>
              <p className="text-navy-700">
                Forme juridique : Établissement Public à Caractère Scientifique,
                Culturel et Professionnel (EPSCP)
              </p>
            </div>

            <p className="text-navy-700 mb-8">
              En partenariat avec l&apos;<strong>Observatoire de l&apos;Éthique Publique</strong>{" "}
              (Association loi 1901).
            </p>

            {/* Directeur de publication */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              2. Directeur de la publication
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-8">
              <strong>Abdelhakim ARTIBA</strong>, Président de l&apos;Université
              Polytechnique Hauts-de-France.
            </p>

            {/* Hébergement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              3. Hébergement
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="bg-beige-50 rounded-card p-6 mb-8">
              <p className="mb-2">
                <strong>Surge.sh</strong>
              </p>
              <p className="text-navy-700">
                Sintaxy, Inc.
                <br />
                340 S Lemon Ave #1085
                <br />
                Walnut, CA 91789
                <br />
                États-Unis
              </p>
            </div>

            {/* Financement */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              4. Financement du projet
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <div className="bg-blue-50 border border-blue-200 rounded-card p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {/* Drapeau UE simplifié */}
                  <div className="w-16 h-12 bg-blue-800 rounded flex items-center justify-center">
                    <span className="text-yellow-400 text-2xl">★</span>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-navy-800 mb-2">
                    Cofinancé par l&apos;Union européenne
                  </p>
                  <p className="text-navy-700 text-sm">
                    Ce projet est cofinancé par le Fonds Européen de Développement
                    Régional (FEDER) et la Région Hauts-de-France dans le cadre du
                    programme opérationnel 2021-2027.
                  </p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              5. Propriété intellectuelle
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              L&apos;ensemble du contenu de ce site (textes, images, logos, documents)
              est protégé par le droit d&apos;auteur et appartient à l&apos;UPHF et ses
              partenaires, sauf mention contraire.
            </p>
            <p className="text-navy-700 mb-8">
              Toute reproduction, représentation ou diffusion, intégrale ou
              partielle, du contenu de ce site est interdite sans autorisation
              préalable écrite de l&apos;éditeur.
            </p>

            {/* Crédits */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              6. Crédits
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-8">
              Conception et développement : UPHF
              <br />
              Photographies : droits réservés
            </p>

            {/* Données personnelles */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              7. Données personnelles
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700 mb-4">
              Pour toute information concernant le traitement de vos données
              personnelles, veuillez consulter notre{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-rose-600 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
            <p className="text-navy-700 mb-8">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données.
            </p>

            {/* Contact */}
            <h2 className="text-2xl font-bold text-navy-800 mb-4">
              8. Contact
            </h2>
            <div className="tricolor-separator w-24 mb-4" />
            <p className="text-navy-700">
              Pour toute question relative à ce site, vous pouvez nous contacter
              via notre{" "}
              <Link href="/contact" className="text-rose-600 hover:underline">
                formulaire de contact
              </Link>
              .
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
