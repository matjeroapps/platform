import React from 'react';
import { Dropdown, DropdownItem, DropdownDivider } from '../components/Dropdown.js';
import { Badge } from '../components/Badge.js';
export const UserMenu = ({ user = { name: 'Demo User', email: 'user@matjerhub.com', role: 'Administrator' }, onSignOut, onProfileClick, onSettingsClick, }) => {
    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
    return (React.createElement(Dropdown, { align: "right", trigger: React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' } },
            React.createElement("div", { style: {
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '13px',
                } }, initials),
            React.createElement("div", { style: { display: 'flex', flexDirection: 'column', textAlign: 'left' } },
                React.createElement("span", { style: { fontSize: '13px', fontWeight: 600, color: 'var(--color-foreground)', lineHeight: 1.2 } }, user.name),
                user.role && (React.createElement("span", { style: { fontSize: '11px', color: 'var(--color-muted-foreground)' } }, user.role)))) },
        React.createElement("div", { style: { padding: '8px 12px', borderBottom: '1px solid var(--color-border)' } },
            React.createElement("div", { style: { fontWeight: 600, fontSize: '13px' } }, user.name),
            React.createElement("div", { style: { fontSize: '12px', color: 'var(--color-muted-foreground)' } }, user.email),
            user.role && (React.createElement("div", { style: { marginTop: '4px' } },
                React.createElement(Badge, { size: "sm", variant: "secondary" }, user.role)))),
        React.createElement(DropdownItem, { label: "User Profile", icon: "\uD83D\uDC64", onClick: onProfileClick }),
        React.createElement(DropdownItem, { label: "Account Settings", icon: "\u2699", onClick: onSettingsClick }),
        React.createElement(DropdownDivider, null),
        React.createElement(DropdownItem, { label: "Sign Out", icon: "\uD83D\uDEAA", destructive: true, onClick: onSignOut })));
};
