"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

export default function ContactPage() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    organisation: "",
    interests: [] as string[],
    groupeTravail: "",
    expertise: "",
    message: "",
    consentDonnees: false,
    optOutEmails: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const toggleInterest = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ nom: "", prenom: "", email: "", organisation: "", interests: [], groupeTravail: "", expertise: "", message: "", consentDonnees: false, optOutEmails: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-main text-navy-800 py-16 md:py-24 pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-medium mb-6">
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("Nous", "Get in")}{" "}
              <span className="text-rose-600">
                {t("contacter", "touch")}
              </span>
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              {t(
                "Vous souhaitez devenir partenaire, rejoindre un groupe de travail ou simplement rester informé ? Contactez-nous.",
                "Want to become a partner, join a working group or simply stay informed? Get in touch."
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

      {/* Nous écrire directement */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-navy-800 mb-2">
              {t("Nous écrire directement", "Write to us directly")}
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="text-navy-600 text-sm">
              {t(
                "Vous pouvez aussi nous envoyer un email directement.",
                "You can also send us an email directly."
              )}
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="mailto:sarah.vandenbroucke@uphf.fr,alix.vanmeervenne@uphf.fr?subject=Contact%20%E2%80%94%20Soci%C3%A9t%C3%A9%20%C3%A0%20Mission%20Europe"
              className="inline-flex items-center gap-3 px-6 py-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition-colors text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t("Nous écrire directement", "Write to us directly")}
            </a>
          </div>
        </div>
      </section>

      {/* Formulaire d'engagement */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-3">
              {t("Rejoindre le projet", "Join the project")}
            </h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="text-navy-600 max-w-xl mx-auto">
              {t(
                "Remplissez ce formulaire pour nous faire part de votre intérêt. Nous reviendrons vers vous rapidement.",
                "Fill in this form to express your interest. We will get back to you shortly."
              )}
            </p>
          </div>

          {status === "sent" ? (
            <div className="bg-white rounded-card border border-emerald-200 p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">
                {t("Message envoyé !", "Message sent!")}
              </h3>
              <p className="text-navy-600">
                {t(
                  "Merci pour votre intérêt. Nous reviendrons vers vous très prochainement.",
                  "Thank you for your interest. We will get back to you very soon."
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-card border border-beige-200 shadow-sm p-8 md:p-10 space-y-6">
              {/* Intérêts */}
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-3">
                  {t("Je souhaite...", "I would like to...")} *
                </label>
                <div className="space-y-3">
                  {[
                    { value: "partenaire", fr: "Devenir partenaire du projet", en: "Become a project partner" },
                    { value: "groupe-travail", fr: "Rejoindre un groupe de travail", en: "Join a working group" },
                    { value: "informe", fr: "Rester informé des actualités du projet", en: "Stay informed about project news" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        form.interests.includes(option.value)
                          ? "border-rose-300 bg-rose-50"
                          : "border-beige-200 hover:border-beige-300 hover:bg-beige-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.interests.includes(option.value)}
                        onChange={() => toggleInterest(option.value)}
                        className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                      />
                      <span className="text-sm text-navy-800 font-medium">{t(option.fr, option.en)}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Groupe de travail selector — only if "groupe-travail" is checked */}
              {form.interests.includes("groupe-travail") && (
                <div className="ml-7 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <label className="block text-sm font-bold text-navy-800 mb-2">
                    {t("Quel groupe de travail ?", "Which working group?")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "europe", label: "Europe", color: "bg-blue-100 text-blue-700 border-blue-200" },
                      { value: "national", label: "National", color: "bg-rose-100 text-rose-700 border-rose-200" },
                      { value: "territorial", label: "Territorial", color: "bg-amber-100 text-amber-700 border-amber-200" },
                    ].map((gt) => (
                      <button
                        type="button"
                        key={gt.value}
                        onClick={() => setForm((prev) => ({ ...prev, groupeTravail: prev.groupeTravail === gt.value ? "" : gt.value }))}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          form.groupeTravail === gt.value
                            ? gt.color + " ring-2 ring-offset-1 ring-current"
                            : "bg-white text-navy-600 border-beige-200 hover:bg-beige-50"
                        }`}
                      >
                        {gt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Nom / Prénom */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-navy-800 mb-1">
                    {t("Prénom", "First name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-beige-200 text-navy-800 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-800 mb-1">
                    {t("Nom", "Last name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-beige-200 text-navy-800 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-beige-200 text-navy-800 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                />
              </div>

              {/* Organisation */}
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-1">
                  {t("Organisation / Université", "Organisation / University")}
                </label>
                <input
                  type="text"
                  value={form.organisation}
                  onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-beige-200 text-navy-800 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                />
              </div>

              {/* Expertise */}
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-1">
                  {t("Domaine d'expertise", "Area of expertise")}
                </label>
                <input
                  type="text"
                  value={form.expertise}
                  onChange={(e) => setForm({ ...form, expertise: e.target.value })}
                  placeholder={t("ex. Droit des sociétés, RSE, gouvernance...", "e.g. Corporate law, CSR, governance...")}
                  className="w-full px-4 py-2.5 rounded-lg border border-beige-200 text-navy-800 placeholder:text-navy-400 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-navy-800 mb-1">
                  {t("Message (facultatif)", "Message (optional)")}
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t(
                    "Décrivez comment vous souhaitez contribuer au projet...",
                    "Describe how you would like to contribute to the project..."
                  )}
                  className="w-full px-4 py-2.5 rounded-lg border border-beige-200 text-navy-800 placeholder:text-navy-400 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition-colors resize-none"
                />
              </div>

              {/* Consentements */}
              <div className="space-y-3 border-t border-beige-200 pt-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.consentDonnees}
                    onChange={(e) => setForm({ ...form, consentDonnees: e.target.checked })}
                    className="w-4 h-4 mt-1 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                  />
                  <span className="text-sm text-navy-700">
                    {t(
                      "J'accepte que mes informations nominatives figurent publiquement sur le site Société à Mission Europe *",
                      "I agree that my personal information may be publicly displayed on the Société à Mission Europe website *"
                    )}
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.optOutEmails}
                    onChange={(e) => setForm({ ...form, optOutEmails: e.target.checked })}
                    className="w-4 h-4 mt-1 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
                  />
                  <span className="text-sm text-navy-700">
                    {t(
                      "Je ne souhaite pas recevoir d'information sur les actualités du projet Société à Mission Europe",
                      "I do not wish to receive information about the Société à Mission Europe project news"
                    )}
                  </span>
                </label>
              </div>

              {/* Mention RGPD */}
              <div className="bg-beige-50 rounded-lg p-4 border border-beige-200 text-xs text-navy-600 leading-relaxed">
                {t(
                  <>Conformément à la Réglementation sur la protection des données, les informations vous concernant renseignées dans le présent formulaire sont destinées à l&apos;Université Polytechnique Hauts-de-France, sur la base de votre consentement, afin de traiter votre demande d&apos;information, de contact ou d&apos;intégration d&apos;un groupe ou d&apos;un projet Société à Mission Europe. Vos données pourront être communiquées aux ingénieurs d&apos;étude et de recherche rattachés au projet, ainsi qu&apos;à nos sous-traitants. Les données sont conservées jusqu&apos;à la fin du projet Société à Mission Europe au 31/12/2029. Vous pouvez exercer vos droits d&apos;accès, de rectification, d&apos;effacement ou de limitation du traitement de vos données par email à <a href="mailto:dpo@uphf.fr" className="text-rose-600 hover:underline">dpo@uphf.fr</a>. Vous pouvez également exercer votre droit à la portabilité de vos données et retirer votre consentement à tout moment. Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">CNIL</a>.</>,
                  <>In accordance with data protection regulations, the information you provide in this form is intended for the Université Polytechnique Hauts-de-France, on the basis of your consent, to process your request for information, contact or integration into a group or the Société à Mission Europe project. Your data may be shared with research engineers attached to the project, as well as our subcontractors. Data is retained until the end of the Société à Mission Europe project on 31/12/2029. You can exercise your rights of access, rectification, erasure or restriction of processing by email at <a href="mailto:dpo@uphf.fr" className="text-rose-600 hover:underline">dpo@uphf.fr</a>. You can also exercise your right to data portability and withdraw your consent at any time. If you believe your rights are not being respected, you can file a complaint with the <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline">CNIL</a>.</>
                )}
              </div>

              {/* Submit */}
              <div>
                {status === "error" && (
                  <p className="text-red-600 text-sm mb-3">
                    {t(
                      "Une erreur est survenue. Veuillez réessayer.",
                      "An error occurred. Please try again."
                    )}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending" || form.interests.length === 0}
                  className="w-full sm:w-auto px-8 py-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? t("Envoi en cours...", "Sending...")
                    : t("Envoyer", "Send")}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
