import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

// Read .env.local manually
const envContent = readFileSync(join(projectRoot, '.env.local'), 'utf-8');
const env = {};
for (const line of envContent.split('\n')) {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) env[match[1].trim()] = match[2].trim();
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

// Dynamic import of supabase-js
const { createClient } = await import('@supabase/supabase-js');

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
});

// Step 1: Create the table via raw SQL using supabase.rpc or direct REST
const createTableSQL = `
CREATE TABLE IF NOT EXISTS societes_a_mission (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    siren VARCHAR(9) UNIQUE,
    siret_siege VARCHAR(14),
    nom TEXT NOT NULL,
    nom_raison_sociale TEXT,
    nature_juridique VARCHAR(10),
    categorie_entreprise VARCHAR(5),
    tranche_effectif_salarie VARCHAR(5),
    date_creation DATE,
    etat_administratif VARCHAR(1),
    activite_principale VARCHAR(10),
    section_activite_principale VARCHAR(5),
    secteur_scrape TEXT,
    code_postal VARCHAR(5),
    commune TEXT,
    departement TEXT,
    region TEXT,
    adresse TEXT,
    latitude NUMERIC(10, 7),
    longitude NUMERIC(10, 7),
    est_societe_a_mission BOOLEAN DEFAULT true,
    raison_etre TEXT,
    date_qualification_mission DATE,
    slug_observatoire TEXT,
    url_fiche_observatoire TEXT,
    source TEXT DEFAULT 'observatoire_societes_mission',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
`;

console.log('Creating table societes_a_mission...');

// Use the Supabase SQL endpoint (management API via service role)
const sqlResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    apikey: supabaseServiceKey,
    Authorization: `Bearer ${supabaseServiceKey}`,
  },
  body: JSON.stringify({}),
});

// The REST rpc endpoint won't work for raw SQL. Use the pg-meta SQL endpoint instead.
const sqlRes = await fetch(`${supabaseUrl}/pg/query`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    apikey: supabaseServiceKey,
    Authorization: `Bearer ${supabaseServiceKey}`,
  },
  body: JSON.stringify({ query: createTableSQL }),
});

if (!sqlRes.ok) {
  // Try alternative: use the Supabase SQL API via the management API
  console.log('pg/query endpoint not available, trying direct SQL via management API...');

  // Extract project ref from URL
  const projectRef = supabaseUrl.replace('https://', '').split('.')[0];

  const mgmtRes = await fetch(
    `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseServiceKey}`,
      },
      body: JSON.stringify({ query: createTableSQL }),
    }
  );

  if (!mgmtRes.ok) {
    console.log('Management API not available either. Trying via supabase-js rpc...');

    // Last resort: try executing SQL via a custom RPC function if available
    const { error: rpcError } = await supabase.rpc('exec_sql', {
      sql: createTableSQL,
    });

    if (rpcError) {
      console.warn(
        'Could not create table programmatically. Please run the SQL schema manually in the Supabase dashboard SQL editor.'
      );
      console.warn('Attempting data insertion anyway (table may already exist)...');
    }
  } else {
    console.log('Table created successfully via management API.');
  }
} else {
  console.log('Table created successfully.');
}

// Read the JSON data
const jsonPath = '/Users/sarahvandenbroucke/Documents/documents societe mission europe/societes_a_mission_supabase.json';
const rawData = JSON.parse(readFileSync(jsonPath, 'utf-8'));

console.log(`Loaded ${rawData.length} records from JSON file.`);

// Insert in batches of 100
const BATCH_SIZE = 100;
let totalInserted = 0;
let totalErrors = 0;

for (let i = 0; i < rawData.length; i += BATCH_SIZE) {
  const batch = rawData.slice(i, i + BATCH_SIZE);
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  const totalBatches = Math.ceil(rawData.length / BATCH_SIZE);

  const { data, error } = await supabase
    .from('societes_a_mission')
    .upsert(batch, { onConflict: 'nom' })
    .select('id');

  if (error) {
    console.error(`Batch ${batchNum}/${totalBatches} FAILED:`, error.message);
    totalErrors += batch.length;
  } else {
    totalInserted += data.length;
    console.log(`Batch ${batchNum}/${totalBatches}: inserted ${data.length} records (total: ${totalInserted})`);
  }
}

console.log(`\nDone! Inserted: ${totalInserted}, Errors: ${totalErrors}`);
