import React, {Component} from 'react';
import Searchblock from "../components/home/search/SearchBlock.jsx";
import Beercatalog from "../components/home/beercatalog/BeerCatalog.jsx";


export const Homepage = () => (

    <div className="container">
        <Searchblock/>
        <Beercatalog/>
    </div>

)
