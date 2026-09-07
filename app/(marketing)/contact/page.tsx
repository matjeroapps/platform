import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container, Card, Badge, Button, Input } from "@matjerhub/ui-sdk";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us — Regional Office Locations & Enterprise Sales",
  description:
    "Get in touch with MatjerHub regional offices in Riyadh, Cairo, and Dubai or request an enterprise wholesale demo.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="default" className="bg-[#0d5c46] text-white">Get in Touch</Badge>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900">
            Contact Regional Team
          </h1>
          <p className="text-slate-600 text-lg">
            Have questions about supplier onboarding, customs protocols, or enterprise API access? Our specialists are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-2xl text-slate-900">Regional Headquarters</h2>

            <Card variant="outline" className="p-6 bg-white border-slate-200 space-y-2">
              <span className="font-bold text-slate-900">🇸🇦 Riyadh Office (KSA HQ)</span>
              <p className="text-sm text-slate-600">King Fahd Road, Digital City, Riyadh</p>
              <p className="text-xs text-emerald-800 font-semibold">Email: ksa@matjerhub.com</p>
            </Card>

            <Card variant="outline" className="p-6 bg-white border-slate-200 space-y-2">
              <span className="font-bold text-slate-900">🇪🇬 Cairo Office (North Africa Distribution)</span>
              <p className="text-sm text-slate-600">Smart Village, Building B12, Giza, Cairo</p>
              <p className="text-xs text-sky-800 font-semibold">Email: egypt@matjerhub.com</p>
            </Card>

            <Card variant="outline" className="p-6 bg-white border-slate-200 space-y-2">
              <span className="font-bold text-slate-900">🇦🇪 Dubai Office (GCC Financial Center)</span>
              <p className="text-sm text-slate-600">DIFC Innovation Hub, Gate Avenue, Dubai</p>
              <p className="text-xs text-purple-800 font-semibold">Email: uae@matjerhub.com</p>
            </Card>
          </div>

          {/* Form */}
          <Card variant="outline" className="p-6 bg-white border-slate-200 space-y-4">
            <h2 className="font-heading font-bold text-2xl text-slate-900 mb-4">Send a Message</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <Input placeholder="Ahmed Zidan" className="w-full" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email</label>
                <Input type="email" placeholder="ahmed@company.com" className="w-full" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Account Type</label>
                <Input placeholder="Seller / Supplier / Enterprise Brand" className="w-full" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-2.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d5c46]"
                  placeholder="How can we assist your commerce operations?"
                />
              </div>

              <Button variant="primary" className="w-full bg-[#0d5c46] text-white hover:bg-[#083b2c]">
                Submit Inquiry →
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
