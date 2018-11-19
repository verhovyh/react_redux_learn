import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from "../../../App";
import Slider from "./slider";



class Filter extends Component{
    constructor(){
        super();
        this.state = {isFocused : false}


    }

    render(){
        return(
            <div>
            <h5 className="text-center">Filter search Results</h5>
            <Slider/>
            </div>
        )
    }

}
export default Filter;
