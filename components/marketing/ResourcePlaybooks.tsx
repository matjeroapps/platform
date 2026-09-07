import React from "react";
import { Container, Card, Badge, Button } from "@matjerhub/ui-sdk";

export function ResourcePlaybooks() {
  const playbooks = [
    {
      title: "GCC Cross-Border Customs Clearance Playbook 2026",
      category: "Trade Playbook",
      desc: "Step-by-step documentation guide for exporting goods from Egyptian factories to KSA and UAE markets with zero customs delays."
    },
    {
      title: "High-Margin Dropshipping Strategy for Salla & Zid Merchants",
      category: "Seller Growth",
      desc: "How top regional sellers curate wholesale product catalogs, optimize ad campaigns, and maintain 40%+ net profit margins."
    },
    {
      title: "Factory Supplier Escrow & Risk Mitigation Guide",
      category: "Supplier Guide",
      desc: "Understanding MatjerHub's automated escrow protocol, letter of credit replacement, and guaranteed payout cycles."
    }
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="secondary" className="bg-sky-100 text-sky-800 border-sky-300">
            Trade & Academy Hub
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            Regional Trade Playbooks & Knowledge Hub
          </h1>
          <p className="text-slate-600 text-lg">
            Master cross-border trade, regional VAT regulations, and high-conversion catalog sourcing strategies with our expert playbooks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {playbooks.map((pb) => (
            <Card key={pb.title} variant="outline" className="p-6 bg-white border-slate-200 flex flex-col justify-between">
              <div className="space-y-3">
                <Badge variant="default" className="bg-[#0d5c46] text-white">{pb.category}</Badge>
                <h3 className="font-heading font-bold text-xl text-slate-900">{pb.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pb.desc}</p>
              </div>
              <div className="pt-6">
                <Button variant="outline" size="sm" className="w-full border-slate-300 text-slate-800">
                  Read Playbook →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
