import { describe, expect, it } from "vitest";
import { SectionSchema, WebsiteConfigSchema } from "./index";

describe("SectionSchema", () => {
  it("accepts a known versioned hero section", () => {
    const result = SectionSchema.safeParse({
      id: "hero",
      type: "hero.split",
      version: 1,
      props: {
        heading: "Make the next move",
        description: "A validated website section.",
        primaryCta: { label: "Contact", href: "/contact" },
      },
    });

    expect(result.success).toBe(true);
  });

  it("rejects unregistered section types", () => {
    const result = SectionSchema.safeParse({
      id: "custom",
      type: "arbitrary.component",
      version: 1,
      props: {},
    });

    expect(result.success).toBe(false);
  });
});

describe("WebsiteConfigSchema", () => {
  it("rejects a website with no pages", () => {
    const result = WebsiteConfigSchema.safeParse({
      schemaVersion: 1,
      site: { name: "Demo", url: "https://example.com", locale: "en-IN" },
      theme: { preset: "modern" },
      pages: [],
    });

    expect(result.success).toBe(false);
  });
});
