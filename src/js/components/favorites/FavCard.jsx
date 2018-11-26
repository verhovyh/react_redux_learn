import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class FavCard extends Component {
  constructor() {
    super();

  }

  render() {

    return (

        <div className="card mt-4">
          <div className="row no-gutters">
            <div className="col-8 ">

              <div className="card-body">
                <h3 className="card-title strong">Beer Title</h3>
                <p>
                  <small>This line of text is meant to be treated as fine
                    print.
                  </small>
                </p>
                <p className="card-text">Some quick example text to build on the
                  card title and make up
                  the bulk
                  of the card's content.</p>

              </div>

              <a href="#" className="btn btn-primary">Open</a>
              <a href="#" className="btn btn-primary">Remove Favorite</a>

            </div>
            <div className="col">
              <img className="img-fluid"
                   src="https://atlantakick.com/wp-content/uploads/2017/07/sky-2152463_960_720.jpg"
                   alt="Card image cap"/>
            </div>

          </div>
        </div>

    );
  }
}

export default FavCard;
