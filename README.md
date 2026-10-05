# La Taglia

Shop for curated Italian provisions, built with Vite + React + TypeScript + Tailwind, with a small serverless backend in `api/` (Vercel Functions) and an admin dashboard at `/admin`.

## Dev

```bash
npm install
echo "ADMIN_PASSWORD=choose-a-long-password" > .env.local
npm run dev     # http://localhost:5173  (admin: /admin)
npm run build   # type-check + production build to dist/
```

Locally the API runs inside the Vite dev server and keeps data in memory, so it resets when you restart.

## Going live on Vercel

1. **Admin password:** Project → Settings → Environment Variables → add `ADMIN_PASSWORD` (8+ characters) for Production, and Preview if you want to test there. Redeploy.
2. **Database:** Project → Storage → Create → *Upstash for Redis* → connect it to this project. This adds `KV_REST_API_URL` and `KV_REST_API_TOKEN`. Redeploy.
3. Optional: `ADMIN_SESSION_SECRET` (any long random string) to sign admin sessions with a key separate from the password.

Without the database, the shop still shows the built-in catalog, but checkout can't save orders and the admin is read-only.

## Admin (`/admin`)

- **Overview:** revenue, orders, average order value and customers for 7/30/90 days vs. the previous period; revenue chart; orders by status; top products; low-stock alerts; recent orders.
- **Orders:** search and filter by status or tag, export CSV, open an order to change its status, assign tags, add internal notes or email the customer.
- **Products:** add, edit (price, stock, badge, image, category…), hide/show in the shop, delete. **Import** from an Amazon Seller Central listings report (All Listings / Active Listings .txt, or an inventory template) or any CSV with name, price, stock, image columns: preview, pick rows, set category/region/visibility and an optional price adjustment; products with the same name get their price, stock and image updated.
- **Customers:** built from orders, with lifetime spend and tags.
- **Settings:** store announcement bar, free-shipping threshold, freight and duty, promo code, order tag library.

## Structure

```
api/                 # Vercel Functions (server)
  _lib/              # auth (signed cookie, lockout), storage (Upstash REST / memory), helpers
  products.ts        # GET live catalog
  settings.ts        # GET public store settings
  orders.ts          # POST new order (re-prices catalog items server-side)
  admin/             # session, login, orders, products, settings (all require the admin cookie)
src/
  shared/            # types, pricing and seed data used by both server and browser
  admin/             # admin dashboard
  pages/             # storefront pages
```
