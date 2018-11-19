import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from "../../../App";

import SearchBlock from "./searchblock";


class Main extends Component {
    constructor() {
        super();
        this.state = {sideMenuActive: false}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const currentState = this.state.sideMenuActive;
        this.setState({sideMenuActive: !currentState})

    }

    render() {
        return (
            <div
                className={"bmd-layout-container bmd-drawer-f-l " + (this.state.sideMenuActive ? "bmd-drawer-in" : "bmd-drawer-out")}>
                <header className="bmd-layout-header">
                    <div className="navbar navbar-light bg-faded">
                        <button className="navbar-toggler" type="button" onClick={this.handleClick}>
                            <span className="sr-only">Toggle drawer</span>
                            <i className="material-icons">menu</i>
                        </button>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">Title</li>
                        </ul>
                    </div>
                </header>
                <div id="dw-s1" className="bmd-layout-drawer bg-faded" aria-expanded={this.state.sideMenuActive}
                     aria-hidden={!this.state.sideMenuActive}>
                    <header>
                        <a className="navbar-brand">Beer Catalog</a>
                    </header>
                    <ul className="list-group">
                        <a className="list-group-item">Home</a>
                        <a className="list-group-item">Favorites</a>
                    </ul>
                </div>
                <main className="bmd-layout-content">
                    <div className="container">
                        <p>Main content</p>
                        <SearchBlock/>
                    </div>
                </main>
            </div>
        )
    }

}

export default Main;