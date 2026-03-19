"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";

const navLinks = [
  { href: "/", fr: "Accueil", en: "Home" },
  { href: "/projet", fr: "Le projet", en: "The Project" },
  { href: "/equipe", fr: "L'équipe", en: "The Team" },
  { href: "/partenaires", fr: "Partenaires", en: "Partners" },
  { href: "/groupes-de-travail", fr: "Groupes de Travail", en: "Working Groups" },
  { href: "/evenements", fr: "Événements", en: "Events" },
  { href: "/presse-news", fr: "Presse & News", en: "Press & News" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Tricolor separator at top */}
      <div className="tricolor-separator" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 relative z-[110]">
            <Image
              src="/logo.png"
              alt="Société à Mission Europe"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              <span className="text-orange-600 font-bold text-lg md:text-xl leading-tight block">
                Société à Mission
              </span>
              <span className="text-rose-600 font-bold text-base md:text-lg">
                Europe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-rose-600 text-white"
                    : "text-navy-800 hover:bg-beige-100 hover:text-rose-600"
                }`}
              >
                {lang === "en" ? link.en : link.fr}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 z-[110] ${
              mobileOpen
                ? "bg-rose-600"
                : "bg-beige-100 hover:bg-beige-200"
            }`}
            aria-label="Menu"
          >
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "rotate-45 translate-y-0.5 bg-white"
                    : "-translate-y-1.5 bg-navy-800"
                }`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "w-0 opacity-0 bg-white"
                    : "w-4 opacity-100 bg-navy-800"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-0.5 bg-white"
                    : "translate-y-1.5 bg-navy-800"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible pointer-events-none"
        }`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, height: '100vh', width: '100vw' }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy-800/60 backdrop-blur-md transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ position: 'absolute', top: 0, right: 0, height: '100%' }}
        >
          {/* Menu Header */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-beige-200 bg-beige-50 shrink-0">
            <Image
              src="/logo.png"
              alt="Société à Mission Europe"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <div>
              <span className="text-orange-600 font-bold text-base leading-tight block">Société à Mission</span>
              <span className="text-rose-600 font-bold text-sm">Europe</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-6 pb-24 overflow-y-auto flex-1">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-300 ${
                    mobileOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${index * 75}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-500/25"
                        : "text-navy-800 hover:bg-beige-100 active:scale-[0.98]"
                    }`}
                  >
                    <span>{lang === "en" ? link.en : link.fr}</span>
                    {pathname === link.href && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div
              className={`mt-8 flex items-center justify-center gap-4 transform transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? "500ms" : "0ms" }}
            >
              <a
                href="https://www.linkedin.com/company/soci%C3%A9t%C3%A9-%C3%A0-mission-europe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-beige-100 text-navy-800 hover:bg-rose-600 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
