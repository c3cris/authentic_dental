# Authentic Dental Laboratory — Next.js (SSG)

A statically-generated marketing site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build a static site (SSG)

```bash
npm run build
```

`next.config.mjs` sets `output: 'export'`, so `next build` writes a fully static site to **`./out`** — deploy that folder to any static host (Netlify, S3, GitHub Pages, Vercel, nginx). Every route is pre-rendered at build time; there is no server runtime.

## Structure

```
app/
  layout.tsx              Root layout: fonts, <TopBar>, <Header>, <Footer>
  globals.css             Tailwind + base styles + Material Symbols
  page.tsx                Home
  about/  restorations/  services/  seminars/
  videos-newsletters/  contact/  send-a-case/
components/               Header, Footer, TopBar, Cta, Certifications,
                          PageBanner, Icon, SmartImage, ui (buttons/eyebrow)
lib/
  nav.ts                  Navigation + contact constants
  content.ts              All page copy & image URLs (edit here)
tailwind.config.ts        Design tokens (clinical-blue, deep-navy, etc.)
```

## Notes

- **Fonts:** Montserrat (headings) + Open Sans (body) via `next/font/google`. Material Symbols loaded via `<link>` in the layout.
- **Images** point at the live authenticlab.com CDN. `SmartImage` shows a labeled placeholder if an asset fails to load. Swap URLs (or drop files in `public/` and reference `/your-image.jpg`) in `lib/content.ts`.
- **Design tokens** live in `tailwind.config.ts`; copy and typography come from the provided design system.
- Forms are presentational (no backend wired up).

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/restorations` | Restorations |
| `/services` | Services |
| `/seminars` | Seminars |
| `/videos-newsletters` | Videos & Newsletters |
| `/contact` | Contact |
| `/send-a-case` | Send a Case |
