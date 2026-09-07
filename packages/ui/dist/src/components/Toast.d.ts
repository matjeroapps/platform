import React from 'react';
export interface ToastItem {
    id: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    message: string;
    durationMs?: number;
}
export declare const useToast: () => any;
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
