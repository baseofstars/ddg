# DD FREIGHT LLC — Agent Guide

## Project Overview

Corporate website for DD FREIGHT LLC, a freight forwarding and event logistics company operating across UAE, KSA, Qatar, and Oman. Built with Next.js 16 (App Router) and plain CSS Modules. No component library — all UI is hand-rolled.

> **Note**: This is Next.js 16 with breaking changes. Read `node_modules/next/dist/docs/` before using APIs from training data.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint (next/core-web-vitals + typescript config) |

## Architecture

**App Router** — all pages are in `app/` using the file-based routing convention.

```
app/
  layout.js          ← Root layout (Navbar + Footer wrapper, Inter font, metadata)
  page.js            ← Homepage (hero, stats, services preview, global presence, CTA)
  globals.css        ← CSS custom properties (design tokens), resets, .container utility
  about/page.js      ← About page (CEO message, overview, vision/mission)
  services/page.js   ← Services listing (6 services, alternating image/text layout)
  contact/page.js    ← Contact page (form + info sidebar)

components/
  Navbar.js          ← Client component (scroll-aware, mobile hamburger menu)
  Footer.js          ← Server component
  ContactForm.js     ← Client component (controlled form, mock submit)
```

- Each `*.module.css` is co-located with its component/page.
- No TypeScript in app/components files despite `tsconfig.json` existing — files use `.js` extension.
- `Navbar` is the only component using `'use client'` for scroll state and mobile menu toggle.
- `ContactForm` is `'use client'` for form state management.
- Page-level components (about, services, contact) are server components that export `metadata`.

## Styling Conventions

- **CSS Modules** exclusively — no Tailwind utility classes in markup despite Tailwind v4 + PostCSS being installed.
- **Design tokens** defined as CSS custom properties in `globals.css`:
  - `--red: #C8102E` (primary CTA / accent)
  - `--navy: #003366` (headings, dark backgrounds)
  - `--gray-100` through `--gray-800` (neutrals)
- **`.container`** class (not a module) provides `max-width: 1200px` centering — referenced in JSX via `className="container"`.
- Breakpoint: single `@media (max-width: 768px)` for all responsive adjustments.
- All spacing uses consistent multiples: 8, 16, 20, 24, 32, 48, 64, 80.

## Data Patterns

- Static data arrays defined at the top of page files (e.g., `services`, `stats` in `page.js`).
- No API routes, no database, no external data fetching.
- Images are external Unsplash URLs — not using `next/image`, just plain `<img>` tags.

## Key Gotchas

1. **Tailwind is installed but not used in markup.** Tailwind v4 with `@tailwindcss/postcss` is configured but all styling is CSS Modules. If you add Tailwind classes, they will work but will be inconsistent with existing code.
2. **Mix of .js and .ts files.** `next.config.ts` and ESLint config are TS, but app code is plain JS. TypeScript types packages are installed but not used by pages/components.
3. **Contact form has no backend.** `ContactForm.js` sets `sent=true` on submit without sending data anywhere. Needs integration with Formspree/EmailJS/API route.
4. **Phone numbers are placeholders.** Footer and contact page show `+971 4 XXX XXXX`.
5. **Map placeholder** on contact page is just a gray box with text.
6. **`next/image` not used** — all images are `<img>` with external URLs, so no automatic optimization.

## Conventions to Follow

- Use CSS Modules (co-located `.module.css`) for all new styles.
- Keep design token references (`var(--red)`, `var(--navy)`, etc.) — don't hardcode colors.
- Mark interactive components with `'use client'` directive.
- Server components should export `metadata` for SEO.
- Use `next/link` for internal navigation (already the pattern).
- Responsive: add mobile overrides in the same module's `@media (max-width: 768px)` block.
