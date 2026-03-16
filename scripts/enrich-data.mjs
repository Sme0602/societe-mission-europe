/**
 * Enrichment script: searches each company via recherche-entreprises.api.gouv.fr
 * to get SIREN, address, sector, employee count, etc.
 * Then geocodes addresses via api-adresse.data.gouv.fr
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";

const envFile = readFileSync(
  new URL("../.env.local", import.meta.url),
  "utf-8"
);
const env = Object.fromEntries(
  envFile
    .split("\n")
    .filter((l) => l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function searchEntreprise(nom) {
  const url = `https://recherche-entreprises.api.gouv.fr/search?q=${encodeURIComponent(nom)}&page=1&per_page=1&mtm_campaign=societe-mission-europe`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.results || data.results.length === 0) return null;
  return data.results[0];
}

async function geocodeAddress(adresse) {
  const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adresse)}&limit=1`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (!data.features || data.features.length === 0) return null;
  const feature = data.features[0];
  return {
    latitude: feature.geometry.coordinates[1],
    longitude: feature.geometry.coordinates[0],
    adresse_geo: feature.properties.label,
  };
}

function extractTrancheEffectif(tranche) {
  if (!tranche) return null;
  return tranche;
}

// Fetch all companies without SIREN (not yet enriched)
// Supabase defaults to 1000 rows, so we paginate
let companies = [];
let page = 0;
const PAGE_SIZE = 1000;
while (true) {
  const { data, error: fetchError } = await supabase
    .from("societes_a_mission")
    .select("id, nom, siren, adresse, latitude")
    .is("siren", null)
    .order("nom")
    .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);
  if (fetchError) {
    console.error("Error fetching:", fetchError.message);
    break;
  }
  companies = companies.concat(data);
  if (data.length < PAGE_SIZE) break;
  page++;
}
const error = null;

if (error) {
  console.error("Error fetching companies:", error.message);
  process.exit(1);
}

console.log(`Found ${companies.length} companies to enrich`);

let enriched = 0;
let geocoded = 0;
let notFound = 0;

for (let i = 0; i < companies.length; i++) {
  const company = companies[i];
  console.log(`[${i + 1}/${companies.length}] ${company.nom}`);

  try {
    const result = await searchEntreprise(company.nom);
    if (!result) {
      console.log(`  ❌ Not found`);
      notFound++;
      await sleep(100);
      continue;
    }

    const siege = result.siege || {};
    const updateData = {};

    if (result.siren) updateData.siren = result.siren;
    if (result.siret) updateData.siret_siege = result.siege?.siret || null;
    if (result.nom_raison_sociale) updateData.nom_raison_sociale = result.nom_raison_sociale;
    if (result.nature_juridique) updateData.nature_juridique = result.nature_juridique;
    if (result.categorie_entreprise) updateData.categorie_entreprise = result.categorie_entreprise;
    if (result.tranche_effectif_salarie) updateData.tranche_effectif_salarie = result.tranche_effectif_salarie;
    if (result.date_creation) updateData.date_creation = result.date_creation;
    if (result.etat_administratif) updateData.etat_administratif = result.etat_administratif;
    if (result.activite_principale) updateData.activite_principale = result.activite_principale;
    if (result.section_activite_principale) updateData.section_activite_principale = result.section_activite_principale;

    // Build address from siege
    if (siege) {
      const parts = [
        siege.numero_voie,
        siege.type_voie,
        siege.libelle_voie,
      ].filter(Boolean);
      const adresseLine = parts.join(" ");
      if (adresseLine) {
        const fullAddress = `${adresseLine}, ${siege.code_postal || ""} ${siege.libelle_commune || ""}`.trim();
        updateData.adresse = fullAddress;
        updateData.code_postal = siege.code_postal || null;
        updateData.commune = siege.libelle_commune || null;
        updateData.departement = siege.departement || null;
        updateData.region = siege.region || null;
      }
    }

    // Geocode if we have an address
    if (updateData.adresse) {
      const geo = await geocodeAddress(updateData.adresse);
      if (geo) {
        updateData.latitude = geo.latitude;
        updateData.longitude = geo.longitude;
        geocoded++;
      }
      await sleep(50);
    }

    if (Object.keys(updateData).length > 0) {
      const { error: updateError } = await supabase
        .from("societes_a_mission")
        .update(updateData)
        .eq("id", company.id);

      if (updateError) {
        console.log(`  ⚠️ Update error: ${updateError.message}`);
      } else {
        enriched++;
        console.log(
          `  ✅ ${updateData.commune || "?"} | ${updateData.siren || "?"} | GPS: ${updateData.latitude ? "yes" : "no"}`
        );
      }
    }
  } catch (err) {
    console.log(`  ⚠️ Error: ${err.message}`);
  }

  // Rate limiting: ~5 req/s for recherche-entreprises
  await sleep(200);
}

console.log(`\nDone!`);
console.log(`Enriched: ${enriched}`);
console.log(`Geocoded: ${geocoded}`);
console.log(`Not found: ${notFound}`);
