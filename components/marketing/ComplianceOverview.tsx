import React from "react";
import { Container, Card, Badge } from "@matjerhub/ui-sdk";

export function ComplianceOverview() {
  const complianceItems = [
    {
      title: "Saudi ZATCA E-Invoicing Integration",
      desc: "Full Phase 2 integration generating cryptographic XML e-invoices with QR code verification compliant with Kingdom regulations."
    },
    {
      title: "GCC Harmonized System (HS) Code Engine",
      desc: "Automatic tariff code assignment ensuring correct customs duty calculations across Saudi Arabia, UAE, and GCC land borders."
    },
    {
      title: "Egyptian Customs (Nafeza & ACI Protocol)",
      desc: "Pre-registration of cargo and Advanced Cargo Information (ACI) filling for seamless clearance through Alexandria & Sokhna ports."
    },
    {
      title: "Data Sovereignty & Regional Governance",
      desc: "Regional data residency protocols storing tenant commercial logs within local in-country cloud data centers (KSA / UAE / Egypt)."
    }
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="default" className="bg-[#0d5c46] text-white">
            Institutional Regulatory Compliance
          </Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            Cross-Border Compliance & Governance Framework
          </h1>
          <p className="text-slate-600 text-lg">
            MatjerHub automates complex regional trade laws, customs duties, VAT invoicing, and cross-border financial protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {complianceItems.map((item) => (
            <Card key={item.title} variant="outline" className="p-6 bg-white border-slate-200">
              <div className="space-y-2">
                <Badge variant="success" className="bg-emerald-50 text-emerald-800 border-emerald-200">Verified Protocol</Badge>
                <h3 className="font-heading font-bold text-xl text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
