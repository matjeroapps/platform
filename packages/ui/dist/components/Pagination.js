import React from 'react';
import { Button } from './Button.js';
export const Pagination = ({ currentPage, totalPages, onPageChange, pageSize = 10, onPageSizeChange, pageSizeOptions = [10, 25, 50, 100], totalItems, }) => {
    return (React.createElement("div", { style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            fontSize: '13px',
            color: 'var(--color-muted-foreground)',
            borderTop: '1px solid var(--color-border)',
            flexWrap: 'wrap',
            gap: '12px',
        } },
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' } },
            totalItems !== undefined && React.createElement("span", null,
                "Total: ",
                totalItems,
                " items"),
            onPageSizeChange && (React.createElement("label", { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
                React.createElement("span", null, "Per page:"),
                React.createElement("select", { value: pageSize, onChange: (e) => onPageSizeChange(Number(e.target.value)), style: {
                        backgroundColor: 'var(--color-input)',
                        color: 'var(--color-foreground)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '2px 6px',
                    } }, pageSizeOptions.map((sz) => (React.createElement("option", { key: sz, value: sz }, sz))))))),
        React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '6px' } },
            React.createElement(Button, { size: "sm", variant: "outline", disabled: currentPage <= 1, onClick: () => onPageChange(currentPage - 1) }, "Previous"),
            React.createElement("span", null,
                "Page ",
                currentPage,
                " of ",
                totalPages || 1),
            React.createElement(Button, { size: "sm", variant: "outline", disabled: currentPage >= totalPages, onClick: () => onPageChange(currentPage + 1) }, "Next"))));
};
