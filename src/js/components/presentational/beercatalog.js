import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import BeerCardCatalog from "./beercardcatalog";



class BeerCatalog extends Component {
    constructor() {
        super();

    }

    render(){
        return(
            <div className="row">
                <BeerCardCatalog/>
                <BeerCardCatalog/>
                <BeerCardCatalog/>
                <BeerCardCatalog/>
                <BeerCardCatalog/>
                <BeerCardCatalog/>
                <BeerCardCatalog/>
                <BeerCardCatalog/>

            </div>
        )
    }
}

export default BeerCatalog;
