import React, {Component} from 'react'

import './slider.css'


class Slider extends Component {
    constructor() {
        super();
        this.state = {value: 50};
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.setState({value: e.target.value})

    }

    render() {
        let currentValue = this.state.value;
        return (
            <div className="row  my-3">
                <div className="col-2 text-right">
                    IBU
                </div>
                <div className="col-1"><label className="text-center">{currentValue}</label></div>
                <div className="col slidecontainer">

                    <input type="range" min="1" max="100" value={currentValue} className="slider" id="myRange"
                           onInput={this.onInput}/>
                </div>
            </div>
        )
    }

}

export default Slider;
