# Portfolio Audit Report — Senior Unity Developer

> **Stage A Deliverable**  
> **Production URL:** `https://unity-developer-portfolio-58d.pages.dev/`  
> **Audit Scope:** Repository structure, content consistency, technical quality, UX/UI, and recruiter/engineering evaluation.

---

## 1. Repository & Architecture Summary

- **Framework & Tooling:** Astro `7.4.11` (static site generation), TypeScript (`strict`), Tailwind CSS `4.3.5` (`@tailwindcss/vite`), ESLint, Prettier, Node.js `24` (`.nvmrc`).
- **Build & Checks Baseline:** `npm run check` (0 errors, 0 warnings), `npm run lint` (pass), `npm run format:check` (pass), `npm run build` (10 static pages built in `dist/`).
- **Routes Built:**
  - `/` (`src/pages/index.astro`)
  - `/projects` (`src/pages/projects/index.astro`)
  - `/projects/[slug]` (`jolly-match-3`, `component-ability-system`, `blue-light-epic`, `ar-language-lab`, `tetris-sudocu`)
  - `/experience` (`src/pages/experience/index.astro`)
  - `/cv` (`src/pages/cv/index.astro`)
  - `/404` (`src/pages/404.astro`)
- **Content Architecture:**
  - `src/content/projects/*.md` (5 projects validated by Zod in `src/content.config.ts`)
  - `src/content/ai-case-studies/*.md` (2 files, currently unrouted/unused)
  - `src/data/experience.ts`, `src/data/skills.ts`, `src/data/site-meta.ts`
- **Strategy vs. Implementation Gaps:**
  - `ProjectDocs/Portfolio/` documents a `/ai-engineering` route and `AI Engineering` nav link, neither of which exists in `src/pages/` or `src/data/site-meta.ts`. (Instead, AI-Augmented Engineering is presented via `AISpotlight.astro` on the homepage.)
  - `src/components/ai/CodeAuditComparison.astro` and `src/components/ai/WorkflowLifecycle.astro` exist in the repository but are not rendered on any page.

---

## 2. Prioritized Audit Findings

### P0 — Critical Credibility or Functionality Issues

