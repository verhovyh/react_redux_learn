

import PunkAPIService from '../../services/punkapiservice';

const punkAPI = new PunkAPIService();

export const FIND_BEERS = 'FIND_BEERS';


const fetchBeersAction = filter => ({
  type: FIND_BEERS,
  payload: punkAPI.getBeers(filter),
});


export { fetchBeersAction as fetchBeers };
