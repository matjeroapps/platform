import React from "react";
import Link from "next/link";
import { Button, Card, Badge, Container } from "@matjerhub/ui-sdk";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-[#faf8ff] to-[#faf8ff] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-200/20 blur-3xl -z-10 rounded-full" />

      <Container size="xl">
        <div className="space-y-12">
          {/* Top Pill Indicator */}
          <div className="flex justify-center">
            <Badge variant="success" className="bg-emerald-100 text-[#0d5c46] border-emerald-300 px-4 py-1 font-semibold">
              ✨ Phase UI-3 • Sovereign Cross-Border Commerce Platform
            </Badge>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.15]">
              Institutional Cross-Border Commerce Infrastructure for <span className="text-[#0d5c46]">MENA</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Connecting tier-one factories in Egypt, UAE, and Saudi Arabia directly to high-margin merchants. Automated multi-channel stock sync, guaranteed escrow settlements, and cross-border customs clearance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/sellers" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto bg-[#0d5c46] hover:bg-[#083b2c] text-white px-8 py-3.5 shadow-md text-base font-semibold">
                  Launch as Seller →
                </Button>
              </Link>

              <Link href="/suppliers" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-300 text-slate-800 hover:bg-slate-50 px-8 py-3.5 text-base font-semibold">
                  Join as Factory Supplier
                </Button>
              </Link>
            </div>
          </div>

          {/* Commerce Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <Card variant="outline" className="p-4 bg-white/80 backdrop-blur-sm text-center border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-[#0d5c46]">$120M+</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Gross Trade Volume</span>
            </Card>

            <Card variant="outline" className="p-4 bg-white/80 backdrop-blur-sm text-center border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-sky-700">4,500+</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Verified Suppliers</span>
            </Card>

            <Card variant="outline" className="p-4 bg-white/80 backdrop-blur-sm text-center border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-[#10b981]">99.4%</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Customs Pass Rate</span>
            </Card>

            <Card variant="outline" className="p-4 bg-white/80 backdrop-blur-sm text-center border-slate-200">
              <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-slate-800">&lt; 48 Hours</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Regional Delivery</span>
            </Card>
          </div>

          {/* Interactive Multi-Channel Hub Node Visualization */}
          <Card variant="default" className="p-8 bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-xl overflow-hidden mt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-lg">
                <Badge variant="default" className="bg-[#0d5c46] text-white">Sell Your Way Hub Node</Badge>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  One Unified Inventory. Published Everywhere Instantly.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Publish wholesale catalog items directly to your Salla, Zid, Shopify, and TikTok Shop storefronts with automated margin protection and real-time inventory reservation.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">Shopify Sync</span>
                  <span className="px-3 py-1 bg-sky-50 text-sky-800 rounded-full border border-sky-200">Salla API</span>
                  <span className="px-3 py-1 bg-[#faf8ff] text-purple-800 rounded-full border border-purple-200">Zid Direct</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full border border-slate-200">TikTok Shop</span>
                </div>
              </div>

              {/* Node diagram representation */}
              <div className="w-full md:w-auto flex flex-col items-center justify-center p-6 bg-slate-900 rounded-xl text-white space-y-3 min-w-[280px]">
                <div className="text-xs font-mono text-emerald-400 font-semibold tracking-widest uppercase">
                  ● MatjerHub Core Engine
                </div>
                <div className="w-full bg-slate-800 p-3 rounded-lg flex items-center justify-between text-xs border border-slate-700">
                  <span>Factory Escrow Engine</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
                <div className="w-full bg-slate-800 p-3 rounded-lg flex items-center justify-between text-xs border border-slate-700">
                  <span>Cross-Border Customs API</span>
                  <span className="text-sky-400 font-bold">Verified</span>
                </div>
                <div className="w-full bg-slate-800 p-3 rounded-lg flex items-center justify-between text-xs border border-slate-700">
                  <span>Multi-Channel SKU Router</span>
                  <span className="text-[#10b981] font-bold">Synced</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
