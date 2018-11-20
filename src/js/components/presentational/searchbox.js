import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import App from "../../../App";


class SearchBox extends Component{
    constructor(){
        super();
        this.state = {isFocused : false}

        this.onFocus = this.onFocus.bind(this);
        this.onUnFocus = this.onUnFocus.bind(this);
    }
    onFocus(){
             this.setState({isFocused : true})
    }
    onUnFocus(){
        this.setState({isFocused : false})
    }

    render(){
        return(
            <form>
                <div className="row">
                    <div className="col"/>
                <div className={"col-8 form-group bmd-form-group " + (this.state.isFocused ? "is-focused" : "") } onFocus={this.onFocus} onBlur={this.onUnFocus}>
                    <label className="bmd-label-floating">Search</label>
                    <input type="search" className="form-control"/>
                    <span className="bmd-help">Search beer</span>
                </div>
                    <div className="col"/>
                </div>
            </form>
        )
    }

}
export default SearchBox;
