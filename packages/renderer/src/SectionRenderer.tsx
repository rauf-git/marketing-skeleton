import type { ReactNode } from "react";
import type { Section } from "@marketing-skeleton/schema";
import { CtaBand, FeatureGrid, HeroSplit } from "@marketing-skeleton/sections";

export function renderSection(section: Section): ReactNode {
  switch (section.type) {
    case "hero.split":
      return <HeroSplit key={section.id} section={section} />;
    case "features.grid":
      return <FeatureGrid key={section.id} section={section} />;
    case "cta.band":
      return <CtaBand key={section.id} section={section} />;
    default: {
      const unreachable: never = section;
      return unreachable;
    }
  }
}
