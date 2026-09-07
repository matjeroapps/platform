import React from 'react';
export interface AlertProps {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    children: React.ReactNode;
    onDismiss?: () => void;
}
export declare const Alert: React.FC<AlertProps>;
