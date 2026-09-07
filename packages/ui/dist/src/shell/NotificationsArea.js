import React from 'react';
import { Dropdown } from '../components/Dropdown.js';
import { Badge } from '../components/Badge.js';
export const NotificationsArea = ({ notifications = [], onMarkAllAsRead, }) => {
    const unreadCount = notifications.filter((n) => !n.read).length;
    return (React.createElement(Dropdown, { align: "right", trigger: React.createElement("div", { style: { position: 'relative', cursor: 'pointer', padding: '6px' } },
            React.createElement("span", { style: { fontSize: '18px', color: 'var(--color-foreground)' } }, "\uD83D\uDD14"),
            unreadCount > 0 && (React.createElement(Badge, { variant: "destructive", size: "sm", style: {
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    padding: '1px 5px',
                    fontSize: '10px',
                } }, unreadCount))) },
        React.createElement("div", { style: { width: '280px', padding: '8px' } },
            React.createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                    paddingBottom: '6px',
                    borderBottom: '1px solid var(--color-border)',
                } },
                React.createElement("span", { style: { fontWeight: 600, fontSize: '13px' } }, "Notifications"),
                unreadCount > 0 && onMarkAllAsRead && (React.createElement("button", { onClick: onMarkAllAsRead, style: {
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-primary)',
                        fontSize: '12px',
                        cursor: 'pointer',
                    } }, "Mark all as read"))),
            notifications.length === 0 ? (React.createElement("div", { style: { padding: '16px 8px', textAlign: 'center', fontSize: '12px', color: 'var(--color-muted-foreground)' } }, "No recent notifications")) : (React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '240px', overflowY: 'auto' } }, notifications.map((n) => (React.createElement("div", { key: n.id, style: {
                    padding: '8px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: n.read ? 'transparent' : 'var(--color-muted)',
                    fontSize: '12px',
                } },
                React.createElement("div", { style: { fontWeight: 600 } }, n.title),
                React.createElement("div", { style: { color: 'var(--color-muted-foreground)', margin: '2px 0' } }, n.message),
                React.createElement("div", { style: { fontSize: '10px', color: 'var(--color-muted-foreground)' } }, n.time)))))))));
};
