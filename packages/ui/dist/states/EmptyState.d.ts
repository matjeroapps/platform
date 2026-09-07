import React from 'react';
export interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}
export declare const EmptyState: React.FC<EmptyStateProps>;
