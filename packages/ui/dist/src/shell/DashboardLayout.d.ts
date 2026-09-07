import React from 'react';
import { NavItem } from './Sidebar.js';
import { TopNavigationProps } from './TopNavigation.js';
export interface DashboardLayoutProps {
    appTitle?: string;
    appLogo?: React.ReactNode;
    navItems: NavItem[];
    currentPath?: string;
    onNavigate?: (path: string) => void;
    breadcrumbsItems?: TopNavigationProps['breadcrumbsItems'];
    workspaces?: TopNavigationProps['workspaces'];
    activeWorkspaceId?: string;
    onWorkspaceChange?: (id: string) => void;
    notifications?: TopNavigationProps['notifications'];
    user?: TopNavigationProps['user'];
    onSignOut?: () => void;
    children: React.ReactNode;
}
export declare const DashboardLayout: React.FC<DashboardLayoutProps>;
