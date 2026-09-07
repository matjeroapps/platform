import React from 'react';
import { Card } from '../components/Card.js';
import { Button } from '../components/Button.js';
export const UnauthorizedState = ({ title = 'Access Denied', message = 'You do not have permission to view this resource. Please sign in with an authorized account.', onSignIn, }) => {
    return (React.createElement(Card, { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 24px',
            textAlign: 'center',
            gap: '12px',
        } },
        React.createElement("div", { style: { fontSize: '40px' } }, "\uD83D\uDD12"),
        React.createElement("h3", { style: { margin: 0, fontSize: '18px', fontWeight: 600 } }, title),
        React.createElement("p", { style: { margin: 0, fontSize: '14px', color: 'var(--color-muted-foreground)', maxWidth: '420px' } }, message),
        onSignIn && (React.createElement(Button, { onClick: onSignIn, style: { marginTop: '8px' } }, "Sign In Now"))));
};
