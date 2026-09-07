import React from 'react';
export const Card = ({ variant = 'default', children, style, className = '', ...props }) => {
    const variantStyles = {
        default: {
            backgroundColor: 'var(--color-card)',
            color: 'var(--color-card-foreground)',
            border: '1px solid var(--color-card-border)',
            boxShadow: 'var(--shadow-sm)',
        },
        glass: {
            backgroundColor: 'var(--glass-bg)',
            color: 'var(--color-card-foreground)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--glass-blur)',
            boxShadow: 'var(--shadow-glass)',
        },
        outline: {
            backgroundColor: 'transparent',
            color: 'var(--color-foreground)',
            border: '1px solid var(--color-border)',
        },
    };
    return (React.createElement("div", { style: {
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            ...variantStyles[variant],
            ...style,
        }, className: `matjer-card ${className}`, ...props }, children));
};
export const CardHeader = ({ children, style, ...props }) => (React.createElement("div", { style: { marginBottom: '12px', ...style }, ...props }, children));
export const CardTitle = ({ children, style, ...props }) => (React.createElement("h3", { style: { margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--color-foreground)', ...style }, ...props }, children));
export const CardDescription = ({ children, style, ...props }) => (React.createElement("p", { style: { margin: '4px 0 0 0', fontSize: '13px', color: 'var(--color-muted-foreground)', ...style }, ...props }, children));
export const CardContent = ({ children, style, ...props }) => (React.createElement("div", { style: { ...style }, ...props }, children));
export const CardFooter = ({ children, style, ...props }) => (React.createElement("div", { style: { marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', ...style }, ...props }, children));
