import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { IntegrationsGrid } from "@/components/marketing/IntegrationsGrid";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "Integrations & APIs — Connect Salla, Zid, Shopify & Logistics",
  description:
    "Pre-built native integrations for Salla, Zid, Shopify, TikTok Shop, SMSA, Aramex, ZATCA e-invoicing, and enterprise ERP systems.",
  path: "/integrations"
});

export default function IntegrationsPage() {
  return (
    <>
      <IntegrationsGrid />
      <CTASection />
    </>
  );
}
