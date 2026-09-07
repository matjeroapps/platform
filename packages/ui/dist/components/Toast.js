import React from 'react';
const ToastContext = React.createContext(null);
export const useToast = () => {
    const ctx = React.useContext(ToastContext);
    if (!ctx)
        throw new Error('useToast must be used within ToastProvider');
    return ctx;
};
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = React.useState([]);
    const removeToast = React.useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);
    const addToast = React.useCallback((toast) => {
        const id = Math.random().toString(36).substring(2, 9);
        const newToast = { id, type: 'info', durationMs: 4000, ...toast };
        setToasts((prev) => [...prev, newToast]);
        if (newToast.durationMs && newToast.durationMs > 0) {
            setTimeout(() => {
                removeToast(id);
            }, newToast.durationMs);
        }
    }, [removeToast]);
    return (React.createElement(ToastContext.Provider, { value: { toasts, addToast, removeToast } },
        children,
        React.createElement("div", { "aria-live": "polite", "aria-atomic": "true", style: {
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 1100,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                maxWidth: '360px',
                width: '100%',
            } }, toasts.map((toast) => (React.createElement(ToastCard, { key: toast.id, toast: toast, onClose: () => removeToast(toast.id) }))))));
};
const ToastCard = ({ toast, onClose }) => {
    const typeBorder = {
        info: 'var(--color-info)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-destructive)',
    };
    return (React.createElement("div", { style: {
            backgroundColor: 'var(--color-card)',
            color: 'var(--color-card-foreground)',
            borderLeft: `4px solid ${typeBorder[toast.type || 'info']}`,
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '8px',
            fontSize: '13px',
        } },
        React.createElement("div", null,
            toast.title && React.createElement("div", { style: { fontWeight: 600, marginBottom: '2px' } }, toast.title),
            React.createElement("div", null, toast.message)),
        React.createElement("button", { onClick: onClose, style: {
                background: 'none',
                border: 'none',
                color: 'var(--color-muted-foreground)',
                cursor: 'pointer',
                padding: 0,
            } }, "\u2715")));
};
