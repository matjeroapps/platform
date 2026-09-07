import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { PricingTables } from "@/components/marketing/PricingTables";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "Pricing Plans — Transparent Cross-Border Commerce Tiers",
  description:
    "Explore transparent subscription tiers for emerging merchants, high-volume dropshipping scalers, and factory wholesale networks.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <PricingTables />
      <CTASection />
    </>
  );
}
