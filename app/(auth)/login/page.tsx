"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Card } from "@matjerhub/ui-sdk";

/**
 * Login Page - Stitch-Based Design
 * 
 * Unified Sign-In page for MatjerHub Platform using Zitadel OIDC.
 * Based on Stitch design: "MatjerHub Sign In - Unified Commerce Gateway"
 */

interface LoginPageProps {
  searchParams: Promise<{
    error?: string;
    error_description?: string;
    redirect?: string;
  }>;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Generate PKCE code challenge
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);

      // Store code verifier in sessionStorage for callback
      sessionStorage.setItem("pkce_code_verifier", codeVerifier);

      // Generate state with redirect
      const params = await searchParams;
      const state = params.redirect || "/dashboard";
      const stateEncoded = btoa(JSON.stringify({ redirect: state, timestamp: Date.now() }));

      // Get Zitadel config
      const config = getZitadelConfig();
      const endpoints = getZitadelEndpoints(config);

      // Build authorization URL
      const authUrl = getAuthorizationUrl(config, endpoints, stateEncoded, codeChallenge);

      // Redirect to Zitadel
      window.location.href = authUrl;
    } catch (err) {
      setError("Failed to initiate sign in. Please try again.");
      setIsLoading(false);
    }
  };

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

        {/* Auth Card */}
        <Card variant="default" className="p-6 bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-2 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Zitadel OIDC Identity
            </span>
            <h1 className="font-heading font-bold text-2xl text-slate-900">Sign In to Platform</h1>
            <p className="text-xs text-slate-500">
              Authenticate via Zitadel Single Sign-On to access the MatjerHub Platform.
            </p>
          </div>

          {/* Error State */}
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm" role="alert">
              {error}
            </div>
          )}

          {/* Zitadel Sign-In Button */}
          <Button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full py-3 text-base font-medium"
            size="lg"
          >
            {isLoading ? (
              <>
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Redirecting to Zitadel...
              </>
            ) : (
              <>
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.55v-1.8c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.7-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.7 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .31.17.63.67.55C19.14 20.16 22 16.42 22 12c0-5.52-4.477-10-10-10z" />
                </svg>
                Continue with Zitadel SSO
              </>
            )}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase text-slate-400">
              <span className="bg-white px-2 text-slate-500">Or continue to portal</span>
            </div>
          </div>

          {/* Portal Links */}
          <div className="space-y-3">
            <a
              href="https://seller.matjerhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 border border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-decoration-none group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-emerald-600">Merchant & Seller Hub</span>
                  <span className="text-xs text-slate-500">Manage stores, SKU dropshipping & orders</span>
                </div>
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            <a
              href="https://supplier.matjerhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 border border-slate-200 rounded-xl hover:border-sky-500 hover:bg-sky-50/50 transition-all text-decoration-none group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-sky-600">Factory & Supplier Portal</span>
                  <span className="text-xs text-slate-500">Publish wholesale catalog & manage escrow</span>
                </div>
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            <a
              href="https://admin.matjerhub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full p-4 border border-slate-200 rounded-xl hover:border-purple-500 hover:bg-purple-50/50 transition-all text-decoration-none group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="block font-bold text-slate-900 group-hover:text-purple-600">Platform Admin Portal</span>
                  <span className="text-xs text-slate-500">Platform operations & compliance control</span>
                </div>
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
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

// Zitadel configuration (client-side)
function getZitadelConfig() {
  return {
    domain: process.env.NEXT_PUBLIC_ZITADEL_DOMAIN || "matjerhub.zitadel.cloud",
    clientId: process.env.NEXT_PUBLIC_ZITADEL_CLIENT_ID || "",
    redirectUri: `${window.location.origin}/auth/callback`,
    scopes: ["openid", "profile", "email"],
  };
}

function getZitadelEndpoints(config: ReturnType<typeof getZitadelConfig>) {
  const base = `https://${config.domain}`;
  return {
    authorization: `${base}/oauth/v2/authorize`,
  };
}

function getAuthorizationUrl(
  config: ReturnType<typeof getZitadelConfig>,
  endpoints: ReturnType<typeof getZitadelEndpoints>,
  state: string,
  codeChallenge: string
): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: config.scopes.join(" "),
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256",
  });
  return `${endpoints.authorization}?${params.toString()}`;
}

// PKCE helpers
function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

async function generateCodeChallenge(codeVerifier: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}