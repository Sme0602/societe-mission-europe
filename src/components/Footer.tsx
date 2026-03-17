import Link from "next/link";
import Image from "next/image";
import { NewsletterFormInline } from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white">
      {/* Tricolor separator at top */}
      <div className="tricolor-separator" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Société à Mission Europe"
                width={48}
                height={48}
                className="w-10 h-10"
              />
              <div>
                <span className="font-bold text-base leading-tight block text-orange-500">
                  Société à Mission
                </span>
                <span className="text-rose-500 font-bold text-sm">
                  Europe
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bâtir le modèle européen de l&apos;entreprise de demain, en
              fédérant les acteurs académiques, institutionnels et
              entrepreneuriaux.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-jaune-400">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/projet"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Le Projet
                </Link>
              </li>
              <li>
                <Link
                  href="/partenaires"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Partenaires
                </Link>
              </li>
              <li>
                <Link
                  href="/actualites"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-jaune-400">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@observatoire-ethique-publique.com"
                  className="hover:text-white transition-colors break-all"
                >
                  contact@observatoire-ethique-publique.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+33768468601"
                  className="hover:text-white transition-colors"
                >
                  07 68 46 86 01
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-jaune-400">
              Restez informé
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Recevez les dernières actualités du projet.
            </p>
            <NewsletterFormInline />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Société à Mission Europe. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
