import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 to-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Page <span className="text-orange-600">introuvable</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-8xl font-extrabold text-orange-600 mb-6">404</div>
          <h2 className="text-2xl font-bold text-navy-800 mb-4">
            Cette page n&apos;existe pas
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Pas de panique ! Voici quelques liens pour vous aider à retrouver
            votre chemin sur le site Société à Mission Europe.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Accueil
            </Link>
            <Link
              href="/projet"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
            >
              Le Projet
            </Link>
            <Link
              href="/partenaires"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
            >
              Partenaires
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
