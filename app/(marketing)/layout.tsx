import React from "react";
import { PlatformNavbar } from "@/components/marketing/PlatformNavbar";
import { PlatformFooter } from "@/components/marketing/PlatformFooter";

export default function MarketingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff]">
      <PlatformNavbar />
      <main className="flex-1">{children}</main>
      <PlatformFooter />
    </div>
  );
}
