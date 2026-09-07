import React from 'react';
export interface ToastItem {
    id: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    message: string;
    durationMs?: number;
}
interface ToastContextType {
    toasts: ToastItem[];
    addToast: (toast: Omit<ToastItem, 'id'>) => void;
    removeToast: (id: string) => void;
}
export declare const useToast: () => ToastContextType;
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export {};
