# Architecture

## Purpose

Marketing Skeleton is the canonical source for reusable website code. It is not intended to be a runtime dependency of deployed client sites.

## Dependency direction

```text
apps/showcase
  └── packages/renderer
        ├── packages/schema
        └── packages/sections
              └── packages/schema (types only)
```

Keep dependencies one-directional and avoid circular package dependencies.

## Configuration pipeline

1. Load a known website configuration.
2. Validate it with the Zod schema.
3. Resolve theme and registered component types.
4. Render known sections through the registry.
5. Run tests and create a production build.
6. Export the necessary source/assets into an independent client project.

A configuration is data, not executable code. A `type` field may select only an explicit registry entry.

## Planned modules

- `core`: shared types and pure utilities.
- `schema`: versioned website/page/section/theme contracts and migrations.
- `renderer`: safe mapping from validated configuration to approved components.
- `ui`: accessible design primitives.
- `sections`: complete reusable content sections.
- `layouts`: header/footer/navigation/page layouts.
- `themes`: tokens and theme presets.
- `features`: optional SEO, forms, search, blog, booking and related behavior.
- `content`: content-provider contracts and static provider.
- `integrations`: provider-specific CMS, email, analytics, storage, CRM and payment adapters.
- `templates`: curated starting site configurations.
- `scripts`: validation and future client scaffolding/export tooling.

Not every planned module is implemented in Phase 1. Placeholder folders or documentation do not imply production readiness.
