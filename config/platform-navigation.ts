/**
 * Platform Navigation Configuration
 * 
 * Centralized navigation structure for the authenticated Platform application.
 * Supports future permissions, roles, and tenant context.
 * 
 * This configuration drives the Sidebar and Breadcrumb navigation.
 */

export interface NavItem {
  /** Unique identifier for the navigation item */
  id: string;
  /** Display label */
  label: string;
  /** Optional icon (React node or string) */
  icon?: React.ReactNode;
  /** Route path */
  path: string;
  /** Optional badge text */
  badge?: string;
  /** Child navigation items for nested menus */
  children?: NavItem[];
  /** Required roles for visibility (user must have at least one) */
  roles?: string[];
  /** Required permissions for visibility */
  permissions?: string[];
  /** Whether this item is external link */
  isExternal?: boolean;
  /** Whether item is disabled */
  disabled?: boolean;
}

export interface NavSection {
  /** Section title */
  title: string;
  /** Navigation items in this section */
  items: NavItem[];
  /** Required roles for section visibility */
  roles?: string[];
}

/**
 * Platform navigation sections
 * 
 * This is the source of truth for all platform navigation.
 * Modify this array to add/remove/reorder navigation items.
 */
export const platformNavigation: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "📊",
        path: "/dashboard",
      },
      {
        id: "workspace",
        label: "Workspace",
        icon: "🏢",
        path: "/dashboard/workspace",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        id: "tenants",
        label: "Tenants",
        icon: "🏢",
        path: "/dashboard/tenants",
        roles: ["admin", "platform_admin"],
      },
      {
        id: "users",
        label: "Users",
        icon: "👥",
        path: "/dashboard/users",
        roles: ["admin", "platform_admin"],
      },
      {
        id: "roles",
        label: "Roles & Permissions",
        icon: "🛡️",
        path: "/dashboard/roles",
        roles: ["admin", "platform_admin"],
      },
    ],
  },
  {
    title: "Configuration",
    items: [
      {
        id: "settings",
        label: "Settings",
        icon: "⚙️",
        path: "/dashboard/settings",
      },
      {
        id: "integrations",
        label: "Integrations",
        icon: "🔗",
        path: "/dashboard/integrations",
        roles: ["admin", "platform_admin", "developer"],
      },
      {
        id: "api",
        label: "API Management",
        icon: "📡",
        path: "/dashboard/api",
        roles: ["admin", "platform_admin", "developer"],
      },
    ],
  },
  {
    title: "Monitoring",
    items: [
      {
        id: "analytics",
        label: "Analytics",
        icon: "📈",
        path: "/dashboard/analytics",
        roles: ["admin", "platform_admin", "analyst"],
      },
      {
        id: "logs",
        label: "Audit Logs",
        icon: "📋",
        path: "/dashboard/logs",
        roles: ["admin", "platform_admin", "security"],
      },
      {
        id: "health",
        label: "System Health",
        icon: "💚",
        path: "/dashboard/health",
        roles: ["admin", "platform_admin", "ops"],
      },
    ],
  },
];

/**
 * Flatten navigation sections into a single array of NavItems
 * Useful for breadcrumb generation and search
 */
export function getFlatNavigation(): NavItem[] {
  return platformNavigation.flatMap((section) => section.items);
}

/**
 * Get navigation items filtered by user roles
 */
export function getNavigationForRoles(userRoles: string[]): NavSection[] {
  return platformNavigation
    .map((section) => {
      // Filter items by roles
      const filteredItems = section.items.filter((item) => {
        if (!item.roles || item.roles.length === 0) return true;
        return item.roles.some((role) => userRoles.includes(role));
      });

      // Check if section should be visible
      if (section.roles && section.roles.length > 0) {
        const hasSectionAccess = section.roles.some((role) => userRoles.includes(role));
        if (!hasSectionAccess) return null;
      }

      if (filteredItems.length === 0) return null;

      return { ...section, items: filteredItems };
    })
    .filter((section): section is NavSection => section !== null);
}

/**
 * Get breadcrumb items for a given path
 */
export function getBreadcrumbsForPath(path: string): Array<{ label: string; href: string }> {
  const items = getFlatNavigation();
  
  // Find matching item
  const matchedItem = items.find((item) => {
    if (item.path === path) return true;
    if (item.children) {
      return item.children.some((child) => child.path === path);
    }
    return false;
  });

  if (!matchedItem) {
    return [{ label: "Dashboard", href: "/dashboard" }];
  }

  // Build breadcrumb trail
  const breadcrumbs = [{ label: "Dashboard", href: "/dashboard" }];
  
  if (matchedItem.path !== "/dashboard") {
    breadcrumbs.push({ label: matchedItem.label, href: matchedItem.path });
  }

  return breadcrumbs;
}

/**
 * Get navigation item by ID
 */
export function getNavItemById(id: string): NavItem | undefined {
  const items = getFlatNavigation();
  return items.find((item) => item.id === id);
}

/**
 * Check if a path is a valid navigation path
 */
export function isValidNavPath(path: string): boolean {
  const items = getFlatNavigation();
  return items.some((item) => item.path === path || item.children?.some((child) => child.path === path));
}