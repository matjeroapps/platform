import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { SuppliersHero } from "@/components/marketing/SuppliersHero";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "For Suppliers & Factories — Regional Wholesale Distribution",
  description:
    "Publish wholesale inventory to thousands of verified merchants with automated escrow payouts and cross-border customs documentation.",
  path: "/suppliers"
});

export default function SuppliersPage() {
  return (
    <>
      <SuppliersHero />
      <CTASection />
    </>
  );
}
