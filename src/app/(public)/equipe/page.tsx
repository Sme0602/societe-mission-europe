import type { Metadata } from "next";
import Link from "next/link";
import { teamMembers } from "@/data/team-members";

export const metadata: Metadata = {
  title: "L'Équipe | Société à Mission Europe",
  description:
    "Découvrez les chercheurs et ingénieurs qui portent le projet Société à Mission Europe : Matthieu Caron, Stéphane Vernac, Sarah Vandenbroucke et toute l'équipe.",
  alternates: {
    canonical: "https://societe-mission-europe.surge.sh/equipe",
  },
};

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-main text-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600/20 rounded-full text-rose-600 text-sm font-bold mb-6">
              L&apos;Équipe
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Les chercheurs qui portent{" "}
              <span className="text-rose-600">le projet</span>
            </h1>
            <div className="tricolor-separator w-32 mb-6" />
            <p className="text-xl text-navy-700 leading-relaxed">
              Une équipe pluridisciplinaire de chercheurs, ingénieurs et doctorants
              rattachés à l&apos;UPHF, au LARSH et à l&apos;Observatoire de l&apos;Éthique
              Publique, engagés dans l&apos;étude et la promotion de la société à
              mission en France et en Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Équipe complète */}
      <section className="py-16 md:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Notre équipe</h2>
            <div className="tricolor-separator w-24 mx-auto mb-4" />
            <p className="section-subtitle">
              {teamMembers.length} membres dédiés au projet Société à Mission Europe.
            </p>
          </div>

          <div className="space-y-8">
            {teamMembers.map((member, index) => (
              <Link
                key={member.name}
                href={`/equipe/${member.slug}`}
                className={`block bg-white rounded-card overflow-hidden border border-beige-200 shadow-sm hover:shadow-lg hover:border-rose-300 transition-all duration-200 group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start gap-5 mb-5">
                    <div
                      className={`w-16 h-16 rounded-full ${member.color} text-white flex items-center justify-center font-bold text-xl shrink-0`}
                    >
                      {member.initials}
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-rose-600/10 text-rose-600 text-xs font-bold rounded-full mb-2">
                        {member.role}
                      </div>
                      <h3 className="text-2xl font-bold text-navy-800 leading-tight group-hover:text-rose-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium text-navy-800 mt-1">
                        {member.title}
                      </p>
                      <p className="text-sm text-rose-600 font-medium">
                        {member.affiliation}
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="tricolor-separator w-16 mb-4" />
                  <p className="text-navy-700 leading-relaxed text-base line-clamp-3">
                    {member.bio[0]}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-rose-600 group-hover:underline">
                    Voir le profil complet
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez notre équipe
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-6" />
          <p className="text-xl text-rose-50 mb-10">
            Vous souhaitez contribuer au projet Société à Mission Europe ?
            Chercheurs, doctorants et professionnels sont les bienvenus.
          </p>
          <a
            href="mailto:contact@observatoire-ethique-publique.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-beige-50 transition-colors text-lg"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </>
  );
}
