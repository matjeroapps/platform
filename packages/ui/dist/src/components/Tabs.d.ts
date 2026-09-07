import React from 'react';
export interface Tab {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    tabs: Tab[];
    defaultTabId?: string;
    onChange?: (tabId: string) => void;
}
export declare const Tabs: React.FC<TabsProps>;
