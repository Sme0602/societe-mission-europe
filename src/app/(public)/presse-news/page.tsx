import type { Metadata } from "next";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Newsletter } from "@/lib/types/database";
import PresseNewsContent from "@/components/PresseNewsContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Presse & News | Société à Mission Europe",
  description:
    "Retrouvez les articles de presse, newsletters et communications du projet Société à Mission Europe.",
  alternates: {
    canonical: "https://societe-mission-europe-pi.vercel.app/presse-news",
  },
};

export default async function PresseNewsPage() {
  const supabase = createServerSupabaseClient();

  const { data } = await supabase
    .from("newsletters")
    .select("*")
    .eq("is_published", true)
    .order("published_date", { ascending: false });

  const newsletters = (data ?? []) as Newsletter[];

  return <PresseNewsContent newsletters={newsletters} />;
}
