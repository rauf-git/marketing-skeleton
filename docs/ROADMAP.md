# Roadmap

## Phase 1 — Foundation (current)

- [x] Establish repository conventions and docs
- [x] Create pnpm workspace and Vite/React showcase
- [x] Add initial Zod schemas and typed section registry
- [x] Add a basic CI workflow
- [ ] Generate and commit the pnpm lockfile after installing dependencies
- [ ] Add unit tests for schema validation and renderer behavior
- [ ] Run install, lint, typecheck, test, and build locally/CI and fix failures

## Phase 2 — Design system

- Add accessible UI primitives and visual variants.
- Add theme tokens, theme presets, navigation, layouts, and a component showcase.
- Add responsive and accessibility checks.

## Phase 3 — Template and feature catalog

- Add business, agency, portfolio, landing-page, editorial, catalog, and booking starters.
- Add SEO metadata/sitemap helpers, forms, analytics adapters, and CMS provider contracts.
- Mark provider-dependent capabilities and security requirements clearly.

## Phase 4 — Client generator

- Read a validated client blueprint.
- Copy only selected modules and assets.
- Resolve required dependencies and produce a self-contained project.
- Validate that the generated site builds without network/runtime access to this repository.
- Add regression fixtures for multiple website types.

## Phase 5 — CMS and deployment automation

- Integrate a real headless CMS or custom backend where needed.
- Add secure admin authentication/authorization only when the backend is ready.
- Add deployment scripts compatible with the chosen Hostinger plan.
- Automate repository creation and deployment only after manual generation is reliable.

## Release gate

Do not describe a feature as production-ready until its implementation, tests, security requirements, provider setup, and deployment path have been verified.
