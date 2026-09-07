import React from 'react';
export interface UnauthorizedStateProps {
    title?: string;
    message?: string;
    onSignIn?: () => void;
}
export declare const UnauthorizedState: React.FC<UnauthorizedStateProps>;
