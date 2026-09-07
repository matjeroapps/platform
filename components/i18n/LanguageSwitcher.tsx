"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@matjerhub/ui-sdk";
import { Locale, locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("matjerhub_locale") as Locale;
    if (saved && (saved === "en" || saved === "ar")) {
      setCurrentLocale(saved);
      document.documentElement.dir = locales[saved].dir;
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLanguage = () => {
    const nextLocale: Locale = currentLocale === "en" ? "ar" : "en";
    setCurrentLocale(nextLocale);
    localStorage.setItem("matjerhub_locale", nextLocale);
    document.documentElement.dir = locales[nextLocale].dir;
    document.documentElement.lang = nextLocale;
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 font-medium text-xs border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
      aria-label="Switch Language"
    >
      <span className="w-4 h-4 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-800 text-[10px] font-bold">
        {currentLocale.toUpperCase()}
      </span>
      <span>{currentLocale === "en" ? "العربية" : "English"}</span>
    </Button>
  );
}
