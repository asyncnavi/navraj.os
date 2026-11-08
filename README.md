# folio.os

A retro **desktop-OS style portfolio** built with Next.js. Neo-brutalist
cream/beige theme with a menu bar, draggable/maximizable windows, desktop
icons, and a dock.

## Stack

- **Next.js (App Router) + TypeScript**
- **Zustand** — window manager state (open windows, z-order, focus, drag, maximize)
- **CSS Modules + CSS variables** — all design tokens live in `app/globals.css`
- **next/font** — Bricolage Grotesque (sans) + Space Mono (mono)

## Develop

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve production build
```

## Structure

```
app/
  layout.tsx          fonts + metadata
  page.tsx            renders <Desktop />
  globals.css         design tokens (palette, shadows, borders, fonts)
  icon.svg            favicon
components/
  Desktop.tsx         shell composition + windows
  shell/              MenuBar, Clock, DesktopIcons, Dock, BootScreen
  window/
    Window.tsx        reusable window frame (titlebar, traffic lights, drag, maximize)
    windowConfig.ts   per-app label, glyph, accent color, default geometry
  apps/               AboutApp, ProjectsApp, BlogApp, ResumeApp, NowApp, PhotosApp, ContactApp
lib/
  store.ts            Zustand desktop store
  useIsMobile.ts      responsive mode hook (<= 860px)
content/
  portfolio.ts        ALL copy — edit here
  posts/*.md          blog posts
```

## Fill in the placeholders

Everything to personalize is in **`content/portfolio.ts`** (search for `// TODO`):

- `profile` — your name, email, GitHub, LinkedIn
- `projects` — titles, descriptions, tags, real GitHub / demo links
- blog posts — one Markdown file per post in `content/posts/*.md`, with frontmatter keys `title`, `date` (YYYY-MM-DD), and `summary`. The filename is the slug.
- `resumePdf` — the resume PDF lives at `public/resume.pdf`; replace that file to update it

Placeholder visuals to replace later:
- About avatar ("your photo" swatch) in `components/apps/AboutApp.tsx`
- Project screenshots + photo grid (striped swatches) in `ProjectsApp` / `PhotosApp`

## Responsive

At `<= 860px` the OS switches to mobile mode: icons become a 3-column grid,
opening an app fills the screen, and the dock + menu links hide. Handled by
`useIsMobile()` and CSS media queries.

## Deferred (easy to add later)

- **Projects from a DB** — projects are static in `content/portfolio.ts`.
  Posts are Markdown files in `content/posts/` and need no DB.

## Deploy

Push to GitHub and import into Vercel (zero-config for Next.js).
