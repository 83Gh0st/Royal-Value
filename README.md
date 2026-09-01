# RV Group Contracting — Next.js site

A full Next.js (App Router) rebuild of the RV Group Contracting one-page site —
same content and drawing-sheet design language as the original static HTML,
rebuilt as a proper component-driven, animated, SEO-ready web app.

## What's in here

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**
- **Framer Motion** — scroll reveals, staggered grids, an animated mobile
  menu, a spring-eased FAQ accordion, and count-up stats
- **Real photography** (villas, warehouses, a job site, an interior, a
  drafting table) via `next/image`, licensed for free commercial use on
  Unsplash — see [Image credits](#image-credits)
- **Working budget estimator** — the same rate logic as the original,
  ported to React state (`components/Estimator.tsx`)
- **Working contact form** — posts to `app/api/contact/route.ts`, which
  validates and logs the enquiry server-side (see
  [Wiring the contact form to email](#wiring-the-contact-form-to-email))
- **Dark / light mode toggle**, persisted to `localStorage`, with a
  no-flash inline script and full `prefers-color-scheme` fallback
- **SEO**: metadata, `GeneralContractor` + `FAQPage` JSON-LD, an
  auto-generated Open Graph image (`app/opengraph-image.tsx`),
  `sitemap.ts` and `robots.ts`
- Accessible by default: skip link, focus-visible states, semantic
  landmarks, `prefers-reduced-motion` respected throughout

All copy, numbers, licence details and rates are ported verbatim from the
original `index.html` — see `lib/content.ts`, which is the single source of
truth for every piece of text on the page.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build and run a production server:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, theme script, JSON-LD
  page.tsx             Assembles every section in order
  globals.css          Design tokens + component styles (ported 1:1 from the original)
  opengraph-image.tsx  Auto-generated 1200×630 social preview image
  sitemap.ts, robots.ts
  api/contact/route.ts Contact form handler
components/            One component per section (Hero, Services, Pricing, …)
lib/content.ts          All copy, rates, coverage areas, FAQs, JSON-LD — edit here
```

### Editing content

Everything text-based — headlines, the rate card, coverage areas, the client
list, FAQs, contact details — lives in `lib/content.ts`. Change it there and
every component that uses it updates automatically.

### Editing the look

Colours, type scale, spacing and every component class (`.hero`, `.card`,
`.est`, `.faq-item`, …) live in `app/globals.css` as CSS custom properties
and plain CSS — the same token system as the original file (`--pine`,
`--hivis`, `--ground`, etc.), just split so Tailwind's utility classes are
still available if you want them.

## Wiring the contact form to email

Right now `app/api/contact/route.ts` validates each submission and
`console.log`s it, so the form works end-to-end out of the box but nothing
is emailed yet. Before going live, pick one:

- **[Resend](https://resend.com)** — a few lines with their Node SDK
- **[Web3Forms](https://web3forms.com)** — drop-in, no backend code needed
- Your own SMTP relay via `nodemailer`

Replace the `console.log(...)` call in that file with your provider of
choice.

## Before you deploy

Search the project for `[EDIT]` — currently just the one spot in
`app/api/contact/route.ts` — for anything that still needs a real
integration. Everything else (phone numbers, licence numbers, addresses,
rates) is already filled in from the source site.

## Image credits

Photography is served directly from Unsplash's CDN (`images.unsplash.com`)
under the [Unsplash License](https://unsplash.com/license) (free for
commercial use, no attribution required). If you'd rather self-host, replace
the `image.src` values in `lib/content.ts` and `app/page.tsx` with your own
project photography — the sooner you swap in real jobsite photos, the
better this page will convert.

| Section | Photographer |
|---|---|
| Villa exterior (Services, hero-adjacent) | John Fornander |
| Warehouse exterior (Services) | Theo Marjoram |
| Construction worker (Services) | Josh Olalde |
| Construction site cranes (feature band) | Samuel Regan-Asante |
| Living room interior (feature band) | Lotus Design N Print |
| Architect's drafting table (feature band) | Daniel McCullough |

## Tech notes

- Tailwind CSS v4 is configured CSS-first (no `tailwind.config.ts`) — see
  the `@theme inline` block at the top of `app/globals.css`.
- Google Fonts (Archivo, IBM Plex Sans, IBM Plex Mono) are loaded via a
  `<link>` tag in `app/layout.tsx` rather than `next/font`, matching the
  original file exactly and avoiding a build-time dependency on Google's
  font CDN.
- `npm run lint` runs clean (0 errors, 0 warnings).
