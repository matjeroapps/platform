import React from 'react';
export const Dialog = ({ isOpen, onClose, title, description, children, footer, maxWidth = 'md', }) => {
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    const widthMap = {
        sm: '400px',
        md: '520px',
        lg: '680px',
        xl: '840px',
    };
    return (React.createElement("div", { "aria-modal": "true", role: "dialog", style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'var(--glass-blur)',
            padding: '16px',
        }, onClick: onClose },
        React.createElement("div", { style: {
                position: 'relative',
                width: '100%',
                maxWidth: widthMap[maxWidth],
                backgroundColor: 'var(--color-card)',
                color: 'var(--color-card-foreground)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-glass)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }, onClick: (e) => e.stopPropagation() },
            React.createElement("button", { onClick: onClose, "aria-label": "Close dialog", style: {
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-muted-foreground)',
                    fontSize: '20px',
                    cursor: 'pointer',
                    padding: '4px',
                    borderRadius: 'var(--radius-sm)',
                } }, "\u2715"),
            title && (React.createElement("div", null,
                React.createElement("h2", { style: { margin: 0, fontSize: '18px', fontWeight: 600 } }, title),
                description && (React.createElement("p", { style: { margin: '4px 0 0 0', fontSize: '14px', color: 'var(--color-muted-foreground)' } }, description)))),
            React.createElement("div", null, children),
            footer && (React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', gap: '8px', paddingTop: '8px' } }, footer)))));
};
