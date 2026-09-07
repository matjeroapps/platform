import React from 'react';
export interface Notification {
    id: string;
    title: string;
    message: string;
    time: string;
    read?: boolean;
}
export interface NotificationsAreaProps {
    notifications?: Notification[];
    onMarkAllAsRead?: () => void;
}
export declare const NotificationsArea: React.FC<NotificationsAreaProps>;
