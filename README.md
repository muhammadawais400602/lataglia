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
2. **Database (MongoDB Atlas):** in Atlas → Network Access allow `0.0.0.0/0` (Vercel has no fixed IP); Connect → Drivers → copy the `mongodb+srv://…` string with your DB user's password filled in. In Vercel add it as `MONGODB_URI` (Production + Preview). Optional `MONGODB_DB` (default `lataglia`). Redeploy. Data appears in Atlas as collections `kv` (products, settings, counters) and `orders`.
   *Alternative:* Storage → Upstash for Redis (`KV_REST_API_URL` / `KV_REST_API_TOKEN`) also works; MongoDB wins if both are set.
3. **Amazon links (optional):** sign up at canopyapi.co (100 free lookups a month, then about $0.01 each), copy the API key and add it as `CANOPY_API_KEY`. Redeploy. Without it, "Add from Amazon link" only fills in the name from the link.
4. **Region photos:** create a free app at unsplash.com/developers, copy its **Access Key** and add it as `UNSPLASH_ACCESS_KEY`. Region pages describe each photo ("Sassi of Matera Basilicata"); the first visit looks it up on Unsplash and the choice is kept in the database (`photos` collection), so it never changes afterwards. Credits appear under each story. Delete a row in `photos` to make the site pick again.
5. Optional: `ADMIN_SESSION_SECRET` (any long random string) to sign admin sessions with a key separate from the password.

Without the database, the shop still shows the built-in catalog, but checkout can't save orders and the admin is read-only.

## Admin (`/admin`)

- **Overview:** revenue, orders, average order value and customers for 7/30/90 days vs. the previous period; revenue chart; orders by status; top products; low-stock alerts; recent orders.
- **Orders:** search and filter by status or tag, export CSV, open an order to change its status, assign tags, add internal notes or email the customer.
- **Products:** **Add from Amazon link** (paste a product link → name, brand, photos and price are filled in; you set price and stock, then save), add, edit (price, stock, badge, image, category…), hide/show in the shop, delete. **Import** from an Amazon Seller Central listings report (All Listings / Active Listings .txt, or an inventory template) or any CSV with name, price, stock, image columns: preview, pick rows, set category/region/visibility and an optional price adjustment; products with the same name get their price, stock and image updated.
- **Customers:** built from orders, with lifetime spend and tags.
- **Settings:** store announcement bar, free-shipping threshold, freight and duty, promo code, order tag library.

## Region stories (`/regions/<slug>`)

Each region page is one data file in `src/regions/` (see `sicilia.ts`), rendered by `src/pages/RegionStory.tsx` in the site's design. To add a region: copy an existing file (e.g. `lazio.ts`), change the text, banner colour, photos, products and recipe, then add a line for it to `src/regions/meta.ts`. Each region's content is downloaded only when its page opens. Its card on the home page, `/regions` and the footer then links to it.

Product tiles in a story point at a catalog product by its page address. In Admin → Products, set a product's **Page address** to the same value as the story's `id` to connect them: the tile then shows the price, links to the product page and is included in the story's set. Tiles without a matching product show "arriving soon".

## Structure

```
api/                 # Vercel Functions (server)
  _lib/              # auth (signed cookie, lockout), storage (MongoDB / Upstash REST / memory), helpers
  products.ts        # GET live catalog
  settings.ts        # GET public store settings
  orders.ts          # POST new order (re-prices catalog items server-side)
  admin/             # session, login, orders, products, settings (all require the admin cookie)
src/
  shared/            # types, pricing and seed data used by both server and browser
  admin/             # admin dashboard
  pages/             # storefront pages
```
