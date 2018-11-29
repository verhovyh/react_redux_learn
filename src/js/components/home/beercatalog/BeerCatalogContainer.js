import React, {Component} from 'react';

import PunkAPIService from '../../../services/punkapiservice';
import BeerCatalog from './BeerCatalog.jsx';

const punkAPI = new PunkAPIService();

class BeerCatalogContainer extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    punkAPI.getBeers().then(data => this.setState({data}));
  }

  render() {
    return (<BeerCatalog beers={this.state.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  const { data } = state.quotes;

  return {
    quotes: data,
  };
};

export default BeerCatalogContainer;
