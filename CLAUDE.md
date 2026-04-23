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

## Architecture

Single-page portfolio — React 19 + Vite + TypeScript + Tailwind CSS 3 + GSAP 3.

**Data layer:** All personal content (bio, skills, experience, projects, stats) lives in `src/data/portfolio.ts`. Changing copy means editing only that file; components just import from it.

**Component layout:** `App.tsx` assembles the page as a vertical stack of section components rendered in order: `Navbar → Hero → Philosophy → About → Skills → Experience → Projects → Connect → Footer`. Each component is a self-contained section with its own GSAP animations.

**Animation pattern:** GSAP is registered globally in `App.tsx` (`ScrollTrigger`, `ScrollToPlugin`). Each component that animates creates its own `gsap.context()` inside a `useEffect` and calls `ctx.revert()` on cleanup. `ScrollTrigger.defaults({ once: true })` is set globally — scroll-triggered animations fire once and don't replay.

**Tailwind custom tokens** (defined in `tailwind.config.js`):
- Colors: `background`, `surface`, `surfaceHover`, `accent` (`#00A3FF`), `primary`, `muted`, `border`
- Fonts: `font-sans` (Inter), `font-display` (Space Grotesk), `font-mono` (Fira Code)

CSS utility classes like `.bento-box`, `.aurora-bg`, `.bg-glow`, `.noise-overlay`, `.steel-liquid`, `.grid-bg`, and `.vignette` are defined in `src/index.css` and used widely across components.

**Icons:** `lucide-react` for UI icons, `react-icons/fa` for social/brand icons.

## Git commits

Do **not** add Claude as co-author in commit messages. Never include `Co-Authored-By:` lines.
