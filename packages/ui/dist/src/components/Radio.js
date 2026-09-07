import React from 'react';
export const Radio = React.forwardRef(({ label, id, disabled, style, className = '', ...props }, ref) => {
    const radioId = id || React.useId();
    return (React.createElement("label", { htmlFor: radioId, style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.6 : 1,
            userSelect: 'none',
            fontSize: '14px',
            color: 'var(--color-foreground)',
            ...style,
        }, className: `matjer-radio-label ${className}` },
        React.createElement("input", { id: radioId, type: "radio", ref: ref, disabled: disabled, style: {
                width: '18px',
                height: '18px',
                accentColor: 'var(--color-primary)',
                cursor: disabled ? 'not-allowed' : 'pointer',
            }, ...props }),
        label && React.createElement("span", null, label)));
});
Radio.displayName = 'Radio';
export const RadioGroup = ({ name, value, onChange, children, direction = 'column', label, }) => {
    return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column', gap: '6px' }, role: "radiogroup", "aria-label": label },
        label && (React.createElement("span", { style: { fontSize: '13px', fontWeight: 500, color: 'var(--color-foreground)' } }, label)),
        React.createElement("div", { style: { display: 'flex', flexDirection: direction, gap: '12px' } }, React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    name,
                    checked: child.props.value === value,
                    onChange: (e) => {
                        if (child.props.onChange)
                            child.props.onChange(e);
                        if (onChange)
                            onChange(e.target.value);
                    },
                });
            }
            return child;
        }))));
};
