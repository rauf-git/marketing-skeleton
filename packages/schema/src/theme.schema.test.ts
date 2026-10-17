import { describe, expect, it } from "vitest";
import { ThemeConfigSchema } from "./theme.schema";

describe("ThemeConfigSchema", () => {
  it("rejects a theme preset not in the registry", () => {
    expect(ThemeConfigSchema.safeParse({ preset: "neon-injection" }).success).toBe(false);
  });
});
