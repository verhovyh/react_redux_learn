import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Beercardcatalog from "./beercardcatalog.jsx";



class BeerCatalog extends Component {
    constructor() {
        super();

    }

    render(){
        return(
            <div className="row">
                <Beercardcatalog/>
                <Beercardcatalog/>
                <Beercardcatalog/>
                <Beercardcatalog/>
                <Beercardcatalog/>
                <Beercardcatalog/>
                <Beercardcatalog/>
                <Beercardcatalog/>

            </div>
        )
    }
}

export default BeerCatalog;
