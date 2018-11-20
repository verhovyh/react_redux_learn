import React, {Component} from 'react';
import SearchBlock from "../presentational/searchblock";
import BeerCatalog from "../presentational/beercatalog";



export const Homepage = () => (

    <div className="container">
        <SearchBlock/>
        <BeerCatalog/>
    </div>

)
