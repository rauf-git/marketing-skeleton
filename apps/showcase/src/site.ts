import { WebsiteConfigSchema, type WebsiteConfigInput } from "@marketing-skeleton/schema";

const exampleWebsite: WebsiteConfigInput = {
  schemaVersion: 1,
  site: {
    name: "Northstar Studio",
    url: "https://example.invalid",
    locale: "en-IN",
  },
  theme: {
    preset: "modern",
    colors: {
      primary: "#8b5cf6",
      accent: "#34d399",
    },
  },
  pages: [
    {
      slug: "/",
      title: "Home",
      layout: "default",
      sections: [
        {
          id: "home-hero",
          type: "hero.split",
          version: 1,
          props: {
            eyebrow: "Your next chapter starts here",
            heading: "A sharper digital presence for ambitious brands.",
            description: "A reusable, configuration-led website foundation for teams that want thoughtful design without rebuilding every page from scratch.",
            primaryCta: { label: "Explore the system", href: "#sections" },
            secondaryCta: { label: "Read the architecture", href: "#architecture" },
            image: "",
          },
        },
        {
          id: "feature-grid",
          type: "features.grid",
          version: 1,
          props: {
            heading: "A foundation, not a one-off template.",
            description: "Compose the right building blocks, keep each client independent, and expand the system only when real needs emerge.",
            items: [
              {
                title: "Reusable by design",
                description: "Maintain shared sections, themes, layouts, and behavior in one source of truth.",
                label: "01",
              },
              {
                title: "Validated configuration",
                description: "Use typed, schema-checked site data instead of executing arbitrary configuration.",
                label: "02",
              },
              {
                title: "Independent delivery",
                description: "Generate client projects that build and deploy without a runtime dependency on this master.",
                label: "03",
              },
            ],
          },
        },
        {
          id: "closing-cta",
          type: "cta.band",
          version: 1,
          props: {
            heading: "Build once. Reuse with intention.",
            description: "Start with the foundation, validate it, and add advanced features when there is a real use case.",
            cta: { label: "View roadmap", href: "#architecture" },
          },
        },
      ],
    },
  ],
};

export const website = WebsiteConfigSchema.parse(exampleWebsite);
