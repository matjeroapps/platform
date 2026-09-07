import React from "react";
import Link from "next/link";
import { Badge } from "@matjerhub/ui-sdk";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function PlatformFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0d5c46] text-white font-extrabold text-lg">
                M
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Matjer<span className="text-[#10b981]">Hub</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <Badge variant="success" className="bg-emerald-900/60 text-emerald-300 border-emerald-700">
                MENA Commerce Corridor
              </Badge>
              <Badge variant="secondary" className="bg-sky-900/60 text-sky-300 border-sky-700">
                KSA • EGY • UAE
              </Badge>
            </div>

            <div className="text-xs text-slate-400 pt-2 space-y-1">
              <p>📍 Headquarters: {siteConfig.contact.headquarters}</p>
              <p>✉️ Support: {siteConfig.contact.email}</p>
            </div>
          </div>

          {/* Navigation Link Groups */}
          {footerNavigation.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">{group.title}</h3>
              <ul className="space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>{siteConfig.author} — All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Escrow Service
            </Link>
            <Link href="/compliance" className="hover:text-white transition-colors">
              Regulatory Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
