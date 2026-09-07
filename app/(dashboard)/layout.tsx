"use client";

import React, { useEffect, useState } from "react";
import { DashboardLayout, NavItem, UserMenuProps } from "@matjerhub/ui-sdk";
import { getCurrentUser, requireAuth } from "@/lib/auth";
import { platformNavigation, getNavigationForRoles, getFlatNavigation, type NavSection } from "@/config/platform-navigation";

/**
 * Platform Dashboard Layout
 * 
 * Authenticated application shell using UI SDK DashboardLayout.
 * Includes sidebar, top navigation, user menu, workspace selector, and breadcrumbs.
 */

// Convert platform navigation to UI SDK NavItem format
function convertToNavItems(sections: NavSection[]): NavItem[] {
  return sections.flatMap((section) => section.items.map((item) => ({
    id: item.id,
    label: item.label,
    icon: item.icon,
    path: item.path,
    badge: item.badge,
    children: item.children?.map((child) => ({
      id: child.id,
      label: child.label,
      icon: child.icon,
      path: child.path,
      badge: child.badge,
    })),
  })));
}

interface DashboardLayoutClientProps {
  children: React.ReactNode;
}

export default function DashboardLayoutClient({ children }: DashboardLayoutClientProps) {
  const [user, setUser] = useState<UserMenuProps["user"] | null>(null);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState("/dashboard");

  // Fetch user and navigation on mount
  useEffect(() => {
    async function loadUserData() {
      try {
        // Get current user (will redirect if not authenticated)
        const userData = await getCurrentUser();
        
        if (userData) {
          setUser({
            name: userData.name,
            email: userData.email,
            role: userData.roles[0] || "User",
            avatarUrl: userData.avatarUrl,
          });

          // Filter navigation by user roles
          const filteredSections = getNavigationForRoles(userData.roles);
          setNavItems(convertToNavItems(filteredSections));
        }
      } catch (err) {
        console.error("Failed to load user data:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadUserData();

    // Listen for path changes
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#faf8ff] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#0d5c46] border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-600">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  // If no user (shouldn't happen due to middleware, but safe fallback)
  if (!user) {
    return (
      <div className="min-h-screen bg-[#faf8ff] flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Authentication Required</h2>
          <p className="text-slate-500 mt-2">Please sign in to access the platform dashboard.</p>
          <a href="/login" className="mt-4 inline-block text-emerald-600 hover:underline">Sign In</a>
        </div>
      </div>
    );
  }

  // Get breadcrumbs for current path
  const flatNav = getFlatNavigation();
  const matchedItem = flatNav.find((item) => currentPath === item.path || currentPath.startsWith(item.path + "/"));
  const breadcrumbsItems = matchedItem
    ? [
        { label: "Dashboard", href: "/dashboard" },
        { label: matchedItem.label, href: matchedItem.path },
      ]
    : [{ label: "Dashboard", href: "/dashboard" }];

  return (
    <DashboardLayout
      appTitle="MatjerHub Platform"
      navItems={navItems}
      currentPath={currentPath}
      onNavigate={(path) => window.location.href = path}
      breadcrumbsItems={breadcrumbsItems}
      workspaces={[
        { id: "platform", name: "Platform", type: "admin" },
        { id: "seller", name: "Seller Hub", type: "seller" },
        { id: "supplier", name: "Supplier Hub", type: "supplier" },
      ]}
      activeWorkspaceId="platform"
      onWorkspaceChange={(id) => console.log("Workspace changed:", id)}
      user={user}
      onSignOut={() => window.location.href = "/logout"}
      onProfileClick={() => console.log("Profile clicked")}
      onSettingsClick={() => console.log("Settings clicked")}
    >
      {children}
    </DashboardLayout>
  );
}

// Type for user data from auth
interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  roles: string[];
  tenantId?: string;
}