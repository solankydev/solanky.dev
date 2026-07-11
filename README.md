# solanky.dev

Source for [solanky.dev](https://solanky.dev): Deependra Solanky's personal website, blog, Openza project pages, and user guides for Openza Tasks, Reader, and Flow.

The site is a single static Astro application with one Starlight documentation instance.

## Site structure

- `/` — personal home
- `/blog/` — writing archive
- `/blog/:slug/` — articles
- `/projects/` — personal projects
- `/openza/` — Openza
- `/openza/tasks/` — Tasks and its user guide
- `/openza/reader/` — Reader and its user guide
- `/openza/flow/` — Flow and its user guide
- `/rss.xml` — article feed

## Development

Requires Node.js 22.12 or newer and pnpm.

```sh
pnpm install
pnpm dev
pnpm build
```

The production build is written to `dist/` and can be deployed as a static site to Cloudflare Pages.

## Content

Blog posts are Markdown files in `src/content/blog/`. Openza user guides are in `src/content/docs/openza/` and are rendered by Starlight.

The migration scripts are repeatable snapshots of the two former publishing sources:

```sh
pnpm run import:wordpress
pnpm run import:beehiiv
```

Do not run them after editing migrated posts without reviewing the resulting changes because they overwrite files with matching slugs.

## Repository scope

The Openza application source remains in the separate Tasks, Reader, and Flow repositories. This repository owns the public website and user-facing documentation only.

## Licensing

The website code is available under the [MIT License](./LICENSE).

Articles, logos, screenshots, and other editorial or brand assets are not covered by the MIT License. See [CONTENT_LICENSE.md](./CONTENT_LICENSE.md).