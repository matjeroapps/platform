import React from 'react';
export interface NavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    path: string;
    badge?: string;
    children?: NavItem[];
}
export interface SidebarProps {
    appTitle?: string;
    appLogo?: React.ReactNode;
    navItems: NavItem[];
    currentPath?: string;
    onNavigate?: (path: string) => void;
    collapsed?: boolean;
    onToggleCollapse?: () => void;
}
export declare const Sidebar: React.FC<SidebarProps>;
