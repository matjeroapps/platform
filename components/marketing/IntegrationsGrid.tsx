import React from "react";
import { Container, Card, Badge } from "@matjerhub/ui-sdk";

export function IntegrationsGrid() {
  const categories = [
    {
      name: "E-Commerce Storefronts",
      badge: "Storefront API",
      items: [
        { name: "Salla", status: "Native Integration", desc: "Direct stock publish and 2-way order webhooks for KSA." },
        { name: "Zid", status: "Native Integration", desc: "Automated inventory push and shipping waybill generation." },
        { name: "Shopify", status: "Official App", desc: "Seamless catalog sync & auto order fulfillment app." },
        { name: "TikTok Shop", status: "Channel Sync", desc: "Direct viral product dropshipping fulfillment." }
      ]
    },
    {
      name: "Logistics & Express Carriers",
      badge: "Logistics Router",
      items: [
        { name: "SMSA Express", status: "Cross-Border", desc: "KSA inland & cross-border last-mile delivery." },
        { name: "Aramex", status: "GCC Transit", desc: "Air express customs clearance and regional transit." },
        { name: "Bosta", status: "Egypt Inland", desc: "Same-day Cairo & Alexandria cash-on-delivery collection." },
        { name: "SPL (Saudi Post)", status: "National Network", desc: "National postal hub distribution." }
      ]
    },
    {
      name: "Finance, Escrow & ERPs",
      badge: "Institutional Sync",
      items: [
        { name: "Zitadel SSO", status: "Unified Auth", desc: "Single sign-on identity management." },
        { name: "ZATCA E-Invoicing", status: "Phase 2 Tax", desc: "Automated Saudi VAT electronic invoice XML generation." },
        { name: "Odoo / SAP ERP", status: "Enterprise Sync", desc: "Factory inventory & GL ledger synchronization." },
        { name: "PayTabs / Moyasar", status: "Gateway Escrow", desc: "Regional payment gateway payout routing." }
      ]
    }
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="default" className="bg-[#0d5c46] text-white">
            Ecosystem Integration Map
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            Connect Your Storefronts, Carriers & Enterprise ERPs
          </h1>
          <p className="text-slate-600 text-lg">
            MatjerHub acts as the central nerve system connecting regional e-commerce storefronts directly to factory logistics and accounting systems.
          </p>
        </div>

        <div className="space-y-12 mt-14">
          {categories.map((cat) => (
            <div key={cat.name} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                <h2 className="font-heading font-bold text-2xl text-slate-900">{cat.name}</h2>
                <Badge variant="secondary">{cat.badge}</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.items.map((item) => (
                  <Card key={item.name} variant="outline" className="p-4 bg-white border-slate-200">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-lg text-slate-900">{item.name}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-[#0d5c46] border border-emerald-200">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
