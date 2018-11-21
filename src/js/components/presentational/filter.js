import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from "../../../App";
import Slider from "./slider/slider";


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

                    <div className="col-xs-12 col-lg-8 mx-auto">
                        <Slider/>
                        <Slider/>
                    </div>

                </div>
                </div>

            </div>


        )
    }

}

export default Filter;
