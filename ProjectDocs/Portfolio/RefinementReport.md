# Portfolio Refinement Report — Senior Unity Developer

> **Stage B Deliverable**  
> **Production URL:** `https://unity-developer-portfolio-58d.pages.dev/`  
> **Companion Document:** [`AuditReport.md`](./AuditReport.md)

---

## 1. Issues Discovered & Fixed

| Priority | Issue                                                                                                    | Resolution                                                                                                                                                                                                                                                                                                                                                                                                           |
| :------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **P0**   | `Jolly Battle` and `Jigsaw Puzzle` still present in career summary and CV cards                          | Removed both projects from `src/data/experience.ts` and `src/pages/cv/index.astro`; preserved the legitimate Google Play store ID (`com.jollyco.jollybattlematch3`) in `jolly-match-3.md`.                                                                                                                                                                                                                           |
| **P0**   | Contradictory/unsourced `1M+ downloads` claim                                                            | Removed `1M+ downloads` from `src/data/experience.ts` and `src/pages/cv/index.astro`; kept `100k+ downloads` attributed specifically to `Jolly Match 3`.                                                                                                                                                                                                                                                             |
| **P0**   | Unverified blanket performance claims (`60 FPS`, `GC-free game loops`, `eliminating GC allocations`)     | Replaced with accurate, defensible engineering phrasing (allocation-conscious critical paths, profiling-driven frame pacing, reducing per-frame GC allocations) across `MetricsStrip.astro`, `EngineeringPillars.astro`, `AISpotlight.astro`, `experience.ts`, `cv/index.astro`, and `jolly-match-3.md`. Removed unverified `Target Frame Rate: 60 FPS` metric from `jolly-match-3.md`.                              |
| **P0**   | Unclassified technology stack mixing production and independent/R&D tools                                | Added explicit `SkillTier` classification (`Production Experience`, `Additional Experience`, `Familiarity / Exploring`) in `src/data/skills.ts` and rendered tier badges + legend in `src/pages/experience/index.astro` and `src/pages/cv/index.astro`. Updated `Hero.astro` and `EngineeringPillars.astro` so `Unity 6`, `ECS`, `Entitas`, `R3`, and `VContainer` are not presented as commercial production stack. |
| **P0**   | Broken Markdown typography on `/projects/[slug]` (`@tailwindcss/typography` not installed)               | Added `.case-study-prose` styles in `src/styles/global.css` and applied them in `src/layouts/ProjectLayout.astro` so headings, paragraphs, lists, and code blocks render cleanly.                                                                                                                                                                                                                                    |
| **P0**   | Missing default Open Graph image (`/images/og-default.png`)                                              | Updated `src/layouts/BaseLayout.astro` default `ogImage` to `/images/projects/jolly-match-3-cover.webp` and passed `data.coverImage` from `ProjectLayout.astro`.                                                                                                                                                                                                                                                     |
| **P1**   | Ambiguous `"Active LiveOps"` badge in Hero portrait card                                                 | Replaced `"Active LiveOps"` with `"6+ Years Production"` in `src/components/home/Hero.astro` and tightened Hero `<h1>` and bio copy (keeping the Naruto reference naturally in the bio).                                                                                                                                                                                                                             |
| **P1**   | AI-Augmented Engineering visual & textual dominance                                                      | Compacted `src/components/home/AISpotlight.astro` (~30% reduction in vertical padding and copy), replaced the `AI-Augmented` card in `MetricsStrip.astro` with `Automated Quality` (`AltTester, PlayMode & CI/CD`), and removed the highlighted AI pill from `Hero.astro`.                                                                                                                                           |
| **P1**   | `Jolly Match 3` case study narrative too brief; missing ownership scope on case studies                  | Expanded `jolly-match-3.md` to cover Match-3 submodule extraction, 2D-to-3D migration, REST API/JWT & Firebase RTDB/Firestore, offline telemetry, A/B testing & monetization, profiling, UI, AltTester/CI, and code reviews/mentoring. Added `teamSize` / `period` metadata and rendered `Scope` in `ProjectLayout.astro`.                                                                                           |
| **P1**   | Canonical URL & `robots.txt` mismatch                                                                    | Updated `astro.config.mjs` (`site`), `src/data/site-meta.ts` (`canonicalUrl`), and `public/robots.txt` to match `https://unity-developer-portfolio-58d.pages.dev` and removed the broken `sitemap.xml` reference.                                                                                                                                                                                                    |
| **P1**   | Broken `#all` anchor, mobile drawer auto-close, card aspect ratio, and video header truncation on mobile | Added `id="all"` and larger touch targets in `src/pages/projects/index.astro`; added auto-close on nav link click in `Header.astro`; switched `ProjectCard.astro` cover images to `aspect-video`; aligned `ProjectNavigation.astro` cleanly on mobile; added `min-w-0 flex-1` to `ProjectMediaShowcase.astro` video header to prevent clipping at `375px`.                                                           |

