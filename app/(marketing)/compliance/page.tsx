import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ComplianceOverview } from "@/components/marketing/ComplianceOverview";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "Cross-Border Compliance — Regional Regulatory Governance",
  description:
    "Automate Saudi ZATCA e-invoicing, GCC harmonized customs tariffs, Egyptian Nafeza ACI filling, and regional data residency compliance.",
  path: "/compliance"
});

export default function CompliancePage() {
  return (
    <>
      <ComplianceOverview />
      <CTASection />
    </>
  );
}
