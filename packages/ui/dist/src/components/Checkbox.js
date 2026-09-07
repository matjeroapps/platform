import React from 'react';
export const Checkbox = React.forwardRef(({ label, indeterminate, id, disabled, style, className = '', ...props }, ref) => {
    const inputRef = React.useRef(null);
    const combinedRef = (node) => {
        inputRef.current = node;
        if (typeof ref === 'function')
            ref(node);
        else if (ref)
            ref.current = node;
    };
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.indeterminate = Boolean(indeterminate);
        }
    }, [indeterminate]);
    const checkboxId = id || React.useId();
    return (React.createElement("label", { htmlFor: checkboxId, style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.6 : 1,
            userSelect: 'none',
            fontSize: '14px',
            color: 'var(--color-foreground)',
            ...style,
        }, className: `matjer-checkbox-label ${className}` },
        React.createElement("input", { id: checkboxId, type: "checkbox", ref: combinedRef, disabled: disabled, style: {
                width: '18px',
                height: '18px',
                accentColor: 'var(--color-primary)',
                cursor: disabled ? 'not-allowed' : 'pointer',
            }, ...props }),
        label && React.createElement("span", null, label)));
});
Checkbox.displayName = 'Checkbox';
