import React from 'react';
export interface AuthenticatedStateProps {
    user: {
        name: string;
        email: string;
        role?: string;
        tenantId?: string;
    };
    onSignOut?: () => void;
}
export declare const AuthenticatedState: React.FC<AuthenticatedStateProps>;
