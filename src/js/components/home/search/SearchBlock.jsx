import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Searchbox from "./SearchBox.jsx";
import Filter from "../Filter.jsx";



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
