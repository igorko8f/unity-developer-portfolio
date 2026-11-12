# Unity Developer Portfolio

Personal portfolio website of a Senior / Lead Unity Developer, showcasing selected projects, technical expertise and professional experience.

## Tech stack

- [Astro](https://astro.build) — static site generation
- [TypeScript](https://www.typescriptlang.org) — strict mode
- [Tailwind CSS 4](https://tailwindcss.com) — styling
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) — code quality
- GitHub Actions — continuous integration

## Requirements

- Node.js 24 LTS, latest patch (version defined in `.nvmrc`; run `nvm use` if you use nvm)
- npm

## Getting started

```sh
git clone <repository-url>
cd unity-developer-portfolio
npm install
npm run dev
```

The development server runs at http://localhost:4321.

## Commands

| Command                | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the local development server        |
| `npm run build`        | Build the production site to `dist/`      |
| `npm run preview`      | Preview the production build locally      |
| `npm run check`        | Run Astro and TypeScript diagnostics      |
| `npm run lint`         | Lint the code with ESLint                 |
| `npm run format`       | Format all files with Prettier            |
| `npm run format:check` | Verify formatting without writing changes |

## Build

```sh
npm ci
npm run build
```

The static output is generated in `dist/` and can be served by any static hosting provider.

## Project structure

```text
src/
  components/   Reusable Astro components
  content/      Content collections (projects)
  layouts/      Page layouts
  pages/        File-based routes
  styles/       Global styles and Tailwind entry point
  utils/        TypeScript helpers
public/         Static assets served as-is
```
