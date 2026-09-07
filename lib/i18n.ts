export type Locale = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface LocaleConfig {
  locale: Locale;
  dir: Direction;
  label: string;
  nativeName: string;
}

export const locales: Record<Locale, LocaleConfig> = {
  en: {
    locale: "en",
    dir: "ltr",
    label: "English",
    nativeName: "English"
  },
  ar: {
    locale: "ar",
    dir: "rtl",
    label: "Arabic",
    nativeName: "العربية"
  }
};

export const dictionaries = {
  en: {
    heroTitle: "Sovereign Cross-Border Commerce Engine for MENA",
    heroSubtitle:
      "Empowering regional factories, wholesale suppliers, and high-volume merchants with unified inventory sync, automated escrow, and cross-border customs clearance.",
    getStarted: "Get Started Now",
    explorePlatform: "Explore Platform",
    forSellers: "For Merchants & Sellers",
    forSuppliers: "For Factories & Suppliers",
    pricing: "Pricing Plans",
    integrations: "Integrations & APIs",
    compliance: "Trade Compliance",
    resources: "Knowledge Hub",
    login: "Portal Sign In",
    copyright: "© 2026 MatjerHub Technologies Inc. All rights reserved."
  },
  ar: {
    heroTitle: "محرك التجارة الإقليمية الموحدة والدروبشيبينغ عبر الحدود في الشرق الأوسط",
    heroSubtitle: "تمكين المصانع والموردين والتجار في السعودية ومصر والإمارات من ربط المخزون، والضمان المالي، والتخليص الجمركي التلقائي.",
    getStarted: "ابدأ الآن",
    explorePlatform: "استكشف المنصة",
    forSellers: "للتجار والدروبشيبرز",
    forSuppliers: "للمصانع والموردين",
    pricing: "باقات الأسعار",
    integrations: "التكاملات والربط",
    compliance: "الامتثال والتخليص الجمركي",
    resources: "مركز المعرفة والتعليم",
    login: "تسجيل الدخول",
    copyright: "© 2026 جميع الحقوق محفوظة لشركة متجر هب تقنيات التجارة."
  }
};

export function getDirection(locale: Locale): Direction {
  return locales[locale]?.dir || "ltr";
}
