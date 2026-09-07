import React from 'react';
export interface Workspace {
    id: string;
    name: string;
    type?: 'seller' | 'supplier' | 'admin';
}
export interface WorkspaceSelectorProps {
    workspaces?: Workspace[];
    activeWorkspaceId?: string;
    onWorkspaceChange?: (id: string) => void;
}
export declare const WorkspaceSelector: React.FC<WorkspaceSelectorProps>;
