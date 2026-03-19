import { createAdminClient } from "@/lib/supabase/admin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const groupe = request.nextUrl.searchParams.get("groupe");
  const search = request.nextUrl.searchParams.get("search");
  const exclude_groupe = request.nextUrl.searchParams.get("exclude_groupe");
  const supabase = createAdminClient();

  let query = supabase
    .from("contributeurs")
    .select("id, nom_prenom, poste_structure, groupes")
    .order("nom_prenom");

  if (groupe) {
    query = query.contains("groupes", [groupe]);
  }

  if (search) {
    query = query.ilike("nom_prenom", `%${search}%`);
  }

  if (exclude_groupe) {
    // We'll filter client-side since Supabase doesn't have a "not contains" for arrays easily
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  let results = data || [];

  if (exclude_groupe) {
    results = results.filter(
      (c) => !c.groupes?.includes(exclude_groupe)
    );
  }

  return NextResponse.json(results);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("contributeurs")
    .insert({
      nom_prenom: body.nom_prenom,
      poste_structure: body.poste_structure || null,
      email: body.email || null,
      groupes: body.groupes || [],
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const supabase = createAdminClient();

  const updates: Record<string, unknown> = {};
  if (body.nom_prenom !== undefined) updates.nom_prenom = body.nom_prenom;
  if (body.poste_structure !== undefined) updates.poste_structure = body.poste_structure;
  if (body.groupes !== undefined) updates.groupes = body.groupes;

  const { error } = await supabase
    .from("contributeurs")
    .update(updates)
    .eq("id", body.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
