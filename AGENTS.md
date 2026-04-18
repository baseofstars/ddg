# DD FREIGHT LLC — Agent Guide

## Project Overview

Corporate website for DD FREIGHT LLC, a freight forwarding and event logistics company operating across UAE, KSA, Qatar, and Oman. Built with Next.js 16.2 (App Router, React 19) and plain CSS Modules. No component library — all UI is hand-rolled.

> **Note**: This is Next.js 16 with breaking changes from earlier versions. Consult `node_modules/next/dist/docs/` before relying on API patterns from training data.

## Commands

All commands run from `ddgfreight-app/`:

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint (flat config: next/core-web-vitals + typescript) |

No test framework is configured.

## Architecture

**App Router** — file-based routing, all pages in `app/`.

```
app/
  layout.js            ← Root layout (Navbar, Footer, ScrollProgress, BackToTop, WhatsAppWidget, Inter font, metadata)
  page.js              ← Homepage ('use client' — parallax hero, CountUp stats, partners marquee, spotlight, services grid, quick quote form, global presence, CTA)
  globals.css          ← CSS custom properties (design tokens), resets, .container utility, .page-enter animation
  not-found.js         ← Custom 404 ('use client')
  about/page.js        ← About page (server component, exports metadata)
  services/page.js     ← Services listing (server component, exports metadata, 6 services alternating layout)
  contact/page.js      ← Contact page (server component, exports metadata, Google Maps iframe embed)

components/
  Navbar.js            ← Client (scroll-aware bg, active route highlighting via usePathname, mobile hamburger)
  Footer.js            ← Server component (wave SVG, social links, "Base of Stars" credit)
  ContactForm.js       ← Client (controlled form with floating labels, mock submit — no backend)
  ScrollReveal.js      ← Client (IntersectionObserver fade-in, configurable delay + tag element via `as` prop)
  CountUp.js           ← Client (IntersectionObserver-triggered count animation with ease-out cubic)
  ProgressiveImage.js  ← Client (shimmer placeholder → lazy-loaded image)
  ScrollProgress.js    ← Client (top-of-page progress bar)
  BackToTop.js         ← Client (circular progress indicator + smooth scroll)
  WhatsAppWidget.js    ← Client (floating WhatsApp link, placeholder phone number)
```

### Client vs Server Components

This is non-obvious: **the homepage `app/page.js` is `'use client'`** (needs `useRef`/`useEffect` for parallax). Most other pages are server components. The client components that need interactivity are: Navbar, ContactForm, ScrollReveal, CountUp, ProgressiveImage, ScrollProgress, BackToTop, WhatsAppWidget, not-found page.

### Data Flow

- **All data is static** — defined as arrays/objects at the top of page/component files.
- No API routes, no database, no external data fetching, no environment variables.
- Images use external Unsplash URLs with plain `<img>` tags (no `next/image` optimization).
- The `@/*` path alias maps to the project root (configured in both `jsconfig.json` and `tsconfig.json`).

## Styling Conventions

- **CSS Modules exclusively** — every component/page has a co-located `*.module.css`.
- **Tailwind v4 + `@tailwindcss/postcss` is installed and configured in `postcss.config.mjs` but never used in markup.** Tailwind utility classes will work but would be inconsistent with the rest of the codebase. Do not add Tailwind classes.
- **Design tokens** in `globals.css` `:root`:
  - Colors: `--red` (#C8102E), `--red-dark`, `--red-light`, `--navy` (#003366), `--navy-light`, `--black`, `--white`, `--gray-50` through `--gray-800`
  - Shadows: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
  - Radii: `--radius-sm`, `--radius-md`, `--radius-lg`
  - Transitions: `--transition-fast`, `--transition-base`, `--transition-slow`
- **`.container`** is a global (non-module) class in `globals.css`: `max-width: 1200px`, centered. Used via `className="container"` in JSX.
- Single responsive breakpoint: `@media (max-width: 768px)` in each module file.
- `.page-enter` class on `<main>` provides a fade-in animation on page load.

## File Convention

- **All app code is `.js`** despite `tsconfig.json` existing (it has `allowJs: true`). Config files (`next.config.ts`, `eslint.config.mjs`) use TS/ESM.
- Component files are PascalCase (`Navbar.js`, `ScrollReveal.js`).
- CSS modules are co-located: `ComponentName.module.css`.

## Key Gotchas

1. **Homepage is `'use client'`**, not a server component — it cannot export `metadata`. The root `layout.js` handles all metadata for the homepage.
2. **Tailwind is installed but unused.** Don't add Tailwind classes — use CSS Modules to stay consistent.
3. **Contact form has no backend.** `ContactForm.js` sets `sent=true` on submit without sending data anywhere. Needs integration with Formspree/EmailJS/API route.
4. **Inconsistent phone numbers.** Footer has `+971 4 123 4567` / `+971 50 123 4567` (looks like test data). Contact page still shows `+971 4 XXX XXXX` (placeholder). WhatsAppWidget has `+971501234567`.
5. **`next/image` is not used anywhere.** All images are plain `<img>` tags with external Unsplash URLs — no automatic optimization, no blur placeholders (except the custom `ProgressiveImage` shimmer).
6. **ESLint uses flat config** (`eslint.config.mjs` with `defineConfig`), not `.eslintrc`. Combines `next/core-web-vitals` and `next/typescript` presets.
7. **No test framework.** There are no tests and no test runner configured.

## Conventions to Follow

- Use CSS Modules (co-located `.module.css`) for all new styles.
- Reference design tokens (`var(--red)`, `var(--navy)`, etc.) — don't hardcode colors.
- Mark interactive components with `'use client'` directive.
- Server component pages should export `metadata` for SEO.
- Use `next/link` for internal navigation (existing pattern).
- Use `@/components/...` import paths (path alias).
- Responsive: add mobile overrides in the same module's `@media (max-width: 768px)` block.
- Use `ScrollReveal` wrapper for scroll-triggered animations on new sections.
- Use `ProgressiveImage` instead of bare `<img>` for content images that benefit from a loading state.
