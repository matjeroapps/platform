import React from "react";
import { Container, Card, Badge } from "@matjerhub/ui-sdk";

export function ValuePropSection() {
  const valueProps = [
    {
      badge: "Sourcing & Wholesale",
      title: "Direct Factory Wholesale Pricing",
      description: "Bypass intermediary agents. Source verified products directly from licensed Egyptian and Gulf manufacturers with clear tiered MOQs.",
      icon: "🏭"
    },
    {
      badge: "Financial Escrow",
      title: "Automated Escrow & Settlement",
      description: "Merchant capital and supplier payouts are held safely in escrow until cross-border shipment and tracking confirmation.",
      icon: "🛡️"
    },
    {
      badge: "Cross-Border Logistics",
      title: "Automated Customs Clearance",
      description: "Pre-integrated VAT clearance, harmonized code classification, and automated documentation for KSA, Egypt, and UAE.",
      icon: "✈️"
    },
    {
      badge: "Multi-Storefront Sync",
      title: "Zero-Stock Dropshipping Engine",
      description: "Push supplier items directly into your Salla, Zid, or Shopify stores. Orders automatically route to suppliers for fulfillment.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="secondary" className="bg-sky-100 text-sky-800 border-sky-300">
            Engineered for Regional Scale
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            Why High-Growth Commerce Brands Choose MatjerHub
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A institutional platform built specifically for the MENA trade corridor, replacing fragmented manual dropshipping with automated precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueProps.map((item) => (
            <Card key={item.title} variant="outline" className="p-6 bg-[#faf8ff] border-slate-200 card-hover-effect">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-slate-200 text-2xl shadow-sm">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <Badge variant="default" className="bg-[#0d5c46] text-white">
                    {item.badge}
                  </Badge>
                  <h3 className="font-heading font-bold text-xl text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
