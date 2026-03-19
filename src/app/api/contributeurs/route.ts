import { createAdminClient } from "@/lib/supabase/admin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const groupe = request.nextUrl.searchParams.get("groupe");
  const supabase = createAdminClient();

  let query = supabase
    .from("contributeurs")
    .select("nom_prenom, poste_structure, groupes")
    .order("nom_prenom");

  if (groupe) {
    query = query.contains("groupes", [groupe]);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
