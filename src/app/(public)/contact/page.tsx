"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    organisation: "",
    sujet: "",
    groupe: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const supabase = createClient();
    const { error: dbError } = await supabase.from("contact_messages").insert({
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone || null,
      organisation: formData.organisation || null,
      sujet: formData.sujet,
      groupe: formData.groupe || null,
      message: formData.message,
    });

    setSending(false);

    if (dbError) {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact
              </h1>
              <div className="tricolor-separator w-32 mb-8" />
            </div>
          </div>
        </section>
        <section className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy-800 mb-4">
              Message envoyé !
            </h2>
            <p className="text-navy-700 text-lg mb-8">
              Merci pour votre message. Notre équipe vous répondra dans les
              meilleurs délais.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  nom: "",
                  prenom: "",
                  email: "",
                  telephone: "",
                  organisation: "",
                  sujet: "",
                  groupe: "",
                  message: "",
                  consent: false,
                });
              }}
              className="btn-primary"
            >
              Envoyer un autre message
            </button>
          </div>
        </section>
      </>
    );
  }

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
              Contactez{" "}
              <span className="text-rose-600">Société à Mission Europe</span>
            </h1>
            <div className="tricolor-separator w-32 mb-8" />
            <p className="text-xl text-navy-700 leading-relaxed">
              Une question, une proposition de partenariat, ou envie de
              rejoindre l&apos;un de nos groupes de travail ? Contactez-nous.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 mb-2">
                Envoyez-nous un message
              </h2>
              <div className="tricolor-separator w-24 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom / Prénom */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Nom *
                    </label>
                    <input
                      id="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData({ ...formData, nom: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Prénom *
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      required
                      value={formData.prenom}
                      onChange={(e) =>
                        setFormData({ ...formData, prenom: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                {/* Email / Téléphone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Téléphone
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) =>
                        setFormData({ ...formData, telephone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                {/* Organisation */}
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    type="text"
                    value={formData.organisation}
                    onChange={(e) =>
                      setFormData({ ...formData, organisation: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors"
                    placeholder="Votre organisation"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label
                    htmlFor="sujet"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Sujet *
                  </label>
                  <select
                    id="sujet"
                    required
                    value={formData.sujet}
                    onChange={(e) =>
                      setFormData({ ...formData, sujet: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="partenariat">
                      Proposition de partenariat
                    </option>
                    <option value="groupe">
                      Rejoindre un groupe de travail
                    </option>
                    <option value="evenement">
                      Inscription à un événement
                    </option>
                    <option value="presse">Demande presse / média</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Groupe de travail */}
                <div>
                  <label
                    htmlFor="groupe"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Groupe de travail d&apos;intérêt
                  </label>
                  <select
                    id="groupe"
                    value={formData.groupe}
                    onChange={(e) =>
                      setFormData({ ...formData, groupe: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors bg-white"
                  >
                    <option value="">Sélectionnez un groupe</option>
                    <option value="territorial">
                      Territorial – Hauts-de-France
                    </option>
                    <option value="national">National – France</option>
                    <option value="europeen">Européen – UE</option>
                    <option value="tous">Tous les groupes</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none transition-colors resize-y"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Consentement */}
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-rose-600 border-beige-200 rounded focus:ring-rose-600"
                  />
                  <label htmlFor="consent" className="text-sm text-navy-700">
                    J&apos;accepte que mes données soient traitées dans le cadre de
                    ma demande, conformément à la politique de confidentialité. *
                  </label>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50"
                >
                  {sending ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Coordonnées */}
              <div className="bg-beige-50 rounded-card p-8">
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  Coordonnées
                </h3>
                <div className="tricolor-separator w-16 mb-6" />
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-navy-700">Email</p>
                      <a
                        href="mailto:contact@observatoire-ethique-publique.com"
                        className="text-sm text-rose-600 hover:underline break-all"
                      >
                        contact@observatoire-ethique-publique.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-navy-700">
                        Téléphone
                      </p>
                      <a
                        href="tel:+33768468601"
                        className="text-sm text-rose-600 hover:underline"
                      >
                        07 68 46 86 01
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Événement */}
              <div className="bg-navy-800 rounded-card p-8 text-white">
                <h3 className="text-lg font-bold mb-2">Prochain événement</h3>
                <div className="tricolor-separator w-16 mb-4" />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">6 février 2026</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">9h00 – 17h00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-rose-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">Wallers Arenberg</span>
                  </div>
                </div>
                <p className="text-rose-50 text-sm mt-4">
                  Colloque de lancement du projet Société à Mission Europe.
                </p>
              </div>

              {/* FAQ rapide */}
              <div className="bg-rose-50 rounded-card p-8 border border-beige-200">
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  Questions fréquentes
                </h3>
                <div className="tricolor-separator w-16 mb-4" />
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-navy-800">
                      Qui peut participer ?
                    </p>
                    <p className="text-sm text-navy-700 mt-1">
                      Chercheurs, entreprises, institutions publiques et
                      associations sont les bienvenus.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">
                      L&apos;événement est-il gratuit ?
                    </p>
                    <p className="text-sm text-navy-700 mt-1">
                      Oui, le colloque est ouvert et gratuit sur inscription.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
