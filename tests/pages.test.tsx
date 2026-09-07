import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HomePage from "@/app/page";
import SellersPage from "@/app/(marketing)/sellers/page";
import SuppliersPage from "@/app/(marketing)/suppliers/page";
import PricingPage from "@/app/(marketing)/pricing/page";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/"
}));

describe("Platform Website Pages Rendering", () => {
  it("renders HomePage with main hero title and navbar", () => {
    render(<HomePage />);
    expect(screen.getByText(/Institutional Cross-Border Commerce Infrastructure/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Matjer/i).length).toBeGreaterThan(0);
  });

  it("renders SellersPage with high-margin commerce engine headline", () => {
    render(<SellersPage />);
    expect(screen.getByText(/High-Margin Commerce Engine for MENA Sellers/i)).toBeInTheDocument();
  });

  it("renders SuppliersPage with wholesale network title", () => {
    render(<SuppliersPage />);
    expect(screen.getByText(/Regional Wholesale & Distribution Network/i)).toBeInTheDocument();
  });

  it("renders PricingPage with transparent commerce plans", () => {
    render(<PricingPage />);
    expect(screen.getByText(/Simple, Transparent Commerce Plans/i)).toBeInTheDocument();
  });
});