1. **Removed Projects Still Present (`Jolly Battle` & `Jigsaw Puzzle`)**
   - `src/data/experience.ts` (line 32): `shortSummary` for `Avantaj Prim S.R.L` explicitly names `Jolly Battle` and `Jigsaw Puzzle`.
   - `src/pages/cv/index.astro` (lines 261–285): `Live Shipped Products & Key Highlights` renders dedicated cards for `Jolly Battle` (`1M+ Downloads`) and `Jigsaw Puzzle` (`Jigsaw puzzle title by Jolly Battle`).
   - _(Note: `src/content/projects/jolly-match-3.md` line 106 contains the legitimate Google Play URL `id=com.jollyco.jollybattlematch3&hl=en`, which is Jolly Match 3's actual store ID and must be preserved.)_

2. **Contradictory / Unsourced `1M+` Download Statistics**
   - `src/data/experience.ts` (line 32) and `src/pages/cv/index.astro` (lines 143, 265) claim `1M+ downloads`, while `Jolly Match 3` is listed as `100k+ downloads`.
   - Per `ProjectDocs/Portfolio/OPEN_QUESTIONS.md` (lines 25–26), `1M+ downloads` belonged to `Jolly Battle`. With `Jolly Battle` removed from the portfolio, leaving `1M+ downloads` on `experience.ts` and `cv/index.astro` is misleading and contradicts `Jolly Match 3`'s `100k+` figure.

3. **Unverified / Overstated Performance Claims (`60 FPS` & `GC-Free`)**
   - `src/components/home/MetricsStrip.astro` (lines 9–11): Claims `60 FPS` and `GC-free game loops`.
   - `src/components/home/EngineeringPillars.astro` (lines 7, 10): Claims `maintain responsive 60 FPS performance` and `eliminating garbage collection allocations in game loops`.
   - `src/components/home/AISpotlight.astro` (line 57): Claims `zero garbage collection in performance-critical game loops`.
   - `src/data/experience.ts` (line 37): Claims `eliminating GC allocations and targeting 60 FPS`.
   - `src/pages/cv/index.astro` (line 158): Lists `GC Elimination`, `Target 60 FPS`.
   - `src/content/projects/jolly-match-3.md` (lines 21, 68, 117): Lists `eliminating GC spikes on low-end Android hardware`, `60 FPS Match-3 board mechanics`, and `Target Frame Rate: 60 FPS (Verified)`.
   - None of these claims are backed by profiling data or benchmarks in the repository, and claiming an entire game loop is "GC-free" or "60 FPS" universally across devices is technically indefensible without device-specific telemetry.

4. **Unclassified Technology Stack (Production vs. Independent / Exploring)**
   - `src/data/skills.ts` lists `Unity Engine (Unity 6...)` as `Expert`, `ECS & Entitas Framework` as `Advanced`, `Reactive Programming (R3, UniRx)` as `Advanced`, and `Dependency Injection (Zenject / Extenject, VContainer)` as `Advanced` without distinguishing commercial production experience from independent projects or exploration.
   - `src/components/home/Hero.astro` (lines 105, 117, 120) and `src/pages/cv/index.astro` (lines 158, 165, 172) similarly mix commercial production stack with independent/study tools (`Unity 6`, `ECS`, `Entitas`, `R3`, `VContainer`).

5. **Broken Markdown Typography on All Case Study Pages (`/projects/[slug]`)**
   - `src/layouts/ProjectLayout.astro` (line 259) applies `prose prose-invert prose-cyan`, but `@tailwindcss/typography` is not installed in `package.json`.
   - Inspection of `dist/_astro/*.css` confirms `.prose` rules do not exist. Consequently, all Markdown `<h2>`, `<p>`, `<ul>`, `<li>`, and `<strong>` elements inside project case studies lack heading hierarchy spacing, paragraph margins, and list bullets (due to Tailwind Preflight reset).

6. **Missing Default Open Graph Image (`/images/og-default.png`)**
   - `src/layouts/BaseLayout.astro` (line 18) sets `ogImage = '/images/og-default.png'`, but `/images/og-default.png` does not exist in `public/images/`, resulting in broken `og:image` and `twitter:image` URLs across all pages.
   - `src/layouts/ProjectLayout.astro` also does not pass `data.coverImage` as `ogImage` to `BaseLayout`.

---

### P1 — Important Improvements

1. **Ambiguous Hero Status Badge (`"Active LiveOps"`)**
   - `src/components/home/Hero.astro` (line 153) displays `Active LiveOps` over the portrait card, which can falsely imply current employment or ongoing ownership of a live commercial product.

2. **AI-Augmented Engineering Visual & Textual Dominance**
   - `AISpotlight.astro` is a full-width section (`py-20 lg:py-28`) with 4 capability cards, a philosophy box, and a full pillar in `MetricsStrip.astro` (`AI-Augmented`) plus a highlighted badge in `Hero.astro`. It should be scaled down by ~30% in visual footprint and copy weight so Unity engineering remains the clear primary identity.

3. **Case Study Technical Depth & Personal Ownership Clarity**
   - `src/content/projects/jolly-match-3.md` has only ~22 lines of Markdown body, missing concrete engineering decisions and reasoning around Match-3 architecture, A/B testing, monetization, UI/feature delivery, automated testing/CI, and technical leadership (code reviews, mentoring).
   - Several case studies need clearer separation between personal implementation, integration/maintenance, and team delivery.

4. **Canonical URL & `robots.txt` Mismatch**
   - `src/data/site-meta.ts` (line 40) and `public/robots.txt` (line 4) reference `https://unitydev-portfolio.pages.dev` instead of `https://unity-developer-portfolio-58d.pages.dev`.
   - `public/robots.txt` points to `sitemap.xml`, which is not generated by the build.
   - `astro.config.mjs` does not set `site: 'https://unity-developer-portfolio-58d.pages.dev'`, so `Astro.site` is `undefined`.

5. **Broken Anchor Link on `/projects`**
   - `src/pages/projects/index.astro` (line 40) has `<a href="#all">All Projects</a>`, but no element on the page has `id="all"`.

6. **Responsive & Touch UX Polish**
   - `src/pages/cv/index.astro`: Long contact items and sticky print bar (`top-16`) need responsive wrapping/spacing verification on `320px–375px` viewports.
   - `src/components/projects/ProjectNavigation.astro`: Right-aligned `Next Case Study` block on mobile (`sm:flex-row`) can look misaligned when stacked vertically.
   - `src/components/projects/ProjectCard.astro`: Cover images use `aspect-[21/9]`, which crops 16:9 artwork heavily; `16/9` (`aspect-video`) matches `FeaturedProjects.astro` and preserves key art framing.

---

### P2 — Optional Polish

1. **Unused Assets & Dead Code**
   - `src/content/ai-case-studies/*.md` and `src/components/ai/*.astro` are not linked from any route.
   - `public/images/avatar.jpg`, `garden-gate.webp`, `skyline-night.webp`, `vending-machine.webp` are not referenced anywhere in `src/`.
2. **Small Touch Targets & Contrast**
   - Very small `text-[10px]` / `text-[11px]` labels in `ProjectLayout.astro` and `Footer.astro` copy button could have slightly larger hit areas on mobile touch screens.

---

## 3. Recruiter, Technical Lead & Hiring Manager Evaluation

| Perspective             | Timeframe    | Current Assessment                                                                                            | Key Friction Points                                                                                                                                                                                                    |
| :---------------------- | :----------- | :------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Technical Recruiter** | 10 seconds   | **Good visual clarity**, clear Senior/Lead Unity Developer title and 6+ years experience in Hero.             | `"Active LiveOps"` badge is ambiguous; `1M+` vs `100k+` download numbers in CV/Experience look inconsistent; `"a big Naruto fan"` in `<h1>` slightly competes with the core value proposition if not balanced cleanly. |
| **Technical Lead**      | 1–2 minutes  | **Strong structure** with `Implemented vs Integrated vs Collaborative` breakdowns and live video/screenshots. | Blanket `"GC-free"` and `"60 FPS"` claims raise skepticism; `skills.ts` mixes Unity 6 / ECS / Entitas / VContainer with commercial stack; broken `.prose` styling makes case study narratives harder to scan.          |
| **Hiring Manager**      | 5–10 minutes | **Promising foundation**, especially Jolly Match 3's submodule extraction and telemetry caching.              | `jolly-match-3.md` narrative is too brief to evaluate architectural trade-offs, A/B testing, monetization, CI/CD, and mentoring depth.                                                                                 |

---

## 4. Items Requiring Developer Confirmation

1. **Avantaj Prim S.R.L End Date:** `src/data/experience.ts` lists `05/2023 – 06/2026`. Please confirm if `06/2026` is the exact end date.
2. **Download Numbers:** With `Jolly Battle` removed, `Jolly Match 3` (`100k+`) is the primary commercial download figure. Confirm if any other shipped title's download count should be referenced or if `1M+` should be completely removed.
3. **Production vs. Exploration Stack:** Confirm exact production usage of `VContainer`, `R3`, `ECS / Entitas`, and `Unity 6` (currently only `AR Language Lab` and `Tetris Sudocu` list Unity 6, and `Tetris Sudocu` uses `Zenject` + `R3`).
4. **AR Language Lab URL:** `https://github.com/igorko8f/ar-languange-lab` has `languange` spelling (returns HTTP 301 on GitHub); confirm if intentional.
