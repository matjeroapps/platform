import { getCurrentUser, getValidSession } from "./session";

/**
 * Authentication Guards
 * 
 * Provides server-side authentication and authorization checks.
 * These guards are designed for use in Server Components and Server Actions.
 */

export interface AuthGuardOptions {
  /** Required roles for access (user must have at least one) */
  roles?: string[];
  /** Required tenant/organization ID */
  tenantId?: string;
  /** Custom permission check function */
  hasPermission?: (user: Awaited<ReturnType<typeof getCurrentUser>>) => boolean;
}

/**
 * Check if user has required role
 */
function hasRole(user: Awaited<ReturnType<typeof getCurrentUser>>, roles: string[]): boolean {
  if (!user || !user.roles.length) return false;
  return roles.some((role) => user.roles.includes(role));
}

/**
 * Check if user belongs to required tenant
 */
function hasTenantAccess(user: Awaited<ReturnType<typeof getCurrentUser>>, tenantId: string): boolean {
  if (!user || !user.tenantId) return false;
  return user.tenantId === tenantId;
}

/**
 * Guard: Require authentication
 * Redirects to login if not authenticated
 */
export async function requireAuth(): Promise<Awaited<ReturnType<typeof getCurrentUser>>> {
  const user = await getCurrentUser();
  
  if (!user) {
    const { redirect } = await import("next/navigation");
    redirect("/login");
  }
  
  return user;
}

/**
 * Guard: Require authentication with role check
 * Redirects to login if not authenticated or unauthorized if missing role
 */
export async function requireRole(roles: string | string[]): Promise<Awaited<ReturnType<typeof getCurrentUser>>> {
  const user = await requireAuth();
  const requiredRoles = Array.isArray(roles) ? roles : [roles];
  
  if (!hasRole(user, requiredRoles)) {
    const { redirect } = await import("next/navigation");
    redirect("/unauthorized");
  }
  
  return user;
}

/**
 * Guard: Require authentication with tenant check
 * Redirects to login if not authenticated or unauthorized if wrong tenant
 */
export async function requireTenant(tenantId: string): Promise<Awaited<ReturnType<typeof getCurrentUser>>> {
  const user = await requireAuth();
  
  if (!hasTenantAccess(user, tenantId)) {
    const { redirect } = await import("next/navigation");
    redirect("/unauthorized");
  }
  
  return user;
}

/**
 * Guard: Flexible authorization with multiple checks
 */
export async function authorize(options: AuthGuardOptions = {}): Promise<Awaited<ReturnType<typeof getCurrentUser>>> {
  const user = await requireAuth();
  
  // Role check
  if (options.roles && !hasRole(user, options.roles)) {
    const { redirect } = await import("next/navigation");
    redirect("/unauthorized");
  }
  
  // Tenant check
  if (options.tenantId && !hasTenantAccess(user, options.tenantId)) {
    const { redirect } = await import("next/navigation");
    redirect("/unauthorized");
  }
  
  // Custom permission check
  if (options.hasPermission && !options.hasPermission(user)) {
    const { redirect } = await import("next/navigation");
    redirect("/unauthorized");
  }
  
  return user;
}

/**
 * Check if current user is authenticated (without redirect)
 * Returns user if authenticated, null otherwise
 */
export async function getOptionalUser(): Promise<Awaited<ReturnType<typeof getCurrentUser>>> {
  return getCurrentUser();
}

/**
 * Check if current session is valid (with token refresh)
 */
export async function getAuthenticatedSession() {
  return getValidSession();
}

/**
 * Get user's roles
 */
export async function getUserRoles(): Promise<string[]> {
  const user = await getCurrentUser();
  return user?.roles || [];
}

/**
 * Check if user has specific role
 */
export async function checkRole(role: string): Promise<boolean> {
  const user = await getCurrentUser();
  return user?.roles.includes(role) ?? false;
}

/**
 * Check if user has any of the specified roles
 */
export async function checkAnyRole(roles: string[]): Promise<boolean> {
  const user = await getCurrentUser();
  if (!user || !user.roles.length) return false;
  return roles.some((role) => user.roles.includes(role));
}

/**
 * Check if user belongs to tenant
 */
export async function checkTenant(tenantId: string): Promise<boolean> {
  const user = await getCurrentUser();
  return user?.tenantId === tenantId;
}