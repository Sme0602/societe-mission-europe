"use client";

import { NewsletterFormFull } from "@/components/NewsletterForm";
import { useI18n } from "@/lib/i18n/context";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-medium mb-6">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contacts
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Des questions ? Devenir partenaire ? Rejoindre un groupe de travail ? Contactez Sarah ou Alix, ingénieures du projet.",
                "Questions? Become a partner? Join a working group? Contact Sarah or Alix, project engineers."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Groupe Territoire */}
            <div className="bg-white rounded-card p-8 border border-beige-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 text-jaune-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-navy-800 mb-1">
                {t("Groupe Territoire", "Territory Group")}
              </h2>
              <p className="text-sm text-navy-600 mb-4">Hauts-de-France</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  AV
                </div>
                <div>
                  <p className="text-navy-800 font-medium text-sm">Alix Vanmeervenne</p>
                  <a
                    href="mailto:alix.vanmeervenne@uphf.fr"
                    className="text-rose-600 hover:underline text-sm break-all"
                  >
                    alix.vanmeervenne@uphf.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Groupe National & Europe */}
            <div className="bg-white rounded-card p-8 border border-beige-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-3 mb-4">
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <div className="w-12 h-12 bg-blue-50 text-navy-800 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold text-navy-800 mb-1">
                {t("Groupe National & Groupe Europe", "National Group & Europe Group")}
              </h2>
              <p className="text-sm text-navy-600 mb-4">{t("France & Union Européenne", "France & European Union")}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-jaune-400 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  SV
                </div>
                <div>
                  <p className="text-navy-800 font-medium text-sm">Sarah Vandenbroucke</p>
                  <a
                    href="mailto:sarah.vandenbroucke@uphf.fr"
                    className="text-rose-600 hover:underline text-sm break-all"
                  >
                    sarah.vandenbroucke@uphf.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Newsletter</h2>
          <div className="tricolor-separator w-24 mx-auto mb-4" />
          <p className="section-subtitle mb-8">
            {t(
              "Restez informé des avancées du projet Société à Mission Europe.",
              "Stay informed about the progress of the Société à Mission Europe project."
            )}
          </p>
          <NewsletterFormFull />
        </div>
      </section>
    </>
  );
}
