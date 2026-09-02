# RV Group Contracting — Next.js site

A Next.js (App Router) build of the RV Group Contracting site, written from
the company's actual 2025 profile, UAE trade licences and VAT certificates
— not a generic template. Design is grounded in the real trade (civil,
MEP, HVAC) rather than a decorative "blueprint" theme.

## What's in here

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**
- **Real content**: licence numbers, expiry dates, registered address,
  client list, project history and the services taxonomy all come from
  `RVEM-company_Profile_2025.pdf` and the attached trade licences — see
  `lib/content.ts`, the single source of truth for every piece of text.
- **A distinct design system**: gunmetal + cast-concrete + burnt-copper
  palette, Big Shoulders Display (industrial condensed) paired with Inter,
  full-bleed photography, an editorial expandable services list and a
  genuine 7-stage numbered process — deliberately not a generic
  card-grid-with-eyebrow-labels template.
- **Framer Motion** used sparingly: one orchestrated hero entrance,
  count-up stats, an animated mobile menu and two accordions (services,
  FAQ) — not a fade-up animation on every section.
- **Working budget estimator** (`components/Estimator.tsx`) — ports the
  same villa/warehouse rate logic to React state.
- **Working contact form** — posts to `app/api/contact/route.ts`, which
  validates and logs the enquiry (see below for wiring it to email).
- **Dark / light mode toggle**, persisted, no-flash on load.
- **SEO**: metadata, `GeneralContractor` + `FAQPage` JSON-LD, an
  auto-generated Open Graph image, `sitemap.ts` and `robots.ts`.
- Accessible by default: skip link, focus-visible states, semantic
  landmarks, `prefers-reduced-motion` respected throughout.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, metadata, theme script, JSON-LD
  page.tsx             Assembles every section in order
  globals.css          Design tokens + component styles
  opengraph-image.tsx  Auto-generated 1200×630 social preview image
  api/contact/route.ts Contact form handler
components/            One component per section
lib/content.ts          All copy, rates, licences, clients, projects, FAQs — edit here
```

### Editing content

Everything text-based lives in `lib/content.ts`: the services taxonomy
(Civil / MEP / HVAC, with the Mechanical/Electrical/Plumbing breakdown),
the rate card, licence numbers and expiry dates, the client list, selected
projects, technical staff, fleet, suppliers and FAQs. Change it there and
every component that uses it updates automatically.

### Editing the look

Colours, type scale and every component class live in `app/globals.css`
as CSS custom properties and plain CSS (`--steel`, `--gun`, `--copper`,
etc.), with Tailwind utilities available where convenient.

## Wiring the contact form to email

`app/api/contact/route.ts` currently validates each submission and
`console.log`s it — the form works end-to-end, but nothing is emailed yet.
Before going live, wire the `console.log(...)` call to a real provider:
[Resend](https://resend.com), [Web3Forms](https://web3forms.com), or your
own SMTP relay via `nodemailer`.

## Before you deploy

- Search the project for `[EDIT]` (currently just the contact route) for
  anything that still needs a real integration.
- Swap in real jobsite photography when you have it — see
  [Image credits](#image-credits) below for what's there now.
- Confirm the licence expiry dates in `lib/content.ts` are still current;
  they were correct as of the January 2025 documents this was built from.

## Image credits

Photography is served from Unsplash's CDN under the
[Unsplash License](https://unsplash.com/license) (free for commercial use,
no attribution required).

| Section | Photographer |
|---|---|
| Hero, feature band (process) | Samuel Regan-Asante |
| Services — MEP, feature band (own trade) | colsan ltda |
| Services — Civil / HVAC | John Fornander, Theo Marjoram |
| Feature band (engineering) | Daniel McCullough |
| Services — Civil (worker) | Josh Olalde |
| Interior reference | Lotus Design N Print |

## Tech notes

- Tailwind CSS v4 is configured CSS-first (no `tailwind.config.ts`).
- Google Fonts (Big Shoulders Display, Inter) load via a `<link>` tag in
  `app/layout.tsx` rather than `next/font`, so there's no build-time
  dependency on Google's font CDN.
- `npm run build` and `npm run lint` both run clean.
