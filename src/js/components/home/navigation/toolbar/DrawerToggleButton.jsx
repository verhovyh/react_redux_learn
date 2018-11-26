import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (
    <div>
        <span className="sr-only">Toggle drawer</span>
        <i className="material-icons" onClick={props.click}> menu </i>
    </div>
);

export default drawerToggleButton;