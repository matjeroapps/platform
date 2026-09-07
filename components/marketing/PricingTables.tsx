"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Card, Button, Badge } from "@matjerhub/ui-sdk";

export function PricingTables() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter Merchant",
      badge: "For Emerging Sellers",
      price: annual ? "$19" : "$29",
      period: "/month",
      desc: "Perfect for independent sellers starting out with cross-border dropshipping.",
      features: [
        "Up to 250 Active SKU Imports",
        "Single Storefront Sync (Salla or Zid or Shopify)",
        "Standard Cross-Border Escrow",
        "Automated Regional Waybills",
        "Email Support within 24h"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth Scaler",
      badge: "Most Popular",
      price: annual ? "$79" : "$99",
      period: "/month",
      desc: "Designed for high-volume stores expanding across Saudi Arabia and the GCC.",
      features: [
        "Up to 2,500 Active SKU Imports",
        "Unlimited Multi-Channel Sync (Salla + Zid + Shopify + TikTok)",
        "Priority Factory Wholesale Pricing Tier",
        "Automated Customs Clearance & ZATCA Invoicing",
        "Same-Day Escrow Payout Processing",
        "Dedicated Account Manager"
      ],
      cta: "Scale Now",
      popular: true
    },
    {
      name: "Enterprise Wholesale",
      badge: "For Factories & Brands",
      price: annual ? "$249" : "$299",
      period: "/month",
      desc: "Institutional distribution for manufacturers, suppliers, and enterprise retail hubs.",
      features: [
        "Unlimited Wholesale Catalog Publishing",
        "Access to 4,500+ Verified Merchant Storefronts",
        "Custom Tiered MOQ & Pricing Rules",
        "ERP Integration (Odoo, SAP, Oracle)",
        "Custom Escrow Payout Schedule",
        "24/7 SLA Guarantee & Dedicated Operations Team"
      ],
      cta: "Contact Enterprise Sales",
      popular: false
    }
  ];

  return (
    <div className="py-16 lg:py-24 space-y-12">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="success" className="bg-emerald-100 text-[#0d5c46] border-emerald-300">
            Transparent Pricing Structure
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            Simple, Transparent Commerce Plans
          </h1>
          <p className="text-slate-600 text-lg">
            No hidden transaction markups. Scale your cross-border operations with predictable subscription tiers.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-sm font-medium ${!annual ? "text-slate-900" : "text-slate-500"}`}>Monthly Billing</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-emerald-800 transition-colors duration-200 ease-in-out focus:outline-none"
              aria-label="Toggle Billing"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  annual ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-500"}`}>
              Annual Billing <span className="text-xs text-emerald-800 font-bold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.popular ? "default" : "outline"}
              className={`p-8 bg-white relative flex flex-col justify-between ${
                plan.popular ? "border-2 border-[#0d5c46] shadow-xl" : "border-slate-200"
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0d5c46] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}
                <div className="space-y-3">
                  {!plan.popular && <Badge variant="secondary">{plan.badge}</Badge>}
                  <h3 className="font-heading font-bold text-2xl text-slate-900">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-4xl text-slate-900">{plan.price}</span>
                    <span className="text-sm text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{plan.desc}</p>
                </div>

                <div className="my-6 border-t border-slate-100 pt-6 space-y-3">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Included Features:</span>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-[#0d5c46] font-bold">✓</span>
                        <span className="text-xs leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/login">
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    className={`w-full justify-center ${
                      plan.popular ? "bg-[#0d5c46] text-white hover:bg-[#083b2c]" : "border-slate-300 text-slate-800"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
