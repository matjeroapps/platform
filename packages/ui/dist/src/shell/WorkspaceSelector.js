import React from 'react';
import { Select } from '../components/Select.js';
export const WorkspaceSelector = ({ workspaces = [
    { id: 'default-store', name: 'Default Store', type: 'seller' },
    { id: 'main-catalog', name: 'Main Catalog', type: 'supplier' },
    { id: 'platform-admin', name: 'Platform Admin', type: 'admin' },
], activeWorkspaceId = 'default-store', onWorkspaceChange, }) => {
    const options = workspaces.map((ws) => ({
        label: `${ws.name} (${ws.type ? ws.type.toUpperCase() : 'WORKSPACE'})`,
        value: ws.id,
    }));
    return (React.createElement("div", { style: { width: '200px' } },
        React.createElement(Select, { options: options, value: activeWorkspaceId, onChange: (e) => onWorkspaceChange && onWorkspaceChange(e.target.value), "aria-label": "Select Workspace" })));
};
