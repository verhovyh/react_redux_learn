import React, {Component} from 'react'


import {Homepage} from "./js/pages/homepage";
import {Favorites} from "./js/pages/favoritespage";
import { Switch, Route, Link } from 'react-router-dom';
import {BeerDetails} from "./js/pages/beerdetailspage";
import Navigation from "./js/components/home/navigation/Navigation.jsx";


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
              <Navigation handleClick={this.handleClick} />

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

