# Scripts

Planned command-line tooling:

- Validate site and feature configuration.
- Check referenced local assets and reject path traversal.
- Scaffold a client project from a selected template.
- Copy only approved modules and assets.
- Generate dependency manifests, README, and `.env.example`.
- Run validations and a production build before export.

Client generation is not implemented yet. Scripts must fail clearly on unsupported configuration rather than silently produce a partial project.
