import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Searchbox from "./searchbox.jsx";
import Filter from "../filter.jsx";



class SearchBlock extends Component {
    constructor() {
        super();

    }

    render() {
        return (
           <div>
            <Searchbox/>
            <Filter/>
           </div>
        )
    }

}

export default SearchBlock;
