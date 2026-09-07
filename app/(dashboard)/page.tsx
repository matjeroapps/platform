import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Platform Dashboard — Internal Operations",
  noIndex: true
});

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Platform Dashboard Placeholder</h1>
      <p className="text-slate-600 mt-2">Business dashboard features reserved for future releases.</p>
    </div>
  );
}
