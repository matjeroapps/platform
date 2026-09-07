export const siteConfig = {
  name: "MatjerHub",
  title: "MatjerHub — Unified Cross-Border Commerce Platform for MENA",
  description:
    "Institutional-grade cross-border commerce infrastructure connecting regional suppliers, factories, dropshippers, and merchants across Saudi Arabia, Egypt, UAE, and GCC.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://matjerhub.com",
  ogImage: "https://matjerhub.com/og.png",
  author: "MatjerHub Commerce Inc.",
  locale: "en",
  fallbackLocale: "ar",
  supportedLocales: ["en", "ar"],
  links: {
    github: "https://github.com/matjeroapps",
    twitter: "https://twitter.com/matjerhub",
    linkedin: "https://linkedin.com/company/matjerhub",
    docs: "https://docs.matjerhub.com"
  },
  contact: {
    email: "support@matjerhub.com",
    sales: "sales@matjerhub.com",
    phone: "+966 11 000 0000",
    headquarters: "Riyadh, Kingdom of Saudi Arabia",
    offices: ["Riyadh, KSA", "Cairo, Egypt", "Dubai, UAE"]
  }
};

export type SiteConfig = typeof siteConfig;
