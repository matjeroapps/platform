import React from 'react';
export interface ErrorStateProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}
export declare const ErrorState: React.FC<ErrorStateProps>;
