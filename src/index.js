import App from "./App";
import './styles/app.css';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById("app"));