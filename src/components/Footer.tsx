"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t, lang } = useI18n();

  const navItems = [
    { href: "/", fr: "Accueil", en: "Home" },
    { href: "/projet", fr: "Le projet", en: "The Project" },
    { href: "/equipe", fr: "L'équipe", en: "The Team" },
    { href: "/partenaires", fr: "Partenaires", en: "Partners" },
    { href: "/groupes-de-travail", fr: "Groupes de Travail", en: "Working Groups" },
    { href: "/travaux", fr: "Nos travaux", en: "Our Work" },
    { href: "/evenements", fr: "Événements", en: "Events" },
    { href: "/presse-news", fr: "Presse & News", en: "Press & News" },
  ];

  return (
    <footer className="bg-navy-800 text-white">
      <div className="tricolor-separator" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Société à Mission Europe" width={48} height={48} className="w-10 h-10" />
              <div>
                <span className="font-bold text-base leading-tight block text-orange-500">Société à Mission</span>
                <span className="text-rose-500 font-bold text-sm">Europe</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t(
                "Bâtir le modèle européen de l'entreprise de demain, en fédérant les acteurs académiques, institutionnels et entrepreneuriaux.",
                "Building the European model of the company of tomorrow, by uniting academic, institutional and entrepreneurial stakeholders."
              )}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-jaune-400">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {lang === "en" ? item.en : item.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-jaune-400">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <span className="block text-gray-400 text-xs mb-0.5">Sarah Vandenbroucke</span>
                  <a href="mailto:sarah.vandenbroucke@uphf.fr" className="hover:text-white transition-colors break-all">sarah.vandenbroucke@uphf.fr</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div>
                  <span className="block text-gray-400 text-xs mb-0.5">Alix Vanmeervenne</span>
                  <a href="mailto:alix.vanmeervenne@uphf.fr" className="hover:text-white transition-colors break-all">alix.vanmeervenne@uphf.fr</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contribuer */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-jaune-400">
              {t("Contribuer", "Get involved")}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {t(
                "Vous souhaitez devenir partenaire ou rejoindre un groupe de travail ?",
                "Want to become a partner or join a working group?"
              )}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white text-sm font-semibold rounded-lg hover:bg-rose-700 transition-colors"
            >
              {t("Nous contacter", "Contact us")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>{t("© 2026 Société à Mission Europe. Tous droits réservés.", "© 2026 Société à Mission Europe. All rights reserved.")}</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              {t("Mentions légales", "Legal notice")}
            </Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              {t("Politique de confidentialité", "Privacy policy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
