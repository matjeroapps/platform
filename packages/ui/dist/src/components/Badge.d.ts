import React from 'react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
    size?: 'sm' | 'md';
}
export declare const Badge: React.FC<BadgeProps>;
