import { createSession } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Authentication Callback Route
 * 
 * Handles the Zitadel OIDC callback after successful authentication.
 * Exchanges authorization code for tokens and creates a session.
 */

export const dynamic = "force-dynamic";

export default async function AuthCallbackPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string; state?: string; error?: string; error_description?: string }>;
}) {
  const params = await searchParams;
  const { code, state, error, error_description } = params;

  // Handle OAuth errors
  if (error) {
    const errorUrl = new URL("/login", window.location.origin);
    errorUrl.searchParams.set("error", error);
    if (error_description) {
      errorUrl.searchParams.set("error_description", error_description);
    }
    redirect(errorUrl.toString());
  }

  // Validate required parameters
  if (!code) {
    redirect("/login?error=missing_code");
  }

  try {
    // Create session from authorization code
    await createSession(code);
  } catch (err) {
    console.error("Session creation failed:", err);
    redirect("/login?error=session_failed");
  }

  // Redirect to dashboard or return URL
  const returnUrl = state || "/dashboard";
  redirect(returnUrl);
}