# hackbook

A static learning site for penetration testing and cybersecurity fundamentals, built with Astro and Starlight.

## Local development

Use **Node.js 24.21.0 LTS** for local development and deployment. The version is recorded in `.nvmrc` and the GitHub Pages workflow. If you use nvm and already have that Node version installed, `nvm use` selects it.

Astro 7.3.3 requires Node.js 22.12.0 or newer and npm 9.6.5 or newer; these minimums are declared in `package.json`. Node.js is installed separately from the npm dependencies. See the [Node.js downloads](https://nodejs.org/en/download) and [Astro package metadata](https://registry.npmjs.org/astro/7.3.3) for release and compatibility information.

Install the project dependencies, then start the development server:

```bash
npm install
npm run dev
```

After a dependency upgrade, `npm install` updates both `node_modules` and `package-lock.json`. Editing `package.json` alone does not install the new versions. Keep the regenerated lockfile with the dependency changes.

Open the local URL printed by Astro. English is served directly at `/`, with no language prefix or redirect page. Spanish is served at `/es/`; use the language selector to switch languages.

To build and preview the static site:

```bash
npm run build
npm run preview
```

## Beginner guide

- English: `/pentesting/`
- Spanish: `/es/pentesting/`

The guide covers prerequisites, setting up a lab, a first assessment, and writing a useful finding. Its Markdown files are `src/content/docs/pentesting/index.md` and `src/content/docs/es/pentesting/index.md`. Add related pages inside those `pentesting/` directories to include them in the sidebar automatically.

The homepages and beginner guide are translated. The Google Dorks page is currently available in English; Starlight provides fallback content for missing translations.

## Adding content

Write the English page directly inside `src/content/docs/`, then add an equivalent Spanish page at the same relative path under `src/content/docs/es/`. For example, `pentesting/index.md` and `es/pentesting/index.md` are translations of the same page. Do not add an `en/` directory: English is configured as Starlight's root locale. Every document in `src/content/docs/` must begin with YAML frontmatter:

```yaml
---
title: Page title
description: A short description of what the reader will learn.
---
```

`src/content.config.ts` applies Starlight's `docsSchema()` to the collection. A missing `title` causes `InvalidContentEntryDataError`; a Markdown heading does not replace this required frontmatter field.

## Deployment

The GitHub Pages workflow is in `.github/workflows/deploy.yml`. After dependency changes, run `npm install` and include the regenerated `package-lock.json` with the changes before deploying.
