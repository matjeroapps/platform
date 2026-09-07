import React from 'react';
export interface UserMenuProps {
    user?: {
        name: string;
        email: string;
        role?: string;
        avatarUrl?: string;
    };
    onSignOut?: () => void;
    onProfileClick?: () => void;
    onSettingsClick?: () => void;
}
export declare const UserMenu: React.FC<UserMenuProps>;
