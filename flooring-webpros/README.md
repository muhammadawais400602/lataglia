# Flooring WebPros — homepage

Static site (HTML/CSS/JS, no build step). Copy source: `../docs/flooring-webpros-homepage-copy.md`.

## Files
- `index.html`, `styles.css`, `main.js` — the page
- `frames/` — 132 WebP frames (1280w) from `oak-walkthrough.mp4`, scrubbed on scroll in the hero
- `frames-m/` — portrait-cropped 600w frames used on phones / tall screens
- `oak-walkthrough.mp4` — source video (not loaded by the page)

## Preview
```bash
cd flooring-webpros && python3 -m http.server 8080   # http://localhost:8080
```

## Deploy (Vercel)
New project from this repo → Root Directory: `flooring-webpros` → Framework: Other → no build command.

## Before launch
- Replace `(XXX) XXX-XXXX`, `tel:+10000000000`, `mailto:hello@example.com`.
- Lead form: set `data-endpoint` on `<form class="lead-form">` (Formspree, CRM webhook…). Empty = shows success message only, nothing is sent.
- Verify stats (150+, 8+ years, 40+ countries), prices and competitor ranges.
- Portfolio cards are labeled "Demo Design"; swap for real builds. Swap "Our Promise" for real testimonials when you have them.

## Regenerate frames
```bash
ffmpeg -i oak-walkthrough.mp4 -vf "select='not(mod(n\,2))',scale=1280:-2" -vsync vfr -c:v libwebp -quality 62 frames/f%03d.webp
ffmpeg -i oak-walkthrough.mp4 -vf "select='not(mod(n\,2))',crop=ih*0.75:ih,scale=600:-2" -vsync vfr -c:v libwebp -quality 60 frames-m/f%03d.webp
```
Keep 132 frames or update `FRAMES` in `main.js`.
