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
      setForm({ nom: "", prenom: "", email: "", organisation: "", interests: [], groupeTravail: "", expertise: "", message: "" });
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
              {t("Contribuer au", "Get involved in the")}{" "}
              <span className="text-rose-600">
                {t("projet", "project")}
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

      {/* Contact cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-800 mb-2">
            {t("Contacts directs", "Direct contacts")}
          </h2>
          <div className="tricolor-separator mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Groupe Territoire */}
            <div className="bg-white rounded-card p-8 border border-beige-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 text-jaune-400 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-1">
                {t("Groupe Territoire", "Territory Group")}
              </h3>
              <p className="text-sm text-navy-600 mb-4">Hauts-de-France</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  AV
                </div>
                <div>
                  <p className="text-navy-800 font-medium text-sm">Alix Vanmeervenne</p>
                  <p className="text-navy-600 text-xs">{t("Ingénieure d'études, UPHF", "Research Engineer, UPHF")}</p>
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
              <h3 className="text-xl font-bold text-navy-800 mb-1">
                {t("Groupe National & Groupe Europe", "National Group & Europe Group")}
              </h3>
              <p className="text-sm text-navy-600 mb-4">{t("France & Union Européenne", "France & European Union")}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-jaune-400 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  SV
                </div>
                <div>
                  <p className="text-navy-800 font-medium text-sm">Sarah Vandenbroucke</p>
                  <p className="text-navy-600 text-xs">{t("Ingénieure de recherche, UPHF", "Research Engineer, UPHF")}</p>
                </div>
              </div>
            </div>
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

              {/* Submit */}
              <div>
                {status === "error" && (
                  <p className="text-red-600 text-sm mb-3">
                    {t(
                      "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.",
                      "An error occurred. Please try again or contact us directly by email."
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
