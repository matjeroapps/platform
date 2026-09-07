import React from 'react';
export const DropdownItem = ({ label, onClick, icon, disabled = false, destructive = false, }) => (React.createElement("button", { disabled: disabled, onClick: onClick, style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        fontSize: '13px',
        fontFamily: 'var(--font-sans)',
        color: destructive ? 'var(--color-destructive)' : 'var(--color-foreground)',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        textAlign: 'left',
    } },
    icon && React.createElement("span", null, icon),
    React.createElement("span", { style: { flex: 1 } }, label)));
export const DropdownDivider = () => (React.createElement("div", { style: { height: '1px', backgroundColor: 'var(--color-border)', margin: '4px 0' } }));
export const Dropdown = ({ trigger, children, align = 'left' }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (React.createElement("div", { ref: containerRef, style: { position: 'relative', display: 'inline-block' } },
        React.createElement("div", { onClick: () => setIsOpen((prev) => !prev), style: { cursor: 'pointer' } }, trigger),
        isOpen && (React.createElement("div", { style: {
                position: 'absolute',
                top: '100%',
                [align]: 0,
                marginTop: '6px',
                zIndex: 900,
                minWidth: '180px',
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                padding: '4px',
            }, onClick: () => setIsOpen(false) }, children))));
};
