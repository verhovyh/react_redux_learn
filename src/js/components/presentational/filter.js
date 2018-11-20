import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from "../../../App";
import Slider from "./slider";


class Filter extends Component {
    constructor() {
        super();
        this.state = {isFocused: false}


    }

    render() {
        return (
            <div className="my-4">
                <h5 className="text-center">Filter results</h5>
                <div className="container">
                    <div className="row my-4">
                    <div class="col"></div>
                    <div className="col-6">
                        <Slider/>
                        <Slider/>
                    </div>
                    <div className="col"></div>
                </div>
                </div>

            </div>


        )
    }

}

export default Filter;
