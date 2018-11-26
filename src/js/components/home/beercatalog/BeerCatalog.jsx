import React, {Component} from 'react';
import BeerCardCatalog from './BeerCardCatalog.jsx';

class BeerCatalog extends Component {
  render() {
    return (
        <div className="card-columns">
         {this.props.beers.map(beer => <BeerCardCatalog key={beer.id} name={beer.name} description={beer.description} image={beer.image_url}/>)}

        </div>);
  }
}

export default BeerCatalog;
