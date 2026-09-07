import { cookies } from "next/headers";
import { getZitadelConfig, getZitadelEndpoints, exchangeCodeForTokens, fetchUserInfo, validateIdToken } from "./zitadel";

/**
 * Session Types
 * 
 * Defines the session structure for authenticated users.
 * Compatible with Zitadel OIDC claims.
 */

export interface User {
  /** Unique user identifier (Zitadel sub claim) */
  id: string;
  /** User's email address */
  email: string;
  /** User's display name */
  name: string;
  /** Optional avatar URL */
  avatarUrl?: string;
  /** User's roles from Zitadel */
  roles: string[];
  /** Organization/tenant ID */
  tenantId?: string;
}

export interface Session {
  /** Whether the user is authenticated */
  isAuthenticated: boolean;
  /** Authenticated user data */
  user: User | null;
  /** Access token for API calls */
  accessToken: string | null;
  /** ID token for session validation */
  idToken: string | null;
  /** Refresh token for token renewal */
  refreshToken: string | null;
  /** Token expiration timestamp (ms) */
  expiresAt: number | null;
}

/**
 * Session cookie names
 */
const SESSION_COOKIE = "mh_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Get the current session from cookies
 * Server-side only - must be called in a Server Component or Server Action
 */
export async function getCurrentSession(): Promise<Session> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE);

  if (!sessionCookie?.value) {
    return createEmptySession();
  }

  try {
    const session = JSON.parse(sessionCookie.value) as Session;
    
    // Check if session is expired
    if (session.expiresAt && session.expiresAt < Date.now()) {
      return createEmptySession();
    }

    return session;
  } catch {
    return createEmptySession();
  }
}

/**
 * Get the current authenticated user
 * Server-side only - must be called in a Server Component or Server Action
 */
export async function getCurrentUser(): Promise<User | null> {
  const session = await getCurrentSession();
  return session.user;
}

/**
 * Require authentication - throws redirect if not authenticated
 * Server-side only - must be called in a Server Component or Server Action
 */
export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser();
  
  if (!user) {
    // This will be handled by middleware in production
    // For server components, we redirect
    const { redirect } = await import("next/navigation");
    redirect("/login");
  }
  
  return user!;
}

/**
 * Create a new session after successful authentication
 */
export async function createSession(
  code: string,
  codeVerifier?: string
): Promise<Session> {
  const config = getZitadelConfig();
  const endpoints = getZitadelEndpoints(config);

  // Exchange code for tokens
  const tokens = await exchangeCodeForTokens(config, endpoints, code, codeVerifier);

  // Validate ID token
  const idTokenPayload = validateIdToken(tokens.id_token);
  if (!idTokenPayload) {
    throw new Error("Invalid ID token");
  }

  // Fetch user info
  const user = await fetchUserInfo(endpoints, tokens.access_token);

  // Create session object
  const session: Session = {
    isAuthenticated: true,
    user,
    accessToken: tokens.access_token,
    idToken: tokens.id_token,
    refreshToken: tokens.refresh_token || null,
    expiresAt: tokens.expires_in ? Date.now() + tokens.expires_in * 1000 : null,
  };

  // Store session in cookie
  await setSessionCookie(session);

  return session;
}

/**
 * Clear the current session (logout)
 */
export async function clearSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

/**
 * Set session cookie
 */
async function setSessionCookie(session: Session): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

/**
 * Create an empty/unauthenticated session
 */
function createEmptySession(): Session {
  return {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    idToken: null,
    refreshToken: null,
    expiresAt: null,
  };
}

/**
 * Refresh access token using refresh token
 */
export async function refreshAccessToken(refreshToken: string): Promise<Session> {
  const config = getZitadelConfig();
  const endpoints = getZitadelEndpoints(config);

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  const response = await fetch(endpoints.token, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error("Token refresh failed");
  }

  const tokens = await response.json();

  // Get current session to preserve user data
  const currentSession = await getCurrentSession();
  
  const newSession: Session = {
    ...currentSession,
    accessToken: tokens.access_token,
    idToken: tokens.id_token,
    refreshToken: tokens.refresh_token || currentSession.refreshToken,
    expiresAt: tokens.expires_in ? Date.now() + tokens.expires_in * 1000 : null,
  };

  await setSessionCookie(newSession);
  return newSession;
}

/**
 * Get session with automatic token refresh if needed
 */
export async function getValidSession(): Promise<Session> {
  const session = await getCurrentSession();

  if (!session.isAuthenticated) {
    return session;
  }

  // Check if token needs refresh (5 min buffer)
  if (session.expiresAt && session.expiresAt - Date.now() < 5 * 60 * 1000) {
    if (session.refreshToken) {
      try {
        return await refreshAccessToken(session.refreshToken);
      } catch {
        // Refresh failed, return current session (will be handled by middleware)
        return session;
      }
    }
  }

  return session;
}