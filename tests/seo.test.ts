import { describe, it, expect } from "vitest";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("SEO Foundation & Metadata Validation", () => {
  it("generates correct metadata with canonical URL and OpenGraph tags", () => {
    const meta = constructMetadata({
      title: "Test Platform Page",
      description: "Test description for MatjerHub platform",
      path: "/sellers"
    });

    expect(meta.title).toEqual({
      default: "Test Platform Page",
      template: "%s | MatjerHub"
    });
    expect(meta.description).toBe("Test description for MatjerHub platform");
    expect(meta.alternates?.canonical).toBe(`${siteConfig.url}/sellers`);
  });

  it("generates valid sitemap entries for public platform routes", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(10);
    const urls = entries.map((e) => e.url);
    expect(urls).toContain(`${siteConfig.url}`);
    expect(urls).toContain(`${siteConfig.url}/sellers`);
    expect(urls).toContain(`${siteConfig.url}/suppliers`);
    expect(urls).toContain(`${siteConfig.url}/pricing`);
    expect(urls).toContain(`${siteConfig.url}/integrations`);
  });

  it("generates valid robots disallow rules", () => {
    const r = robots();
    expect(r.sitemap).toBe(`${siteConfig.url}/sitemap.xml`);
    expect(r.rules).toBeDefined();
  });
});
