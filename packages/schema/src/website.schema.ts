import { z } from "zod";
import { PageSchema } from "./page.schema";
import { ThemeConfigSchema } from "./theme.schema";

export const WebsiteConfigSchema = z.object({
  schemaVersion: z.literal(1),
  site: z.object({
    name: z.string().trim().min(1),
    url: z.string().url(),
    locale: z.string().min(2).default("en"),
  }),
  theme: ThemeConfigSchema.default({ preset: "modern" }),
  pages: z.array(PageSchema).min(1),
});

export type WebsiteConfig = z.infer<typeof WebsiteConfigSchema>;
export type WebsiteConfigInput = z.input<typeof WebsiteConfigSchema>;
