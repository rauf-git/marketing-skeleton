# Contributing

## Working agreement

- Keep changes focused and document architectural decisions.
- Prefer configuration and documented component variants over duplicated components.
- Validate external/configuration data at boundaries.
- Add tests for schema behavior, rendering behavior, and important user interactions.
- Do not commit secrets, private client data, generated build output, or local environment files.

## Local workflow

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Before submitting changes, run the relevant checks and update documentation when behavior or public interfaces change.

## Adding a section

1. Define its versioned Zod schema in `packages/schema`.
2. Export the inferred TypeScript type.
3. Implement the accessible section in `packages/sections`.
4. Register it explicitly in `packages/renderer`.
5. Add a showcase example and tests.
6. Document props, variants, responsive behavior, asset requirements, and migration expectations.
