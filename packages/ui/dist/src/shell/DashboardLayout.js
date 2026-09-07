import React from 'react';
import { Sidebar } from './Sidebar.js';
import { TopNavigation } from './TopNavigation.js';
export const DashboardLayout = ({ appTitle = 'MatjerHub', appLogo, navItems, currentPath = '/', onNavigate, breadcrumbsItems, workspaces, activeWorkspaceId, onWorkspaceChange, notifications, user, onSignOut, children, }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [dir, setDir] = React.useState('ltr');
    const [theme, setTheme] = React.useState('dark');
    const toggleDir = () => {
        const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
        setDir(nextDir);
        document.documentElement.setAttribute('dir', nextDir);
    };
    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
    };
    return (React.createElement("div", { dir: dir, "data-theme": theme, style: {
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-foreground)',
            fontFamily: 'var(--font-sans)',
        } },
        React.createElement(Sidebar, { appTitle: appTitle, appLogo: appLogo, navItems: navItems, currentPath: currentPath, onNavigate: onNavigate, collapsed: collapsed, onToggleCollapse: () => setCollapsed((prev) => !prev) }),
        React.createElement("div", { style: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 } },
            React.createElement(TopNavigation, { breadcrumbsItems: breadcrumbsItems, workspaces: workspaces, activeWorkspaceId: activeWorkspaceId, onWorkspaceChange: onWorkspaceChange, notifications: notifications, user: user, onSignOut: onSignOut, dir: dir, onToggleDir: toggleDir, theme: theme, onToggleTheme: toggleTheme }),
            React.createElement("main", { style: { flex: 1, padding: '24px', overflowY: 'auto' } }, children))));
};
