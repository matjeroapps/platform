import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Sign In — MatjerHub Platform",
  description: "Sign in to MatjerHub Platform via Zitadel Single Sign-On",
  path: "/login",
  noIndex: true,
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}