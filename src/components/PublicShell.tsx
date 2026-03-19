"use client";

import { I18nProvider } from "@/lib/i18n/context";
import LanguageBar from "@/components/LanguageBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <LanguageBar />
      <Header />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
