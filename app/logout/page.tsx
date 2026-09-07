import { clearSession, getZitadelConfig, getZitadelEndpoints, getLogoutUrl } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Logout Route
 * 
 * Clears the local session and redirects to Zitadel for global logout.
 */

export const dynamic = "force-dynamic";

export default async function LogoutPage() {
  // Clear local session
  await clearSession();

  // Get Zitadel logout URL
  const config = getZitadelConfig();
  const endpoints = getZitadelEndpoints(config);
  const logoutUrl = getLogoutUrl(config, endpoints);

  // Redirect to Zitadel logout
  redirect(logoutUrl);
}