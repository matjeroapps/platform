import React from 'react';
export const Breadcrumbs = ({ items }) => {
    return (React.createElement("nav", { "aria-label": "Breadcrumb", style: { fontSize: '13px', color: 'var(--color-muted-foreground)' } },
        React.createElement("ol", { style: { display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0 } }, items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (React.createElement("li", { key: idx, style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                idx > 0 && React.createElement("span", null, "/"),
                isLast || (!item.href && !item.onClick) ? (React.createElement("span", { style: { color: 'var(--color-foreground)', fontWeight: isLast ? 600 : 400 } }, item.label)) : (React.createElement("a", { href: item.href || '#', onClick: (e) => {
                        if (item.onClick) {
                            e.preventDefault();
                            item.onClick();
                        }
                    }, style: { color: 'var(--color-muted-foreground)', textDecoration: 'none' } }, item.label))));
        }))));
};
