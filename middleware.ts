import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js Middleware for Authentication Protection
 * 
 * Protects authenticated routes and handles redirects for unauthenticated users.
 * Extensible for future roles, permissions, and tenant context.
 */

// Routes that require authentication
const PROTECTED_ROUTES = [
  "/dashboard",
  "/platform",
];

// Routes that should redirect authenticated users away (e.g., login page)
const PUBLIC_ONLY_ROUTES = [
  "/login",
];

// Routes that are always public
const PUBLIC_ROUTES = [
  "/",
  "/sellers",
  "/suppliers",
  "/integrations",
  "/compliance",
  "/pricing",
  "/resources",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/auth/callback",
  "/logout",
];

// API routes that require authentication
const PROTECTED_API_ROUTES = [
  "/api/dashboard",
  "/api/platform",
];

/**
 * Check if a path matches a protected route pattern
 */
function isProtectedRoute(path: string): boolean {
  return PROTECTED_ROUTES.some((route) => path === route || path.startsWith(route + "/"));
}

/**
 * Check if a path is a public-only route (redirects authenticated users)
 */
function isPublicOnlyRoute(path: string): boolean {
  return PUBLIC_ONLY_ROUTES.some((route) => path === route || path.startsWith(route + "/"));
}

/**
 * Check if a path is a public route
 */
function isPublicRoute(path: string): boolean {
  return PUBLIC_ROUTES.some((route) => path === route || path.startsWith(route + "/"));
}

/**
 * Check if an API route requires authentication
 */
function isProtectedApiRoute(path: string): boolean {
  return PROTECTED_API_ROUTES.some((route) => path === route || path.startsWith(route + "/"));
}

/**
 * Extract session from request cookies
 */
function getSessionFromRequest(request: NextRequest): string | null {
  return request.cookies.get("mh_session")?.value || null;
}

/**
 * Parse session from cookie value
 */
function parseSession(sessionCookie: string): { isAuthenticated: boolean; user?: unknown; expiresAt?: number } | null {
  try {
    return JSON.parse(sessionCookie);
  } catch {
    return null;
  }
}

/**
 * Check if session is valid and not expired
 */
function isSessionValid(session: { isAuthenticated: boolean; expiresAt?: number } | null): boolean {
  if (!session || !session.isAuthenticated) return false;
  if (session.expiresAt && session.expiresAt < Date.now()) return false;
  return true;
}

/**
 * Create redirect response to login with return URL
 */
function redirectToLogin(request: NextRequest, returnUrl?: string): NextResponse {
  const loginUrl = new URL("/login", request.url);
  if (returnUrl) {
    loginUrl.searchParams.set("redirect", returnUrl);
  }
  return NextResponse.redirect(loginUrl);
}

/**
 * Create redirect response to dashboard for authenticated users on public-only routes
 */
function redirectToDashboard(request: NextRequest): NextResponse {
  const dashboardUrl = new URL("/dashboard", request.url);
  return NextResponse.redirect(dashboardUrl);
}

/**
 * Middleware function
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, images, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Get session from cookie
  const sessionCookie = getSessionFromRequest(request);
  const session = sessionCookie ? parseSession(sessionCookie) : null;
  const isAuthenticated = isSessionValid(session);

  // Handle protected routes
  if (isProtectedRoute(pathname)) {
    if (!isAuthenticated) {
      // Redirect to login with return URL
      return redirectToLogin(request, pathname);
    }
    // Session exists and is valid - allow access
    return NextResponse.next();
  }

  // Handle protected API routes
  if (isProtectedApiRoute(pathname)) {
    if (!isAuthenticated) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    return NextResponse.next();
  }

  // Handle public-only routes (redirect authenticated users)
  if (isPublicOnlyRoute(pathname)) {
    if (isAuthenticated) {
      return redirectToDashboard(request);
    }
    return NextResponse.next();
  }

  // All other routes - allow access
  return NextResponse.next();
}

/**
 * Middleware configuration
 * Specifies which paths the middleware should run on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};