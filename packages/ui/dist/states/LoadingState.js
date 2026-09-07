import React from 'react';
import { Skeleton } from '../components/Skeleton.js';
import { Card } from '../components/Card.js';
export const LoadingState = ({ type = 'card', title = 'Loading data...', }) => {
    if (type === 'fullPage') {
        return (React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px',
                gap: '16px',
            } },
            React.createElement(Skeleton, { variant: "circular", width: "48px", height: "48px" }),
            React.createElement("span", { style: { fontSize: '14px', color: 'var(--color-muted-foreground)' } }, title)));
    }
    if (type === 'table') {
        return (React.createElement(Card, { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
            React.createElement(Skeleton, { variant: "text", width: "30%", height: "24px" }),
            React.createElement(Skeleton, { variant: "table", height: "180px" })));
    }
    return (React.createElement(Card, { style: { display: 'flex', flexDirection: 'column', gap: '12px' } },
        title && React.createElement("span", { style: { fontSize: '14px', color: 'var(--color-muted-foreground)' } }, title),
        React.createElement(Skeleton, { variant: "text", width: "50%", height: "20px" }),
        React.createElement(Skeleton, { variant: "text", width: "80%", height: "16px" }),
        React.createElement(Skeleton, { variant: "rectangular", height: "100px" })));
};
