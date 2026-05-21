import { createAdminClient } from "@/lib/supabase/admin";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const groupe = request.nextUrl.searchParams.get("groupe");
  const search = request.nextUrl.searchParams.get("search");
  const exclude_groupe = request.nextUrl.searchParams.get("exclude_groupe");
  const supabase = createAdminClient();

  let query = supabase
    .from("contributeurs")
    .select("id, nom_prenom, poste_structure, email, telephone, idees, groupes, created_at")
    .order("nom_prenom");

  if (groupe) {
    query = query.contains("groupes", [groupe]);
  }

  if (search) {
    query = query.ilike("nom_prenom", `%${search}%`);
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

  // Check if email already exists
  if (body.email) {
    const { data: existing } = await supabase
      .from("contributeurs")
      .select("id, groupes")
      .eq("email", body.email)
      .maybeSingle();

    if (existing) {
      const groupes = existing.groupes || [];
      if (body.groupe && !groupes.includes(body.groupe)) {
        groupes.push(body.groupe);
      }
      // Auto-add to general list (newsletter) when adding to any specific list (except presse)
      if (body.groupe && body.groupe !== "newsletter" && body.groupe !== "presse" && !groupes.includes("newsletter")) {
        groupes.push("newsletter");
      }
      const { error } = await supabase
        .from("contributeurs")
        .update({
          nom_prenom: body.nom_prenom,
          poste_structure: body.poste_structure || null,
          groupes,
          telephone: body.telephone || null,
          idees: body.idees || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json({ success: true, updated: true });
    }
  }

  let groupes = body.groupes || (body.groupe ? [body.groupe] : []);
  // Auto-add to general list (newsletter) when adding to any specific list (except presse)
  if (body.groupe && body.groupe !== "newsletter" && body.groupe !== "presse" && !groupes.includes("newsletter")) {
    groupes = [...groupes, "newsletter"];
  }

  const { data, error } = await supabase
    .from("contributeurs")
    .insert({
      nom_prenom: body.nom_prenom,
      poste_structure: body.poste_structure || null,
      email: body.email || null,
      telephone: body.telephone || null,
      idees: body.idees || null,
      groupes,
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
  if (body.email !== undefined) updates.email = body.email;
  if (body.telephone !== undefined) updates.telephone = body.telephone;
  if (body.idees !== undefined) updates.idees = body.idees;
  if (body.groupes !== undefined) updates.groupes = body.groupes;
  updates.updated_at = new Date().toISOString();

  const { error } = await supabase
    .from("contributeurs")
    .update(updates)
    .eq("id", body.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
