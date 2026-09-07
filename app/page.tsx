import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { PlatformNavbar } from "@/components/marketing/PlatformNavbar";
import { PlatformFooter } from "@/components/marketing/PlatformFooter";
import { HeroSection } from "@/components/marketing/HeroSection";
import { ValuePropSection } from "@/components/marketing/ValuePropSection";
import { ComplianceOverview } from "@/components/marketing/ComplianceOverview";
import { ResourcePlaybooks } from "@/components/marketing/ResourcePlaybooks";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "MatjerHub — Unified Cross-Border Commerce Platform",
  description:
    "Institutional cross-border commerce infrastructure connecting regional suppliers, factories, dropshippers, and merchants across Saudi Arabia, Egypt, UAE, and GCC.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff]">
      <PlatformNavbar />
      <main className="flex-1">
        <HeroSection />
        <ValuePropSection />
        <ComplianceOverview />
        <ResourcePlaybooks />
        <CTASection />
      </main>
      <PlatformFooter />
    </div>
  );
}
