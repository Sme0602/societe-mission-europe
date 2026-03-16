import { createClient } from "@supabase/supabase-js";
import CarteInteractive from "./CarteInteractive";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Carte des Sociétés à Mission | Société à Mission Europe",
  description:
    "Explorez la carte interactive des sociétés à mission en France. Découvrez les entreprises engagées près de chez vous.",
};

async function getCompanies() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  // Supabase returns max 1000 rows by default, paginate
  let allData: any[] = [];
  let page = 0;
  const PAGE_SIZE = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("societes_a_mission")
      .select("*")
      .not("latitude", "is", null)
      .not("longitude", "is", null)
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

    if (error) {
      console.error("Error fetching companies:", error);
      break;
    }
    allData = allData.concat(data || []);
    if (!data || data.length < PAGE_SIZE) break;
    page++;
  }
  return allData;
}

export default async function CartePage() {
  const companies = await getCompanies();

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 5rem)" }}>
      <CarteInteractive companies={companies} />
    </div>
  );
}
