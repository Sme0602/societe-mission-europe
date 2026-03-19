# Société à Mission Europe

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Supabase (PostgreSQL) for data
- MapLibre GL JS v5 for interactive map
- Node.js v24 via nvm

## Collaboration workflow (CRITICAL - ALWAYS FOLLOW)
Two people work on this project with two different Claude accounts. Always follow this workflow for EVERY modification:

### 1. Before starting any work
```bash
git pull origin main
```

### 2. Make changes to the code

### 3. Commit and push
```bash
git add -A && git commit -m "description of changes" && git push origin main
```

### 4. Deploy to Vercel
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && vercel link --project societe-mission-europe --yes -t $VERCEL_TOKEN --scope societeamissioneurope-7819s-projects && vercel --prod --yes --force -t $VERCEL_TOKEN
```

### 5. Re-link to main project after deploy
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && vercel link --project societe-mission-europe-main --yes -t $VERCEL_TOKEN --scope societeamissioneurope-7819s-projects
```

### If git pull fails (conflict)
Ask the user before resolving. Never force-push.

## Vercel projects
- **societe-mission-europe** → https://societe-mission-europe-pi.vercel.app (PRODUCTION - deploy here)
- **societe-mission-europe-main** → https://societe-mission-europe-main.vercel.app (secondary)

## Deploy to Vercel (quick reference)
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && vercel --prod --yes --force -t $VERCEL_TOKEN
```
Note: Use `--force` to avoid stale build cache. Vercel token is stored in memory, not in this file.

## Dev server
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run dev
```
