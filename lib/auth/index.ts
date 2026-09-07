/**
 * Authentication Module
 * 
 * Central export for all authentication-related utilities.
 * Provides Zitadel OIDC integration, session management, and authorization guards.
 */

export * from "./zitadel";
export * from "./session";

// Export guards with explicit names to avoid conflicts
export { 
  requireAuth as requireAuthGuard,
  requireRole,
  requireTenant,
  authorize,
  getOptionalUser,
  getAuthenticatedSession,
  getUserRoles,
  checkRole,
  checkAnyRole,
  checkTenant,
} from "./guards";