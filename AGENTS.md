# AGENTS.md

Instructions for AI coding agents working in this repository.

## Project

Static portfolio site for a Senior / Lead Unity Developer.
Stack: Astro 7, TypeScript (strict), Tailwind CSS 4 (`@tailwindcss/vite`), npm. Deployed as static files to Cloudflare Pages.
Node.js baseline: 24 (defined in `.nvmrc`, also used by CI).

## Local documentation (optional, read on demand)

`docs/` is **local-only and gitignored**, so it may not exist in every clone.

- If `docs/` exists, consult only the document relevant to the current task (see table below). Do not load all documents up front.
- If it does not exist, rely on this file, `README.md` and the existing code and configuration. Do not recreate the documents unless asked.
- Never commit, force-add or copy `docs/` contents into tracked files.

| Task involves                                   | Read                    |
| ----------------------------------------------- | ----------------------- |
| Scope, sections, requirements                   | `docs/PRODUCT.md`       |
| Structure, components, content, routing, assets | `docs/ARCHITECTURE.md`  |
| Visual design, styling, layout, motion          | `docs/DESIGN_SYSTEM.md` |
| Build, CI, hosting, environment variables       | `docs/DEPLOYMENT.md`    |

## Rules

- **Inspect before modifying.** Read the relevant files and existing configuration first.
- **Minimal, focused changes.** Do only what the task asks; do not implement features outside it.
- **No new dependencies without justification.** Prefer built-in Astro/Tailwind capabilities. No React or other UI frameworks, no backend.
- **Preserve existing configuration** unless a change is necessary; explain why when changing it.
- **TypeScript strict mode.** Type component props (`interface Props`); avoid `any`.
- **Reusable Astro components.** Pages stay thin and compose layouts and components.
- **Content separate from presentation.** Content lives in `src/content/` collections or typed data files, not hardcoded in components.
- **Avoid unnecessary client-side JavaScript.** Static HTML and CSS by default.
- **Accessibility and semantic HTML.** Landmarks, heading order, alt text, keyboard support, visible focus, `prefers-reduced-motion`.
- **Optimize images and assets.** Use `astro:assets` for content images; `public/` only for fixed-URL files.
- **Never put secrets or credentials in source control.**
- **Do not commit or push** unless explicitly asked.

## Commands

```sh
npm run dev           # dev server; for agents prefer: astro dev --background
npm run check         # Astro + TypeScript diagnostics
npm run lint          # ESLint
npm run format        # Prettier write (format:check to verify)
npm run build         # production build to dist/
```

Manage the background dev server with `astro dev stop`, `astro dev status` and `astro dev logs`.
Run `check`, `lint`, `format:check` and `build` before reporting a task as done.

## Astro documentation

Full documentation: https://docs.astro.build — consult the relevant guide before related work:

- [Routing, dynamic routes, middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
