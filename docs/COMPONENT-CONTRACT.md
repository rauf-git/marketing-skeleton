# Component contract

Each reusable section must document:

- Stable section `type` and schema `version`
- Zod schema and exported TypeScript type
- Required and optional props with defaults
- Responsive behavior and supported variants
- Keyboard, semantic HTML, and accessibility behavior
- Image formats, aspect ratios, and alternative-text expectations
- Events/integration requirements
- Unit or rendering tests
- Migration strategy for breaking configuration changes

Use explicit variants rather than client-specific duplicated components. Do not allow website JSON to specify an arbitrary import path or executable expression.
