import React from 'react';
import { Card } from '../components/Card.js';
import { Badge } from '../components/Badge.js';
import { Button } from '../components/Button.js';
export const AuthenticatedState = ({ user, onSignOut }) => {
    return (React.createElement(Card, { style: { padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' } },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' } },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
                React.createElement("div", { style: {
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-on-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '18px',
                    } }, user.name.charAt(0)),
                React.createElement("div", null,
                    React.createElement("div", { style: { fontWeight: 600, fontSize: '16px' } }, user.name),
                    React.createElement("div", { style: { fontSize: '13px', color: 'var(--color-muted-foreground)' } }, user.email))),
            React.createElement(Badge, { variant: "success" }, "Authenticated")),
        React.createElement("div", { style: {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                padding: '12px',
                backgroundColor: 'var(--color-muted)',
                borderRadius: 'var(--radius-md)',
                fontSize: '13px',
            } },
            React.createElement("div", null,
                React.createElement("span", { style: { color: 'var(--color-muted-foreground)' } }, "Role:"),
                ' ',
                React.createElement("strong", null, user.role || 'User')),
            React.createElement("div", null,
                React.createElement("span", { style: { color: 'var(--color-muted-foreground)' } }, "Tenant ID:"),
                ' ',
                React.createElement("strong", null, user.tenantId || 'default'))),
        onSignOut && (React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end' } },
            React.createElement(Button, { variant: "outline", size: "sm", onClick: onSignOut }, "Sign Out")))));
};
