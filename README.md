# Marketing Skeleton

Reusable website foundation for building independent client websites with React, Vite, and TypeScript.

> Status: Phase 1 scaffold. This repository establishes the workspace conventions and application shell. The component library, schema validation, client generator, CMS integrations, and deployment automation will be implemented incrementally.

## Goals

- Maintain reusable UI primitives, sections, layouts, themes, features, and integrations in one canonical repository.
- Start projects from validated templates and client-specific configuration.
- Generate independent client repositories that do not depend on this repository at runtime.
- Support static deployment to compatible Hostinger hosting and document requirements for services that need a backend or CMS.
- Keep optional features optional and secrets out of source control.

## Planned workspace

- `apps/showcase` — browsable component/template showcase.
- `apps/admin` — optional content management interface (future).
- `apps/preview` — website configuration preview (future).
- `packages/core` — core types and utilities.
- `packages/schema` — shared Zod schemas and migrations.
- `packages/renderer` — validated configuration-to-component rendering.
- `packages/ui` — reusable accessible primitives.
- `packages/sections` — hero, services, about, portfolio, testimonials, pricing, FAQ, contact, CTA and footer sections.
- `packages/layouts` — headers, footers, navigation and page layouts.
- `packages/themes` — design tokens and theme presets.
- `packages/features` — SEO, forms, blog, search, booking and other optional capabilities.
- `packages/content` — content-provider contracts and static content.
- `packages/integrations` — CMS, email, analytics, storage, CRM and payment adapters.
- `templates` — business, agency, portfolio, landing page, publication, commerce and booking starters.
- `scripts` — validation, asset checks and client-project scaffolding.
- `docs` — architecture, component contracts, development and deployment documentation.

## Prerequisites

- Node.js 20.19+ or 22.12+
- pnpm 9+

## Getting started

```bash
pnpm install
pnpm dev
```

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

These workspace commands will be wired up as implementation progresses. Do not treat a placeholder package as a production-ready feature.

## Architecture rules

1. Configuration is data and must be validated with Zod before rendering.
2. A configuration's `type` may select only an explicitly registered component.
3. Avoid evaluating arbitrary code from website configuration.
4. Shared modules use explicit package exports; do not import another package's internal source paths.
5. Client exports must contain the required source/assets and must build without a runtime link to this master repository.
6. Client credentials belong in provider secret stores or server-side environment variables, never committed source or browser-exposed variables.
7. Breaking configuration changes require a schema version and migration notes.
8. A folder or interface does not mean a feature is production-ready; record real integration and security requirements.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Client export contract](docs/CLIENT-EXPORT.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
