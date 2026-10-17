import { z } from "zod";

export const ThemeConfigSchema = z.object({
  preset: z.enum(["modern", "editorial", "corporate", "minimal", "bold"]).default("modern"),
  colors: z.object({
    primary: z.string().optional(),
    accent: z.string().optional(),
    background: z.string().optional(),
    foreground: z.string().optional(),
  }).optional(),
});

export type ThemeConfig = z.infer<typeof ThemeConfigSchema>;
