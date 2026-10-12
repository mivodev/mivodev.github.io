<div align="center">

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="./public/brand/logo-wordmark-black.svg"
  />
  <img
    src="./public/brand/logo-wordmark-white.svg"
    alt="MIVO — Mikrotik Voucher Management"
    width="420"
  />
</picture>

### Mikrotik Voucher Management

**Modern, lightweight, and efficient voucher management for MikroTik.**

[![Next.js](https://img.shields.io/badge/Website-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Fumadocs](https://img.shields.io/badge/Documentation-Fumadocs-5B6CFF?style=for-the-badge)](https://fumadocs.dev)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

---

_The official documentation website for MIVO, built with Next.js and Fumadocs._

</div>

---

This repository contains the MIVO documentation website, built with
[Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev), with
[static export](https://nextjs.org/docs/app/guides/static-exports) configured.

## Run locally

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

### Site URL configuration

Set `NEXT_PUBLIC_SITE_URL` to the public origin of the deployed site. It is used
as the metadata base URL; local development defaults to `http://localhost:3000`.
Set it as a GitHub Actions variable for deployments. The registry endpoint can
be configured separately with `NEXT_PUBLIC_REGISTRY_API_BASE_URL`.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

Collections are defined with the [Macro API](https://fumadocs.dev/docs/mdx/macro) in `lib/source.ts`.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
