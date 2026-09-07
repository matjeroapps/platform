"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Badge } from "@matjerhub/ui-sdk";
import { headerNavigation, portalNavigation } from "@/config/navigation";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";

export function PlatformNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-decoration-none">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d5c46] text-white font-extrabold text-lg shadow-sm">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
                Matjer<span className="text-[#0d5c46]">Hub</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest -mt-1">
                Commerce Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {headerNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[#0d5c46] bg-emerald-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />

            <Link href="/login">
              <Button variant="outline" size="sm" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                Sign In
              </Button>
            </Link>

            <Link href="/sellers">
              <Button variant="primary" size="sm" className="bg-[#0d5c46] hover:bg-[#083b2c] text-white shadow-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-slate-200 bg-white px-2 space-y-2 animate-in slide-in-from-top-2">
            {headerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 rounded-md hover:bg-slate-50"
              >
                {item.title}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-center">
                  Portal Sign In
                </Button>
              </Link>
              <Link href="/sellers" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full justify-center bg-[#0d5c46]">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
