import React from "react";
import Link from "next/link";
import { Container, Card, Button, Badge } from "@matjerhub/ui-sdk";

export function SuppliersHero() {
  const supplierFeatures = [
    {
      title: "Unlock Thousands of Active Sellers",
      desc: "Instantly distribute your wholesale catalog to verified e-commerce merchants across the GCC and Egypt."
    },
    {
      title: "Guaranteed Payout Escrow",
      desc: "Never worry about uncollected receivables. Customer payments are deposited into escrow before order release."
    },
    {
      title: "Automated Waybill & Customs Generation",
      desc: "Print cross-border shipping labels and commercial invoices compliant with Saudi ZATCA and Egyptian customs."
    },
    {
      title: "Bulk Inventory & Tiered Wholesale Pricing",
      desc: "Set flexible MOQ tiers, volume discounts, and seller-specific pricing structures."
    }
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="secondary" className="bg-sky-100 text-sky-800 border-sky-300">
            For Manufacturers & Factories
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            Regional Wholesale & Distribution Network
          </h1>
          <p className="text-slate-600 text-lg">
            Turn your production lines into a regional dropshipping powerhouse. Publish your inventory to thousands of verified sellers with zero credit risk.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg" variant="primary" className="bg-sky-700 text-white hover:bg-sky-800">
                Register Factory Supplier →
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {supplierFeatures.map((feat) => (
            <Card key={feat.title} variant="outline" className="p-6 bg-white border-slate-200">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
