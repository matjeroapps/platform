import React from "react";
import Link from "next/link";
import { Container, Card, Button, Badge } from "@matjerhub/ui-sdk";

export function SellersHero() {
  const sellerFeatures = [
    {
      title: "1-Click Product Sourcing",
      desc: "Instantly import catalog items from verified suppliers into your store with pre-calculated profit margins."
    },
    {
      title: "Automated Multi-Channel Routing",
      desc: "Received orders automatically trigger supplier fulfillment without manual CSV exports."
    },
    {
      title: "Real-Time Stock Synchronization",
      desc: "Prevent overselling with 10-second stock level polling across Salla, Zid, and Shopify."
    },
    {
      title: "Guaranteed Escrow Protection",
      desc: "Funds are released to suppliers only after valid regional tracking and customs clearance."
    }
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="success" className="bg-emerald-100 text-[#0d5c46] border-emerald-300">
            For Merchants & Dropshippers
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            High-Margin Commerce Engine for MENA Sellers
          </h1>
          <p className="text-slate-600 text-lg">
            Scale your online store across Saudi Arabia, UAE, and Egypt with zero inventory holding risk and instant access to thousands of verified wholesale products.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg" variant="primary" className="bg-[#0d5c46] text-white hover:bg-[#083b2c]">
                Launch Seller Account →
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {sellerFeatures.map((feat) => (
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
