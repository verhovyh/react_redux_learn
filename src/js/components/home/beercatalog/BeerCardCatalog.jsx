import React, {Component} from 'react'



class BeerCardCatalog extends Component {
    constructor() {
        super();

    }

    render() {

        return (

            <div className="col-md-6 col-lg-4 mt-4">
                <div className="card" >
                    <img className="card-img-top"
                         src="https://atlantakick.com/wp-content/uploads/2017/07/sky-2152463_960_720.jpg"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Beer Name</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <div className="card-footer">
                        <a href="#" className="btn btn-primary">Open</a>
                        <a href="#" className="btn btn-primary">To Favorites</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeerCardCatalog;
