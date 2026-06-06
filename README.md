# Dhaval Panchal — Portfolio

Personal portfolio for **Dhaval Panchal, Senior Frontend Engineer**.

Design language (palette, typography, custom cursor, grain overlay, scroll-reveal,
animated background) mirrors the [DevBrew](../devbrew) brand:

- **Palette:** background `#1F1214`, accent `#F15A29` → `#FF7A4D`, light `#FEE9E2`
- **Type:** Plus Jakarta Sans (body) + Instrument Serif italic (accent words)
- **Signature effects:** blob custom cursor, film-grain overlay, interactive
  particle dots, glowing orbs, scroll-reveal sections

## Stack

- Next.js 16 (App Router) · React 19
- Tailwind CSS v4 (CSS-first `@theme` in `app/globals.css`)
- Motion (Framer Motion v12) for animations
- Phosphor Icons

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Editing content

All content lives in [`lib/data.ts`](lib/data.ts) — profile, experience,
projects, skills, education, and writing links. Edit there; components read
from it. The résumé PDF is served from `public/resume.pdf`.

## Structure

Single-page, smooth-scroll layout:
`Hero → About → Experience → Projects → Skills → Writing → Contact → Footer`.
