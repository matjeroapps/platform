export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const headerNavigation: NavItem[] = [
  {
    title: "Sellers & Merchants",
    href: "/sellers",
    description: "High-margin dropshipping engine & multi-channel inventory sync."
  },
  {
    title: "Suppliers & Wholesale",
    href: "/suppliers",
    description: "Regional factory distribution network with automated escrow."
  },
  {
    title: "Integrations",
    href: "/integrations",
    description: "Connect Salla, Zid, Shopify, TikTok Shop & ERP systems."
  },
  {
    title: "Compliance & Customs",
    href: "/compliance",
    description: "Cross-border clearance, VAT automation & GCC trade protocols."
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Transparent platform plans for merchants and enterprise suppliers."
  },
  {
    title: "Knowledge Hub",
    href: "/resources",
    description: "Playbooks, trade academy & regional cross-border guides."
  }
];

export const portalNavigation: NavItem[] = [
  {
    title: "Sign In",
    href: "/login"
  },
  {
    title: "Seller Portal",
    href: "https://seller.matjerhub.com",
    isExternal: true
  },
  {
    title: "Supplier Portal",
    href: "https://supplier.matjerhub.com",
    isExternal: true
  }
];

export const footerNavigation: NavGroup[] = [
  {
    title: "Platform Capabilities",
    items: [
      { title: "For Merchants & Sellers", href: "/sellers" },
      { title: "For Suppliers & Factories", href: "/suppliers" },
      { title: "Multi-Channel Sync", href: "/integrations" },
      { title: "Cross-Border Escrow", href: "/compliance" },
      { title: "Platform Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Integrations & Logistics",
    items: [
      { title: "Storefront Connectors", href: "/integrations#storefronts" },
      { title: "Logistics & Carriers", href: "/integrations#logistics" },
      { title: "ERP & Accounting Sync", href: "/integrations#erp" },
      { title: "Zitadel Auth Single Sign-On", href: "/login" }
    ]
  },
  {
    title: "Resources & Regulatory",
    items: [
      { title: "Trade & Customs Academy", href: "/resources" },
      { title: "GCC Customs Playbook", href: "/resources#customs" },
      { title: "Compliance Protocol", href: "/compliance" },
      { title: "Platform Status & API", href: "/about" }
    ]
  },
  {
    title: "Company & Governance",
    items: [
      { title: "About MatjerHub", href: "/about" },
      { title: "Contact Regional Team", href: "/contact" },
      { title: "Privacy & Data Policy", href: "/privacy" },
      { title: "Terms of Escrow Service", href: "/terms" }
    ]
  }
];
