import React, {Component} from 'react'


import {Homepage} from "./js/pages/homepage";
import {Favorites} from "./js/pages/favoritespage";
import { Switch, Route, Link } from 'react-router-dom';
import {BeerDetails} from "./js/pages/beerdetailspage";


class App extends Component {
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
                className={"container bmd-layout-container bmd-drawer-f-l " + (this.state.sideMenuActive ? "bmd-drawer-in" : "bmd-drawer-out")}>
                <header className="bmd-layout-header">
                    <div className="navbar navbar-light bg-faded">
                        <button className="navbar-toggler" type="button" onClick={this.handleClick}>
                            <span className="sr-only">Toggle drawer</span>
                            <i className="material-icons">menu</i>
                        </button>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">Beer Catalog</li>
                        </ul>
                    </div>
                </header>
                <div id="dw-s1" className="bmd-layout-drawer bg-faded" aria-expanded={this.state.sideMenuActive}
                     aria-hidden={!this.state.sideMenuActive}>
                    <header>
                        <h3>Beer Catalog</h3>
                    </header>
                    <ul className="list-group">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/fav'>Favorites</Link></li>
                    </ul>
                </div>

                <main className="bmd-layout-content">
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/fav' component={Favorites}/>
                        <Route exact path='/details' component={BeerDetails}/>
                    </Switch>
                </main>
            </div>
        )
    }

}

export default App;

