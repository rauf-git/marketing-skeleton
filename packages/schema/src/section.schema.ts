import { z } from "zod";

const LinkSchema = z.object({
  label: z.string().trim().min(1),
  href: z.string().trim().min(1),
});

export const HeroSplitSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("hero.split"),
  version: z.literal(1),
  props: z.object({
    eyebrow: z.string().optional(),
    heading: z.string().trim().min(1),
    description: z.string().trim().min(1),
    primaryCta: LinkSchema,
    secondaryCta: LinkSchema.optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const FeatureGridSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("features.grid"),
  version: z.literal(1),
  props: z.object({
    heading: z.string().trim().min(1),
    description: z.string().optional(),
    items: z.array(z.object({
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),
      label: z.string().optional(),
    })).min(1),
  }),
});

export const CtaBandSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal("cta.band"),
  version: z.literal(1),
  props: z.object({
    heading: z.string().trim().min(1),
    description: z.string().trim().min(1),
    cta: LinkSchema,
  }),
});

export const SectionSchema = z.discriminatedUnion("type", [
  HeroSplitSectionSchema,
  FeatureGridSectionSchema,
  CtaBandSectionSchema,
]);

export type HeroSplitSection = z.infer<typeof HeroSplitSectionSchema>;
export type FeatureGridSection = z.infer<typeof FeatureGridSectionSchema>;
export type CtaBandSection = z.infer<typeof CtaBandSectionSchema>;
export type Section = z.infer<typeof SectionSchema>;