---

## 2. Files Modified

- `astro.config.mjs`
- `public/robots.txt`
- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/layouts/ProjectLayout.astro`
- `src/data/site-meta.ts`
- `src/data/experience.ts`
- `src/data/skills.ts`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/home/Hero.astro`
- `src/components/home/MetricsStrip.astro`
- `src/components/home/EngineeringPillars.astro`
- `src/components/home/AISpotlight.astro`
- `src/components/projects/ProjectCard.astro`
- `src/components/projects/ProjectMediaShowcase.astro`
- `src/components/projects/ProjectNavigation.astro`
- `src/pages/projects/index.astro`
- `src/pages/experience/index.astro`
- `src/pages/cv/index.astro`
- `src/content/projects/jolly-match-3.md`
- `src/content/projects/component-ability-system.md`
- `src/content/projects/ar-language-lab.md`
- `src/content/projects/blue-light-epic.md`
- `src/content/projects/tetris-sudocu.md`
- `ProjectDocs/Portfolio/AuditReport.md` (created)
- `ProjectDocs/Portfolio/RefinementReport.md` (created)

---

## 3. Confirmed Developer Clarifications

1. **Avantaj Prim S.R.L End Date (`05/2023 – 06/2026`):** Confirmed by developer.
2. **Download Figures (`100k+` for Jolly Match 3):** Confirmed by developer.
3. **Skill Tier Classification:** Confirmed by developer, with `Unity 6 (6000.x)` and `Addressables & Asset Management` moved to **Production Experience** in `src/data/skills.ts` and `src/pages/cv/index.astro`.
4. **AR Language Lab Repository URL:** Updated to `https://github.com/superxr-upsc/ar-language-lab` per developer confirmation.

---

## 4. Verification & Test Results

- **`npm run format` / `npm run format:check`:** Passed.
- **`npm run check` (`astro check`):** Passed — `0 errors, 0 warnings, 0 hints` across 32 files.
- **`npm run lint` (`eslint .`):** Passed — `0 errors`.
- **`npm run build` (`astro build`):** Passed — `10 page(s) built` to `dist/`.
- **Removed References Grep:** Verified `Jolly Battle`, `Jigsaw`, `1M+`, `GC-free`, `60 FPS`, `og-default.png`, and `Active LiveOps` are absent from `src/` (only `com.jollyco.jollybattlematch3` package ID remains in `jolly-match-3.md`).
- **Local Preview Browser Inspection (`http://localhost:4321/` at `1280x800` and `375x812`):**
  - Inspected `/`, `/projects`, `/projects/jolly-match-3`, `/experience`, and `/cv`.
  - Confirmed `0` console errors, `0` failed requests, `0` broken images, working mobile hamburger menu, styled case study headings/lists, and three distinct skill tiers on `/experience`.
  - Discovered and fixed a `min-w-0` flexbox clipping issue on the video card header in `ProjectMediaShowcase.astro` at `375px` width.

---

## 5. Remaining P1 / P2 Items & Next Steps

- **P2 (Optional):** Remove unused assets/files if desired (`src/content/ai-case-studies/`, `src/components/ai/`, `public/images/garden-gate.webp`, `skyline-night.webp`, `vending-machine.webp`, `avatar.jpg`).
- **P2 (Optional):** Add `@astrojs/sitemap` if you want an automated `sitemap-index.xml` generated on build.
- **Next Steps:** Review the updated copy and `ProjectDocs/Portfolio/RefinementReport.md`, confirm the 4 items in Section 3, and deploy/publish when ready.
