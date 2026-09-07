import React from 'react';
export interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
