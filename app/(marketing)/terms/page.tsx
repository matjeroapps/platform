import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container, Card, Badge } from "@matjerhub/ui-sdk";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service & Escrow Protocol Agreement",
  description:
    "MatjerHub terms of service, factory wholesale escrow rules, and regional dispute resolution framework.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container size="lg">
        <Card variant="outline" className="p-8 bg-white border-slate-200 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <Badge variant="default" className="bg-[#0d5c46] font-bold text-white mb-2">Escrow Agreement</Badge>
            <h1 className="font-heading font-extrabold text-3xl text-slate-900">Terms of Service & Escrow Protocol</h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: September 7, 2026</p>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="font-bold text-base text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing MatjerHub Platform Services or connecting storefront APIs, merchants and factory suppliers agree to be bound by these Terms of Service and Escrow Execution Protocols.
            </p>

            <h2 className="font-bold text-base text-slate-900">2. Automated Escrow Mechanism</h2>
            <p>
              When a merchant order is routed to a wholesale supplier, order funds are locked in MatjerHub Escrow. Funds are released to the supplier upon presentation of verified carrier tracking and regional customs clearance confirmation.
            </p>

            <h2 className="font-bold text-base text-slate-900">3. Product Quality & Returns</h2>
            <p>
              Suppliers warrant that wholesale products shipped comply with GCC quality standards (SASO, ESMA). Defective or non-conforming items trigger an immediate escrow refund to the merchant.
            </p>

            <h2 className="font-bold text-base text-slate-900">4. Dispute Resolution & Governing Law</h2>
            <p>
              Disputes arising under these Terms shall be governed by the laws of the Kingdom of Saudi Arabia, with commercial arbitration seated in Riyadh.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
