import React from 'react';
import { Card } from '../components/Card.js';
import { Button } from '../components/Button.js';
export const EmptyState = ({ icon = '📦', title, description, actionLabel, onAction, }) => {
    return (React.createElement(Card, { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 24px',
            textAlign: 'center',
            gap: '12px',
        } },
        React.createElement("div", { style: { fontSize: '40px', lineHeight: 1 } }, icon),
        React.createElement("h3", { style: { margin: 0, fontSize: '18px', fontWeight: 600 } }, title),
        React.createElement("p", { style: { margin: 0, fontSize: '14px', color: 'var(--color-muted-foreground)', maxWidth: '400px' } }, description),
        actionLabel && onAction && (React.createElement(Button, { onClick: onAction, style: { marginTop: '8px' } }, actionLabel))));
};
