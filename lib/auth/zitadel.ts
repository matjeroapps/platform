import type { Session } from "./session";

/**
 * Zitadel Configuration
 * 
 * This module provides the Zitadel OIDC configuration for the MatjerHub Platform.
 * The identity provider is an implementation detail; the product exposes MatjerHub SSO.
 */

export interface ZitadelConfig {
  /** OIDC issuer URL (e.g., 'http://localhost:8081'). */
  issuer: string;
  /** Client ID registered in Zitadel for this application */
  clientId: string;
  /** Client secret for confidential client flows */
  clientSecret: string;
  /** Redirect URI after successful authentication */
  redirectUri: string;
  /** Post-logout redirect URI */
  postLogoutRedirectUri: string;
  /** Scopes to request during authentication */
  scopes: string[];
}

export interface ZitadelEndpoints {
  /** Authorization endpoint */
  authorization: string;
  /** Token endpoint */
  token: string;
  /** UserInfo endpoint */
  userinfo: string;
  /** End session endpoint */
  endSession: string;
  /** JWKS endpoint for token validation */
  jwks: string;
  /** Discovery document endpoint */
  discovery: string;
}

/**
 * Build Zitadel configuration from environment variables
 */
export function getZitadelConfig(): ZitadelConfig {
  const issuer = (process.env.ZITADEL_ISSUER || process.env.NEXT_PUBLIC_ZITADEL_ISSUER || "http://localhost:8081").replace(/\/$/, "");
  const clientId = process.env.ZITADEL_CLIENT_ID || process.env.NEXT_PUBLIC_ZITADEL_CLIENT_ID || "";
  const clientSecret = process.env.ZITADEL_CLIENT_SECRET || "";
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  return {
    issuer,
    clientId,
    clientSecret,
    redirectUri: `${baseUrl}/auth/callback`,
    postLogoutRedirectUri: `${baseUrl}/login`,
    scopes: ["openid", "profile", "email", "urn:zitadel:iam:org:project:id:zitadel:aud"],
  };
}

/**
 * Build OIDC endpoints from the configured issuer URL.
 */
export function getZitadelEndpoints(config: ZitadelConfig): ZitadelEndpoints {
  const base = config.issuer;
  return {
    authorization: `${base}/oauth/v2/authorize`,
    token: `${base}/oauth/v2/token`,
    userinfo: `${base}/oidc/v1/userinfo`,
    endSession: `${base}/oauth/v2/logout`,
    jwks: `${base}/oauth/v2/keys`,
    discovery: `${base}/.well-known/openid-configuration`,
  };
}

/**
 * Generate the Zitadel authorization URL for login
 */
export function getAuthorizationUrl(config: ZitadelConfig, endpoints: ZitadelEndpoints, state: string, codeChallenge?: string): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: config.scopes.join(" "),
    state,
  });

  if (codeChallenge) {
    params.append("code_challenge", codeChallenge);
    params.append("code_challenge_method", "S256");
  }

  return `${endpoints.authorization}?${params.toString()}`;
}

/**
 * Generate the Zitadel logout URL
 */
export function getLogoutUrl(config: ZitadelConfig, endpoints: ZitadelEndpoints, idTokenHint?: string): string {
  const params = new URLSearchParams({
    post_logout_redirect_uri: config.postLogoutRedirectUri,
  });

  if (idTokenHint) {
    params.append("id_token_hint", idTokenHint);
  }

  return `${endpoints.endSession}?${params.toString()}`;
}

/**
 * Exchange authorization code for tokens
 */
export async function exchangeCodeForTokens(
  config: ZitadelConfig,
  endpoints: ZitadelEndpoints,
  code: string,
  codeVerifier?: string
): Promise<{ access_token: string; id_token: string; refresh_token?: string; expires_in: number; token_type: string }> {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: config.redirectUri,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  if (codeVerifier) {
    params.append("code_verifier", codeVerifier);
  }

  const response = await fetch(endpoints.token, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(`Token exchange failed: ${error.error_description || response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch user info from Zitadel using access token
 */
export async function fetchUserInfo(endpoints: ZitadelEndpoints, accessToken: string): Promise<Session["user"]> {
  const response = await fetch(endpoints.userinfo, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`UserInfo fetch failed: ${response.statusText}`);
  }

  const data = await response.json();

  return {
    id: data.sub,
    email: data.email,
    name: data.name || data.preferred_username || "User",
    avatarUrl: data.picture,
    roles: (data["urn:zitadel:iam:org:project:roles"] as string[]) || [],
    tenantId: data["urn:zitadel:iam:org:id"] as string,
  };
}

/**
 * Validate ID token (basic validation - full validation should use JWKS)
 */
export function validateIdToken(idToken: string): { sub: string; email: string; name?: string; exp: number } | null {
  try {
    const parts = idToken.split(".");
    if (parts.length !== 3) return null;

    const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    
    // Check expiration
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      return null;
    }

    return {
      sub: payload.sub,
      email: payload.email,
      name: payload.name,
      exp: payload.exp,
    };
  } catch {
    return null;
  }
}
