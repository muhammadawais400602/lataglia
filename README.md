# La Taglia

Marketing site for La Taglia, built with Vite + React + TypeScript + Tailwind.

## Dev

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # type-check + production build to dist/
npm run preview # preview production build
```

## Structure

```
src/
  App.tsx            # home page
  main.tsx           # entry + router
  index.css          # tailwind + base styles
  components/
    Layout.tsx       # nav + footer wrapper
    Nav.tsx
    Footer.tsx
  pages/
    Menu.tsx
    About.tsx
    Contact.tsx      # reservation form (stub, no backend yet)
```

## Customize

- Brand palette: `tailwind.config.js` → `theme.extend.colors.brand`
- Fonts: swap the Google Fonts link in `index.html` and `fontFamily` in Tailwind config
- Menu copy: `src/pages/Menu.tsx`
- Reservation form: wire the `onSubmit` in `src/pages/Contact.tsx` to your backend of choice
