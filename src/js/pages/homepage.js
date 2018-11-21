import React, {Component} from 'react';
import Searchblock from "../components/home/search/SearchBlock.jsx";
import Beercatalog from "../components/home/beercatalog/BeerCatalog.jsx";
import Counter from "../components/home/Counter.jsx";


export const Homepage = () => (

    <div className="container">
        <Counter/>
        <Searchblock/>
        <Beercatalog/>
    </div>

)
