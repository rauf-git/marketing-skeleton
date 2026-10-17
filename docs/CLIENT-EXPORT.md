# Client export contract

## Desired result

Every generated client project is a self-contained repository with its own source, configuration, assets, dependencies, environment variable examples, and deployment notes. It must not import source files from this master repository at runtime.

## Export inputs

- Selected template
- Validated site configuration and page/section data
- Theme and brand tokens
- Selected optional features and integration adapters
- Client-provided assets
- Deployment target and any explicitly configured build settings

## Export checks

1. Validate configuration before writing files.
2. Reject unknown section types, unsupported versions, unsafe paths, and unregistered features.
3. Copy only declared files/assets; protect against path traversal and overwrites of generated configuration.
4. Generate a minimal dependency set.
5. Write `.env.example`, never real credentials.
6. Run lint, type checks, tests, and production build.
7. Scan generated files for likely secrets and unresolved placeholders.
8. Output a README and deployment checklist.
9. Verify the result works without fetching code/config from the master repository.

The generator is future work. Until it exists, create client projects manually from reviewed snapshots rather than claiming automated export is available.
