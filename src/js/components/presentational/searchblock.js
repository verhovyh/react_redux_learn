import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import SearchBox from "./searchbox";
import Filter from "./filter";



class SearchBlock extends Component {
    constructor() {
        super();

    }

    render() {
        return (
           <div>
            <SearchBox/>
            <Filter/>
           </div>
        )
    }

}

export default SearchBlock;
