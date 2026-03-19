# Société à Mission Europe

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Supabase (PostgreSQL) for data
- MapLibre GL JS v5 for interactive map
- Node.js v24 via nvm

## Collaboration workflow (CRITICAL - ALWAYS FOLLOW)
Two people work on this project with two different Claude accounts. Always follow this workflow:

### Before starting any work
```bash
git pull origin main
```

### After making changes, commit + push + deploy
```bash
git add -A && git commit -m "description of changes" && git push origin main
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && vercel --prod --yes --force -t $VERCEL_TOKEN
```

### If git pull fails (conflict)
Ask the user before resolving. Never force-push.

## Production URL
https://societe-mission-europe-pi.vercel.app

## Vercel token
Stored in memory, not in this file.

## Dev server
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run dev
```
