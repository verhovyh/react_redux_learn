import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';



class Slider extends Component {
    constructor() {
        super();
        this.state = {value : 50};
        this.onInput = this.onInput.bind(this);
    }

    onInput() {
        this.setState({value})

    }

    render() {
        let currentValue = this.state.Value;
        return (
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value={currentValue} className="slider" id="myRange"
                       onInput={this.onInput}/>
            </div>
        )
    }

}

export default Slider;
