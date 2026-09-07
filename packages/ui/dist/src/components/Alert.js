import React from 'react';
export const Alert = ({ variant = 'info', title, children, onDismiss }) => {
    const variantStyles = {
        info: { bg: 'rgba(59, 130, 246, 0.1)', border: 'var(--color-info)', text: 'var(--color-foreground)', icon: 'ℹ' },
        success: { bg: 'rgba(34, 197, 94, 0.1)', border: 'var(--color-success)', text: 'var(--color-foreground)', icon: '✓' },
        warning: { bg: 'rgba(245, 158, 11, 0.1)', border: 'var(--color-warning)', text: 'var(--color-foreground)', icon: '⚠' },
        error: { bg: 'rgba(239, 68, 68, 0.1)', border: 'var(--color-destructive)', text: 'var(--color-foreground)', icon: '✕' },
    };
    const styleConfig = variantStyles[variant];
    return (React.createElement("div", { role: "alert", style: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            padding: '14px 16px',
            backgroundColor: styleConfig.bg,
            borderLeft: `4px solid ${styleConfig.border}`,
            borderRadius: 'var(--radius-md)',
            color: styleConfig.text,
            fontSize: '14px',
            position: 'relative',
        } },
        React.createElement("span", { style: { fontSize: '16px', fontWeight: 'bold' } }, styleConfig.icon),
        React.createElement("div", { style: { flex: 1 } },
            title && React.createElement("div", { style: { fontWeight: 600, marginBottom: '2px' } }, title),
            React.createElement("div", null, children)),
        onDismiss && (React.createElement("button", { onClick: onDismiss, "aria-label": "Dismiss alert", style: {
                background: 'none',
                border: 'none',
                color: 'var(--color-muted-foreground)',
                fontSize: '14px',
                cursor: 'pointer',
                padding: 0,
            } }, "\u2715"))));
};
