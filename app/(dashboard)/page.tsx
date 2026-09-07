import React from "react";
import { getCurrentUser } from "@/lib/auth";
import { Card, Badge } from "@matjerhub/ui-sdk";
import { PageHeader, Container, Grid, Stack } from "@matjerhub/ui-sdk";

/**
 * Platform Dashboard Page
 * 
 * Main dashboard view for authenticated platform users.
 * Shows platform overview, quick stats, and navigation to key areas.
 */

export const metadata = {
  title: "Dashboard — MatjerHub Platform",
  description: "Platform operations dashboard",
};

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType = "neutral", icon }: StatCardProps) {
  return (
    <Card variant="default" className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-1 text-3xl font-bold text-slate-900">{value}</p>
          {change && (
            <p className={`mt-1 text-sm font-medium ${
              changeType === "positive" ? "text-emerald-600" :
              changeType === "negative" ? "text-red-600" : "text-slate-500"
            }`}>
              {change}
            </p>
          )}
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
          {icon}
        </div>
      </div>
    </Card>
  );
}

interface QuickActionProps {
  label: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}

function QuickAction({ label, description, icon, href, variant = "secondary" }: QuickActionProps) {
  return (
    <a
      href={href}
      className={`block p-5 rounded-xl border transition-all ${
        variant === "primary"
          ? "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700"
          : "bg-white border-slate-200 hover:border-emerald-300 hover:bg-emerald-50"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${variant === "primary" ? "bg-emerald-500/20" : "bg-slate-100"}`}>
          <span className={`text-lg ${variant === "primary" ? "text-white" : "text-slate-600"}`}>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold ${variant === "primary" ? "text-white" : "text-slate-900"}`}>{label}</h3>
          <p className={`mt-1 text-sm ${variant === "primary" ? "text-emerald-100" : "text-slate-500"}`}>{description}</p>
        </div>
        <svg className={`w-5 h-5 shrink-0 ${variant === "primary" ? "text-emerald-100" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Page Header */}
        <PageHeader
          title="Platform Dashboard"
          subtitle="Overview of platform operations, tenants, and system health"
          actions={
            <a href="/dashboard/settings" className="text-sm text-emerald-600 hover:underline">
              View Settings →
            </a>
          }
        />

        {/* Stats Grid */}
        <Grid cols={4} gap="lg">
          <StatCard
            title="Active Tenants"
            value="127"
            change="+12 this month"
            changeType="positive"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
          />
          <StatCard
            title="Total Users"
            value="2,841"
            change="+234 this month"
            changeType="positive"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
          />
          <StatCard
            title="API Requests (24h)"
            value="1.2M"
            change="2.3% increase"
            changeType="positive"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}
          />
          <StatCard
            title="System Health"
            value="99.99%"
            change="All systems operational"
            changeType="positive"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </Grid>

        {/* Quick Actions & Recent Activity */}
        <Grid cols={2} gap="lg">
          {/* Quick Actions */}
          <Card variant="default" className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
            <Stack gap="md">
              <QuickAction
                label="Add New Tenant"
                description="Onboard a new organization to the platform"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
                href="/dashboard/tenants/new"
                variant="primary"
              />
              <QuickAction
                label="Manage Users"
                description="View and manage platform users and roles"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1zm18 0a6 6 0 01-12 0v1H21v-1z" /></svg>}
                href="/dashboard/users"
              />
              <QuickAction
                label="Configure Integrations"
                description="Set up external service connections"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}
                href="/dashboard/integrations"
              />
              <QuickAction
                label="View Audit Logs"
                description="Review system activity and changes"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                href="/dashboard/logs"
              />
            </Stack>
          </Card>

          {/* Recent Activity */}
          <Card variant="default" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
              <a href="/dashboard/logs" className="text-sm text-emerald-600 hover:underline">View All</a>
            </div>
            <div className="space-y-4">
              {[
                { action: "New tenant onboarded", entity: "Acme Corporation", time: "2 min ago", type: "success" },
                { action: "User role updated", entity: "john.doe@company.com", time: "15 min ago", type: "info" },
                { action: "Integration configured", entity: "Shopify Connector", time: "1 hour ago", type: "success" },
                { action: "API key rotated", entity: "Platform API v2", time: "3 hours ago", type: "warning" },
                { action: "Security scan completed", entity: "Platform Infrastructure", time: "6 hours ago", type: "success" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50">
                  <div className={`w-2 h-2 rounded-full ${activity.type === "success" ? "bg-emerald-500" : activity.type === "warning" ? "bg-amber-500" : "bg-sky-500"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-500">{activity.entity}</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </Grid>

        {/* Platform Navigation */}
        <Card variant="default" className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Platform Sections</h2>
          <Grid cols={3} gap="md">
            <a href="/dashboard/tenants" className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mb-3 w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Tenants</h3>
              <p className="text-sm text-slate-500 mt-1">Manage platform tenants</p>
            </a>
            <a href="/dashboard/users" className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
              <div className="p-2 rounded-lg bg-sky-50 text-sky-600 mb-3 w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Users</h3>
              <p className="text-sm text-slate-500 mt-1">Manage users & roles</p>
            </a>
            <a href="/dashboard/integrations" className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 mb-3 w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Integrations</h3>
              <p className="text-sm text-slate-500 mt-1">External connections</p>
            </a>
            <a href="/dashboard/analytics" className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600 mb-3 w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Analytics</h3>
              <p className="text-sm text-slate-500 mt-1">Platform metrics</p>
            </a>
            <a href="/dashboard/logs" className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
              <div className="p-2 rounded-lg bg-slate-100 text-slate-600 mb-3 w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">Audit Logs</h3>
              <p className="text-sm text-slate-500 mt-1">System activity</p>
            </a>
            <a href="/dashboard/health" className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 mb-3 w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-slate-900">System Health</h3>
              <p className="text-sm text-slate-500 mt-1">Monitor infrastructure</p>
            </a>
          </Grid>
        </Card>
      </Stack>
    </Container>
  );
}