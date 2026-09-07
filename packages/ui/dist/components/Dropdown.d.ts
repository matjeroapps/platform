import React from 'react';
export interface DropdownItemProps {
    label: React.ReactNode;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    destructive?: boolean;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export declare const DropdownDivider: React.FC;
export interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: 'left' | 'right';
}
export declare const Dropdown: React.FC<DropdownProps>;
