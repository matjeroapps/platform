import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ResourcePlaybooks } from "@/components/marketing/ResourcePlaybooks";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "Knowledge Hub — Trade Academy & Customs Guides",
  description:
    "Explore MENA trade playbooks, cross-border customs clearance guides, and high-margin catalog sourcing strategies.",
  path: "/resources"
});

export default function ResourcesPage() {
  return (
    <>
      <ResourcePlaybooks />
      <CTASection />
    </>
  );
}
