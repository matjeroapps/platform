import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Card, Badge } from "@matjerhub/ui-sdk";

export const metadata: Metadata = constructMetadata({
  title: "Unified Portal Sign In — Zitadel Gateway",
  description:
    "Sign in to MatjerHub Seller Hub, Supplier Hub, or Admin Portal via Zitadel Single Sign-On.",
  path: "/login"
});

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d5c46] text-white font-extrabold text-xl shadow-md">
              M
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900">
              Matjer<span className="text-[#0d5c46]">Hub</span>
            </span>
          </Link>
          <p className="text-sm text-slate-600">Unified Commerce Gateway • Single Sign-On</p>
        </div>

        {/* Auth Boundary Container Card */}
        <Card variant="default" className="p-6 bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-2 text-center">
            <Badge variant="default" className="bg-[#0d5c46] text-white">Zitadel OIDC Identity</Badge>
            <h1 className="font-heading font-bold text-2xl text-slate-900">Select Portal Destination</h1>
            <p className="text-xs text-slate-500">
              Choose your role to authenticate via Zitadel Single Sign-On protocol.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="https://seller.matjerhub.com"
              className="block w-full p-4 border border-slate-200 rounded-xl hover:border-[#0d5c46] hover:bg-emerald-50/50 transition-all text-decoration-none group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-[#0d5c46]">Merchant & Seller Hub</span>
                  <span className="text-xs text-slate-500">Manage stores, SKU dropshipping & orders</span>
                </div>
                <span className="text-lg text-[#0d5c46]">→</span>
              </div>
            </a>

            <a
              href="https://supplier.matjerhub.com"
              className="block w-full p-4 border border-slate-200 rounded-xl hover:border-sky-600 hover:bg-sky-50/50 transition-all text-decoration-none group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-sky-700">Factory & Supplier Portal</span>
                  <span className="text-xs text-slate-500">Publish wholesale catalog & manage escrow</span>
                </div>
                <span className="text-lg text-sky-700">→</span>
              </div>
            </a>

            <a
              href="https://admin.matjerhub.com"
              className="block w-full p-4 border border-slate-200 rounded-xl hover:border-purple-600 hover:bg-purple-50/50 transition-all text-decoration-none group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-purple-700">Platform Admin Portal</span>
                  <span className="text-xs text-slate-500">Platform operations & compliance control</span>
                </div>
                <span className="text-lg text-purple-700">→</span>
              </div>
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-900">
              ← Return to Public Platform Website
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
