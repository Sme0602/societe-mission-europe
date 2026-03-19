# Société à Mission Europe

## Stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Supabase (PostgreSQL) for data
- MapLibre GL JS v5 for interactive map
- Node.js v24 via nvm

## Collaboration workflow (IMPORTANT)
Two people work on this project. Always follow this workflow:

### Before starting any work
```bash
git pull origin main
```

### After deploying
```bash
git add -A && git commit -m "description of changes" && git push origin main
```

### If git pull fails (conflict)
Ask the user before resolving. Never force-push.

## Deploy to Vercel
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && vercel --prod --yes --force -t $VERCEL_TOKEN
```
Note: Use `--force` to avoid stale build cache. Vercel token is stored in memory, not in this file.

## Dev server
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run dev
```
