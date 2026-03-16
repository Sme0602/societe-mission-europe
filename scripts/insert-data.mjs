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

const data = JSON.parse(
  readFileSync(
    "/Users/sarahvandenbroucke/Documents/documents societe mission europe/societes_a_mission_supabase.json",
    "utf-8"
  )
);

console.log(`Inserting ${data.length} companies...`);

const BATCH = 100;
let inserted = 0;
let errors = 0;

for (let i = 0; i < data.length; i += BATCH) {
  const batch = data.slice(i, i + BATCH);
  const { error } = await supabase.from("societes_a_mission").upsert(batch, {
    onConflict: "slug_observatoire",
    ignoreDuplicates: true,
  });
  if (error) {
    console.error(`Batch ${i / BATCH + 1} error:`, error.message);
    errors++;
  } else {
    inserted += batch.length;
  }
}

console.log(`Done: ${inserted} inserted, ${errors} batch errors`);
