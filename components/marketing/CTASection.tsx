import React from "react";
import Link from "next/link";
import { Container, Button, Card } from "@matjerhub/ui-sdk";

export function CTASection() {
  return (
    <section className="py-16 bg-[#faf8ff]">
      <Container size="xl">
        <Card variant="default" className="p-8 sm:p-12 bg-gradient-to-r from-[#0d5c46] via-[#083b2c] to-slate-900 text-white rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Ready to Accelerate Your Cross-Border Commerce Operations?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Join thousands of merchants, wholesale suppliers, and factory networks scaling effortlessly across Saudi Arabia, Egypt, and the UAE.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link href="/sellers">
                <Button size="lg" variant="primary" className="bg-white text-[#0d5c46] hover:bg-emerald-50 px-8 font-bold shadow-md">
                  Get Started as Seller
                </Button>
              </Link>
              <Link href="/suppliers">
                <Button size="lg" variant="outline" className="border-emerald-300 text-white hover:bg-white/10 px-8 font-bold">
                  Partner as Factory Supplier
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
