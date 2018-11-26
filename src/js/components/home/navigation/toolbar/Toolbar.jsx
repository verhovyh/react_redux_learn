import React from 'react';

import DrawerToggleButton from './DrawerToggleButton.jsx';
import './Toolbar.css';
import Link from "react-router-dom/es/Link";

const toolbar = props => (
    <header className="toolbar navbar navbar-light bg-faded">
        <nav className="toolbar__navigation">
            <div className="navbar-toggler">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fav">Favorites</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;