import React from "react";
import { siteConfig } from "@/config/site";

export interface StructuredDataProps {
  type?: "Organization" | "WebSite" | "SoftwareApplication" | "Product";
  data?: Record<string, unknown>;
}

export function StructuredData({ type = "Organization", data }: StructuredDataProps) {
  let schemaData: Record<string, unknown> = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.svg`,
      description: siteConfig.description,
      sameAs: [siteConfig.links.github, siteConfig.links.twitter, siteConfig.links.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressCountry: "SA"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        email: siteConfig.contact.email,
        availableLanguage: ["English", "Arabic"]
      }
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };
  } else if (type === "SoftwareApplication") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      operatingSystem: "Web",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "0",
        highPrice: "299"
      }
    };
  }

  if (data) {
    schemaData = { ...schemaData, ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
