# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite, localhost:5173)
npm run build     # tsc type-check + Vite production build → dist/
npm run lint      # ESLint
npm run preview   # serve dist/ locally
```

No test suite configured.

## Stack

Single-page portfolio — React 19 + Vite + TypeScript + Tailwind CSS 3 + GSAP 3.

## File structure

```
src/
  App.tsx               # root: registers GSAP plugins, assembles page
  main.tsx              # entry point
  index.css             # global styles, Tailwind directives, CSS utility classes
  vite-env.d.ts         # Vite type shims
  data/
    portfolio.ts        # ALL personal content — only file to edit for copy changes
  components/
    Navbar.tsx          # sticky top nav with scroll-to links
    Hero.tsx            # full-screen landing with terminal animation + aurora bg
    Philosophy.tsx      # brief philosophy/values section
    About.tsx           # bio, stats counters, personal info
    Skills.tsx          # tech stack bento grid + marquee ticker
    Experience.tsx      # timeline of work history + education card
    Projects.tsx        # horizontal-scroll showcase (GSAP pin + scrub)
    Connect.tsx         # contact / social links section
    Footer.tsx          # footer
    CustomCursor.tsx    # custom cursor overlay (fixed, z-index 9998)
  utils/
    SplitChars.tsx      # splits a string into individually-wrapped <span> chars for GSAP animation
  hooks/               # empty
```

## Data layer (`src/data/portfolio.ts`)

All content lives here. Exports:
- `personalInfo` — name, role, tagline, bio, location, social links
- `skills` — array of `{ name, category, level }` (not directly rendered in Skills section — Skills uses its own `SKILL_GROUPS` constant)
- `techStack` — flat string array used in the Skills marquee
- `experience` — array of `{ role, company, companyDetail, period, description, tech, isCurrentJob }`
- `education` — array of `{ degree, field, institution, period }`
- `projects` — array of `{ id, title, description, tech, github, live, featured, color, year }` — rendered in Projects horizontal scroll
- `stats` — array of `{ value, suffix, label }` — animated counters in About
- `terminalLines` — array of `{ text }` — typewriter lines in Hero

## Component layout (render order in App.tsx)

`Navbar → Hero → Philosophy → About → Skills → Experience → Projects → Connect → Footer`

## Animation pattern

GSAP registered globally in `App.tsx` (`ScrollTrigger`, `ScrollToPlugin`).
- `ScrollTrigger.defaults({ once: true })` — all scroll animations fire once and don't replay
- Each component creates `gsap.context()` in `useEffect` and calls `ctx.revert()` on cleanup
- Projects section is the only one with GSAP `pin: true` (horizontal scroll via scrub)

## Projects section specifics

- Structure: section header at top (same pattern as Skills/Experience) + horizontal scroll area below
- Section is `flex flex-col height: 100vh overflow-hidden`; header is `shrink-0`, scroll area is `flex-1 min-h-0`
- Header wrapper has `pt-16` so `section-bg-num` at `-top-10` stays within section bounds (not clipped)
- Natural left-to-right scroll: x animates from `0` to `-amountToScroll`
- Each `ProjectCard` renders a `CodePreview` (mock code snippet) + text content side by side
- Card title reveal (`card-title-inner`) triggers at `offsetLeft - viewportWidth * 0.8` scroll offset

## Tailwind custom tokens (`tailwind.config.js`)

Colors: `background` (#0D0D14), `surface`, `surfaceHover`, `accent` (#00A3FF), `primary`, `muted`, `border`
Fonts: `font-sans` (Inter), `font-display` (Space Grotesk), `font-mono` (Fira Code)

## CSS utilities (`src/index.css`)

| Class | Purpose |
|---|---|
| `.bento-box` | glassmorphism card — backdrop-blur, border, rounded-32px, hover lift |
| `.aurora-bg` | animated blurred glow blob (aurora effect) |
| `.bg-glow` | static blurred radial glow |
| `.noise-overlay` | fixed film-grain SVG noise layer (opacity 0.03, z-9999) |
| `.steel-liquid` | animated gradient text (silver liquid flow) |
| `.metal-liquid` | animated gradient text (accent/white flow) |
| `.grid-bg` | subtle 80px grid background pattern |
| `.vignette` | fixed radial darkening at viewport edges |
| `.hud-element` | small monospace HUD label style |
| `.marquee-track` | infinite horizontal scroll animation |
| `.char-wrap` | overflow:hidden wrapper for per-char GSAP reveals |

**Global section rule:** `section:not(#hero):not(#projects)::before` adds a 120px `#0D0D14 → transparent` gradient at the top of every section (except Hero and Projects) to blend section edges. Projects is excluded because it has no top padding (`h-screen`) — the gradient would be visible over content.

## Section header pattern (Skills, Experience — NOT Projects)

```
[section number e.g. 02.]  [Label e.g. Tech Stack]  [w-16 h-px line]
[Large heading]
```

Projects heading panel uses `justify-between` on the label row: "04." on the left, "Projects" on the right.

## Git commits

Do **not** add Claude as co-author in commit messages. Never include `Co-Authored-By:` lines.
