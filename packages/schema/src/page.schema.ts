import { z } from "zod";
import { SectionSchema } from "./section.schema";

export const PageSchema = z.object({
  slug: z.string().startsWith("/"),
  title: z.string().trim().min(1),
  layout: z.enum(["default", "wide"]).default("default"),
  sections: z.array(SectionSchema),
});

export type PageConfig = z.infer<typeof PageSchema>;
