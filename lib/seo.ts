import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  path?: string;
  keywords?: string[];
}

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  path = "",
  keywords = [
    "MatjerHub",
    "MENA E-Commerce",
    "Cross-Border Dropshipping",
    "Regional B2B Wholesale",
    "GCC Commerce Escrow",
    "Saudi Arabia Commerce",
    "Egypt Commerce Platform",
    "UAE Wholesale Distribution"
  ]
}: ConstructMetadataProps = {}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`
    },
    description,
    keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        en: `${url}?lang=en`,
        ar: `${url}?lang=ar`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@matjerhub"
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}
