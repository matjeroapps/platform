import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container, Card, Badge } from "@matjerhub/ui-sdk";
import { CTASection } from "@/components/marketing/CTASection";

export const metadata: Metadata = constructMetadata({
  title: "About Us — Building MENA's Sovereign Commerce Engine",
  description:
    "Learn about MatjerHub's mission to digitize cross-border wholesale distribution across Saudi Arabia, Egypt, and the UAE.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <div className="py-16 lg:py-24 space-y-16">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="default" className="bg-[#0d5c46] text-white">Our Mission</Badge>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
              Digitizing the MENA Trade Corridor
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              MatjerHub was founded to replace slow, fragmented offline wholesale brokers with institutional-grade digital infrastructure. We connect factory floors in Cairo and Dubai directly to digital storefronts in Riyadh and Jeddah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <Card variant="outline" className="p-6 bg-white border-slate-200">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Sovereign Focus</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Native LTR/RTL parity, local data residency, and full integration with regional tax and customs authorities.
              </p>
            </Card>

            <Card variant="outline" className="p-6 bg-white border-slate-200">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Escrow Assurance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automated payout release algorithms ensuring zero fraud and guaranteed liquidity for factories and merchants alike.
              </p>
            </Card>

            <Card variant="outline" className="p-6 bg-white border-slate-200">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Multi-Channel Velocity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Instant SKU sync across Salla, Zid, Shopify, and social commerce apps without manual inventory tracking.
              </p>
            </Card>
          </div>
        </Container>
      </div>
      <CTASection />
    </>
  );
}
