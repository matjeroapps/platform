import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sellers",
    "/suppliers",
    "/pricing",
    "/integrations",
    "/compliance",
    "/resources",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
    alternates: {
      languages: {
        en: `${siteConfig.url}${route}?lang=en`,
        ar: `${siteConfig.url}${route}?lang=ar`
      }
    }
  }));
}
