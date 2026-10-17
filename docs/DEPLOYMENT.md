# Deployment

## Static React/Vite websites

1. Install the project's dependencies.
2. Run `pnpm build` (or the generated client's documented build command).
3. Upload the generated `dist/` contents to a compatible static hosting document root.
4. Configure the domain and HTTPS in the hosting control panel.
5. Configure SPA fallback routing only when the app uses client-side routes; do not rewrite missing static assets to HTML.
6. Test the home page, nested routes, images, fonts, forms, metadata, and mobile behavior in production.

## Hostinger compatibility

The exact deployment path depends on the hosting plan and the project's runtime needs. Static hosting can serve Vite build output. A site requiring Node server rendering, server-side secrets, background jobs, or a custom API needs a compatible server/backend plan or a separately hosted service.

## Services beyond static hosting

- CMS-backed content needs a configured CMS or content API.
- Contact forms need a server-side/API endpoint or a trusted form service.
- Authentication requires a properly secured backend and database.
- Booking and commerce workflows need validated server-side business logic and provider integration.
- Never put private tokens in Vite variables exposed to browser code.

## Release checklist

- Production build succeeds.
- Correct client configuration and assets are included.
- No test credentials or development endpoints remain.
- Forms and integrations are tested end-to-end.
- Domain, HTTPS, redirects, canonical URLs, robots.txt, and sitemap are checked.
- Errors and fallback routing behave as expected.
