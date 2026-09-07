import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { constructMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="WebSite" />
      </head>
      <body className="min-h-screen bg-[#faf8ff] text-[#131b2e] antialiased selection:bg-[#0d5c46] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
