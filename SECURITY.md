# Security policy

This repository is a starter foundation, not a security certification.

## Rules

- Never commit credentials, access tokens, private client information, or production database dumps.
- Browser-exposed variables are public. Keep private integration tokens in a server-side service or provider secret store.
- Treat all form submissions, uploads, query parameters, CMS content, and client-provided JSON as untrusted input.
- Use schema validation for configuration; never evaluate arbitrary code from configuration.
- Authentication and authorization must be enforced server-side, not only by hiding UI elements.
- Add CSRF, rate limiting, spam prevention, upload validation, and secure session handling where applicable.
- Payment integrations must follow the provider guidance and must not store raw card data.
- Report suspected vulnerabilities privately to the repository owner rather than publishing exploit details in an issue.
