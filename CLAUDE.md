# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hoshiumi Art Store** — a Vue 3 SPA storefront for selling prints, stickers, and original illustrations, paired with a minimal Express.js backend. Product data is currently static (hardcoded in `frontend/src/data/products.ts`); no database or real API endpoints exist yet.

## Commands

All commands are run from their respective subdirectory (`frontend/` or `backend/`).

### Frontend (`frontend/`)
```bash
npm run dev        # Vite dev server (hot reload)
npm run build      # Type-check + production build
npm run lint       # ESLint + Oxlint with auto-fix
npm run format     # Prettier formatting
npm run preview    # Preview production build
```

### Backend (`backend/`)
```bash
npm run dev        # Nodemon dev server (port 5000)
```

No test runner is installed in either package.

## Architecture

### Frontend

The app mounts via [frontend/src/main.ts](frontend/src/main.ts): Pinia is registered, the router is wired in, and the cart store rehydrates from localStorage on startup.

**Layout**: All routes render inside [frontend/src/layouts/MainLayout.vue](frontend/src/layouts/MainLayout.vue), which hosts `<Navbar>`, `<CartDrawer>` (slide-out), and `<Footer>`. Route views are injected via `<RouterView>`.

**Routing** ([frontend/src/router/index.ts](frontend/src/router/index.ts)): `/gallery` lists products, `/product/:id` is the detail page, `/checkout` → `/success` is the purchase flow. Legal pages live under `/privacy`, `/terms`, `/cookies`.

**State** (Pinia stores in [frontend/src/stores/](frontend/src/stores/)):
- `cart.ts` — items, quantities, totals; persisted to localStorage
- `favorites.ts` — saved products; persisted to localStorage
- `theme.ts` — dark/light toggle; persisted to localStorage
- `ui.ts` — ephemeral UI flags (e.g., drawer open state)

**Product data flow**: Static array in [frontend/src/data/products.ts](frontend/src/data/products.ts) → `useProducts()` composable ([frontend/src/composables/useProducts.ts](frontend/src/composables/useProducts.ts)) for filtering/sorting by category, price, and search query → views consume the composable.

**API layer**: [frontend/src/services/api.ts](frontend/src/services/api.ts) is a thin fetch wrapper pointing at `VITE_API_URL`. It exists but is not yet called by any view — real endpoints are a roadmap item.

**TypeScript**: Path alias `@` resolves to `frontend/src/` in both Vite and `tsconfig.app.json`. Use `@/...` imports throughout.

**Linting**: ESLint 9 flat config (`eslint.config.ts`) + Oxlint (`.oxlintrc.json`). Both run together via `npm run lint`. Prettier handles formatting separately and is excluded from ESLint.

### Backend

[backend/server.js](backend/server.js) is Express 5 with CORS and JSON middleware. The only route is `GET /` (health check). Stripe integration, auth, and real product/order endpoints are planned but not implemented.

## Environment Variables

**Frontend** — [frontend/.env](frontend/.env):
```
VITE_API_URL=http://localhost:3000/api   # change to production domain before deploy
```

**Backend** — create `backend/.env` if needed:
```
PORT=5000
```

## Deployment

Frontend deploys to Vercel. Backend is not yet deployed. The `vercel.json` (if present) or default Vercel config handles the SPA routing rewrite.
