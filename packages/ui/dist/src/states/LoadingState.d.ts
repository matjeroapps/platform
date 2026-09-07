import React from 'react';
export interface LoadingStateProps {
    type?: 'card' | 'table' | 'fullPage';
    title?: string;
}
export declare const LoadingState: React.FC<LoadingStateProps>;
