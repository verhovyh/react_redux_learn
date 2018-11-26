import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BeerCardCatalog.css';

class BeerCardCatalog extends Component {
  render() {
    return (

          <div className="card">

              <img className="card-img-top beer-card-img mx-auto d-block mt-4"
                   src={this.props.image}
                   alt="Beer image"/>

            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.description}</p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">Open</a>
                <a href="#" className="btn btn-primary" onClick={() => this.props.addToFavoriteQuotes(this.props.key)}>To Favorites</a>
              </div>
            </div>
          </div>

    );
  }
}

BeerCardCatalog.propTypes = {
  key: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default BeerCardCatalog;
