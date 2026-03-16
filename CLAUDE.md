# Société à Mission Europe

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Supabase (PostgreSQL) for data
- MapLibre GL JS v5 for interactive map
- Node.js v24 via nvm

## Deploy to Vercel
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && vercel --prod --yes -t $VERCEL_TOKEN
```
Note: Vercel token is stored in memory, not in this file.

## Dev server
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run dev
```
