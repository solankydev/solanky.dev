# solanky.dev

Source for [solanky.dev](https://solanky.dev): Deependra Solanky's personal website and blog.

The site is a single static Astro application.

## Site structure

- `/` — personal home
- `/blog/` — writing archive
- `/blog/:slug/` — articles
- `/about/` — about
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

Blog posts are Markdown files in `src/content/blog/`.

Openza pages and guides moved to [openza.org](https://openza.org/) ([openza/website](https://github.com/openza/website)). `public/_redirects` sends the old `/openza/`, `/tasks/`, `/reader/`, `/flow/`, and `/projects/<app>/` paths there, because links to them are built into released apps. Keep those redirects.

The migration scripts are repeatable snapshots of the two former publishing sources:

```sh
pnpm run import:wordpress
pnpm run import:beehiiv
```

Do not run them after editing migrated posts without reviewing the resulting changes because they overwrite files with matching slugs.

## Repository scope

This repository is public for transparency and deployment purposes. It is not a contribution-oriented project, and external pull requests or content edits are not accepted here. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licensing

The website source code and reusable software components are available under the [MIT License](./LICENSE).

Articles, screenshots, imported media, and other editorial assets are not covered by the MIT License. See [CONTENT_LICENSE.md](./CONTENT_LICENSE.md).
