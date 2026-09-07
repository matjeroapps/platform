import React from 'react';
export const Input = React.forwardRef(({ label, error, helperText, leftIcon, rightIcon, id, className = '', style, disabled, ...props }, ref) => {
    const inputId = id || React.useId();
    return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' } },
        label && (React.createElement("label", { htmlFor: inputId, style: {
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-foreground)',
            } }, label)),
        React.createElement("div", { style: {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
            } },
            leftIcon && (React.createElement("span", { style: {
                    position: 'absolute',
                    left: '12px',
                    display: 'inline-flex',
                    color: 'var(--color-muted-foreground)',
                    pointerEvents: 'none',
                } }, leftIcon)),
            React.createElement("input", { id: inputId, ref: ref, disabled: disabled, "aria-invalid": Boolean(error), style: {
                    width: '100%',
                    height: '40px',
                    paddingLeft: leftIcon ? '38px' : '12px',
                    paddingRight: rightIcon ? '38px' : '12px',
                    fontSize: '14px',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: 'var(--color-input)',
                    color: 'var(--color-foreground)',
                    border: `1px solid ${error ? 'var(--color-destructive)' : 'var(--color-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    outline: 'none',
                    transition: 'var(--transition-fast)',
                    opacity: disabled ? 0.6 : 1,
                    cursor: disabled ? 'not-allowed' : 'text',
                    ...style,
                }, className: `matjer-input ${className}`, ...props }),
            rightIcon && (React.createElement("span", { style: {
                    position: 'absolute',
                    right: '12px',
                    display: 'inline-flex',
                    color: 'var(--color-muted-foreground)',
                } }, rightIcon))),
        error ? (React.createElement("span", { style: { fontSize: '12px', color: 'var(--color-destructive)' }, role: "alert" }, error)) : helperText ? (React.createElement("span", { style: { fontSize: '12px', color: 'var(--color-muted-foreground)' } }, helperText)) : null));
});
Input.displayName = 'Input';
