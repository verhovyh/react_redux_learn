import React, {Component} from 'react';
import SearchBox from './SearchBox.jsx';
import Filter from '../Filter.jsx';

class SearchBlock extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <Searchbox/>
          <Filter/>
        </div>
    );
  }
}

export default SearchBlock;
