import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container, Card, Badge } from "@matjerhub/ui-sdk";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy & Data Governance Protocol",
  description:
    "MatjerHub regional privacy policy, data sovereignty compliance, and tenant data protection standards.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container size="lg">
        <Card variant="outline" className="p-8 bg-white border-slate-200 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <Badge variant="default" className="bg-[#0d5c46] font-bold text-white mb-2">Legal Notice</Badge>
            <h1 className="font-heading font-extrabold text-3xl text-slate-900">Privacy Policy & Regional Data Governance</h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: September 7, 2026</p>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="font-bold text-base text-slate-900">1. Data Collection & Processing Scope</h2>
            <p>
              MatjerHub collects minimal commercial operational data required to execute cross-border dropshipping, SKU synchronization, customs clearance filings, and escrow payouts across Saudi Arabia, Egypt, and the UAE.
            </p>

            <h2 className="font-bold text-base text-slate-900">2. In-Country Data Residency</h2>
            <p>
              All merchant and factory transactions executed within the Kingdom of Saudi Arabia are stored within localized, PDPL-compliant Saudi data centers. Data collected in Egypt and UAE adheres to regional data sovereignty directives.
            </p>

            <h2 className="font-bold text-base text-slate-900">3. Third-Party Integrations</h2>
            <p>
              Commercial shipping metrics and VAT invoice data are transmitted securely via encrypted TLS 1.3 endpoints directly to licensed shipping carriers (SMSA, Aramex, Bosta) and government tax authorities (ZATCA, ETA).
            </p>

            <h2 className="font-bold text-base text-slate-900">4. User Rights</h2>
            <p>
              Tenants retain complete ownership of their product catalogs, customer delivery addresses, and financial transaction records. Data deletion requests can be initiated via the Zitadel portal account settings.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
