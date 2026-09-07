import React from 'react';
export const Table = ({ children, style, className = '', ...props }) => (React.createElement("div", { style: { width: '100%', overflowX: 'auto', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' } },
    React.createElement("table", { style: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
            textAlign: 'left',
            color: 'var(--color-foreground)',
            ...style,
        }, className: `matjer-table ${className}`, ...props }, children)));
export const TableHeader = ({ children, style, ...props }) => (React.createElement("thead", { style: { backgroundColor: 'var(--color-muted)', borderBottom: '1px solid var(--color-border)', ...style }, ...props }, children));
export const TableBody = ({ children, ...props }) => (React.createElement("tbody", { ...props }, children));
export const TableRow = ({ children, style, className = '', ...props }) => (React.createElement("tr", { style: {
        borderBottom: '1px solid var(--color-border)',
        transition: 'var(--transition-fast)',
        ...style,
    }, className: `matjer-table-row ${className}`, ...props }, children));
export const TableHead = ({ children, style, ...props }) => (React.createElement("th", { style: {
        padding: '12px 16px',
        fontWeight: 600,
        color: 'var(--color-muted-foreground)',
        fontSize: '13px',
        ...style,
    }, ...props }, children));
export const TableCell = ({ children, style, ...props }) => (React.createElement("td", { style: {
        padding: '12px 16px',
        color: 'var(--color-foreground)',
        ...style,
    }, ...props }, children));
