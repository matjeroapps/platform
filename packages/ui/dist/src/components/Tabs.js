import React from 'react';
export const Tabs = ({ tabs, defaultTabId, onChange }) => {
    const [activeTab, setActiveTab] = React.useState(defaultTabId || (tabs[0] ? tabs[0].id : ''));
    const handleSelect = (id, disabled) => {
        if (disabled)
            return;
        setActiveTab(id);
        if (onChange)
            onChange(id);
    };
    const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
    return (React.createElement("div", { style: { width: '100%' } },
        React.createElement("div", { role: "tablist", style: {
                display: 'flex',
                borderBottom: '1px solid var(--color-border)',
                gap: '4px',
                overflowX: 'auto',
            } }, tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (React.createElement("button", { key: tab.id, role: "tab", "aria-selected": isActive, "aria-disabled": tab.disabled, onClick: () => handleSelect(tab.id, tab.disabled), style: {
                    padding: '10px 16px',
                    fontSize: '14px',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--color-primary)' : 'var(--color-muted-foreground)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                    cursor: tab.disabled ? 'not-allowed' : 'pointer',
                    opacity: tab.disabled ? 0.5 : 1,
                    transition: 'var(--transition-fast)',
                    outline: 'none',
                    whiteSpace: 'nowrap',
                } }, tab.label));
        })),
        React.createElement("div", { role: "tabpanel", style: { paddingTop: '16px' } }, currentTab?.content)));
};
