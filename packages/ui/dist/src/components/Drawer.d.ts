import React from 'react';
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    position?: 'right' | 'left' | 'top' | 'bottom';
    children: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Drawer: React.FC<DrawerProps>;
