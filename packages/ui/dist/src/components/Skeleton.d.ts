import React from 'react';
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'text' | 'circular' | 'rectangular' | 'card' | 'table';
    width?: string | number;
    height?: string | number;
}
export declare const Skeleton: React.FC<SkeletonProps>;
