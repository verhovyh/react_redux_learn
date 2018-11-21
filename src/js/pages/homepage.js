import React, {Component} from 'react';
import Searchblock from "../components/home/search/searchblock.jsx";
import Beercatalog from "../components/home/beercatalog/beercatalog.jsx";


export const Homepage = () => (

    <div className="container">
        <Searchblock/>
        <Beercatalog/>
    </div>

)
