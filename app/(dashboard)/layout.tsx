"use client";

import React from "react";
import { UnauthorizedState } from "@matjerhub/ui-sdk";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Authentication boundary simulation (Zitadel OIDC compatibility)
  const isAuthenticated = false; // Boundary check

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8ff] p-6">
        <div className="max-w-md w-full">
          <UnauthorizedState
            title="Authentication Required"
            message="Please sign in via Zitadel Single Sign-On to access platform dashboard analytics."
            onSignIn={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/login";
              }
            }}
          />
        </div>
      </div>
    );
  }

  return <div className="min-h-screen bg-slate-50">{children}</div>;
}
