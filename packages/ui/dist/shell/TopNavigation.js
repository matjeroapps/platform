import React from 'react';
import { WorkspaceSelector } from './WorkspaceSelector.js';
import { NotificationsArea } from './NotificationsArea.js';
import { UserMenu } from './UserMenu.js';
import { Breadcrumbs } from './Breadcrumbs.js';
import { Button } from '../components/Button.js';
export const TopNavigation = ({ breadcrumbsItems = [{ label: 'Dashboard', href: '/' }], workspaces, activeWorkspaceId, onWorkspaceChange, notifications, user, onSignOut, dir = 'ltr', onToggleDir, theme = 'dark', onToggleTheme, }) => {
    return (React.createElement("header", { style: {
            height: '60px',
            padding: '0 24px',
            backgroundColor: 'var(--color-card)',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 750,
        } },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
            React.createElement(Breadcrumbs, { items: breadcrumbsItems })),
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
            React.createElement(WorkspaceSelector, { workspaces: workspaces, activeWorkspaceId: activeWorkspaceId, onWorkspaceChange: onWorkspaceChange }),
            onToggleDir && (React.createElement(Button, { size: "sm", variant: "ghost", onClick: onToggleDir, "aria-label": "Toggle Direction" }, dir.toUpperCase())),
            onToggleTheme && (React.createElement(Button, { size: "sm", variant: "ghost", onClick: onToggleTheme, "aria-label": "Toggle Theme" }, theme === 'dark' ? '🌙' : '☀️')),
            React.createElement(NotificationsArea, { notifications: notifications }),
            React.createElement(UserMenu, { user: user, onSignOut: onSignOut }))));
};
