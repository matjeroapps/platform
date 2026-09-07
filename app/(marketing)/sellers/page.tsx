import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SellersHero } from "@/components/marketing/SellersHero";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "For Sellers & Merchants — High-Margin Commerce Engine",
  description:
    "Scale your online store with zero inventory risk. Connect Salla, Zid, and Shopify to verified wholesale suppliers across Saudi Arabia, UAE, and Egypt.",
  path: "/sellers"
});

export default function SellersPage() {
  return (
    <>
      <SellersHero />
      <CTASection />
    </>
  );
}
