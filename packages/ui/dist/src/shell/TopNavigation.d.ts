import React from 'react';
import { Workspace } from './WorkspaceSelector.js';
import { Notification } from './NotificationsArea.js';
import { UserMenuProps } from './UserMenu.js';
import { BreadcrumbItem } from './Breadcrumbs.js';
export interface TopNavigationProps {
    breadcrumbsItems?: BreadcrumbItem[];
    workspaces?: Workspace[];
    activeWorkspaceId?: string;
    onWorkspaceChange?: (id: string) => void;
    notifications?: Notification[];
    user?: UserMenuProps['user'];
    onSignOut?: () => void;
    dir?: 'ltr' | 'rtl';
    onToggleDir?: () => void;
    theme?: 'dark' | 'light';
    onToggleTheme?: () => void;
}
export declare const TopNavigation: React.FC<TopNavigationProps>;
