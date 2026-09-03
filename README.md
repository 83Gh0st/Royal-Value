# RV Group Contracting — Next.js site

A Next.js (App Router) build of the RV Group Contracting site, written from
the company's real trade licences, VAT certificates and positioning brief.

## What's new in this revision

- **Real logo, everywhere.** The uploaded PNG was traced to a proper vector
  (`public/logo-mark.svg`, `app/icon.svg`) via potrace and used in the nav
  bar, footer, favicon and the auto-generated Open Graph image — not a
  placeholder "RV" box.
- **Brand colour extracted from the logo.** The accent colour (`--copper`
  in `app/globals.css`) is the logo's actual red (`#EB1C25`), not an
  invented palette.
- **Positioning corrected to "execution, not design engineering"** per the
  client brief — hero copy, FAQ answers and the feature bands no longer
  imply we produce architectural drawings; copy throughout now reflects
  that we execute to approved drawings and specifications.
- **Pricing table, budget estimator and the capability (org/fleet/supplier)
  section have been removed entirely**, along with the "Villas &
  residential / Warehouses / Government" project-record columns.
- **New sections**, integrating the client-supplied copy: "Why clients
  choose us" (icon cards), "Our Approach" (a genuine 6-stage process:
  Understand → Plan → Execute → Coordinate → Test & Commission →
  Handover), "Industries we serve" (chip cloud), and "Our Commitment /
  Reputation is built on trust" (the distinguished-clients trust section).
- **Clients section redesigned** as a two-row, opposite-direction marquee
  of client names (pauses on hover) — "Presidential Court" removed from
  the visible list per client instruction; the accompanying copy now
  explains that some clients are kept confidential, which is also why.
- **A live map** in the contact section (Google Maps embed + a "Get
  directions" link to the original share URL), pointing at the Sharjah
  office coordinates the client supplied.
- **More motion.** Parallax on the hero and feature-band photography,
  directional scroll reveals throughout, animated counters, a scroll
  progress bar, hover-lift cards, and a scale-in on the services
  accordion's image when a panel opens.
- **Contact email switched to `sales@royalvaluedxb.com`** for the contact
  section specifically (footer/JSON-LD use it too now).

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
  icon.svg             Favicon / app icon (self-contained, dark bg + mark)
  favicon.ico          Multi-resolution fallback, generated from icon.svg
  opengraph-image.tsx  Auto-generated 1200×630 social preview image
  api/contact/route.ts Contact form handler
components/            One component per section
lib/content.ts          All copy, licences, clients, FAQs, map coords — edit here
lib/logo-paths.ts       Traced SVG path data for the logo mark (shared by the OG image)
public/logo-mark.svg    Logo mark for on-page use (light mark, for dark backgrounds)
```

### Editing content

Everything text-based lives in `lib/content.ts`. The map location, sales
email, licence expiry dates, client list, services taxonomy, "Our
Approach" steps, and every FAQ answer are all there.

### Editing the look

Colours and every component class live in `app/globals.css` as CSS custom
properties (`--steel`, `--gun`, `--copper`, etc.), with Tailwind utilities
available where convenient. `--copper` is the brand red — change it there
to re-theme the whole site.

### Editing the map

`lib/content.ts` exports `hq` with `lat`/`lng`/`zoom` and the original
Google Maps share URL. The embed URL is derived automatically from the
coordinates (no API key required, using Google's keyless embed endpoint).
If Google deprecates that endpoint, swap in `google.com/maps/embed/v1/place`
with an API key instead.

## Wiring the contact form to email

`app/api/contact/route.ts` currently validates each submission and
`console.log`s it. Before going live, wire the `console.log(...)` call to
a real provider: [Resend](https://resend.com), [Web3Forms](https://web3forms.com),
or your own SMTP relay via `nodemailer`.

## Image credits

Photography is served from Unsplash's CDN under the
[Unsplash License](https://unsplash.com/license) (free for commercial use,
no attribution required) — see the `image.alt` text in `lib/content.ts`
and `app/page.tsx` for what's used where. The logo is the client's own
artwork, vectorised for this build.

## Tech notes

- Tailwind CSS v4 is configured CSS-first (no `tailwind.config.ts`).
- Google Fonts (Big Shoulders Display, Inter) load via a `<link>` tag in
  `app/layout.tsx` rather than `next/font`, so there's no build-time
  dependency on Google's font CDN.
- `npm run build` and `npm run lint` both run clean.
