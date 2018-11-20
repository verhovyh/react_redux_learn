import React, {Component} from 'react';


export const BeerDetails = () => (
    <div>
        <div className="row mt-4 ">
            <div className="col-8 ">

                <h3 className="strong">Beer Title</h3>
                <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <a href="#" className="btn btn-primary">ADD TO FAVORITES</a>
                <p>Some quick example text to build on the card title and make up
                    the bulk
                    of the card's content.</p>
            </div>
            <div className="col">
                <img className="img-fluid"
                     src="https://atlantakick.com/wp-content/uploads/2017/07/sky-2152463_960_720.jpg"
                     alt="Card image cap"/>
            </div>

        </div>
        <div className="row">
            <div className="col-3 mt-5">
                <h3>Properties</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>ABV</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>IBU</td>
                        <td>3t</td>
                    </tr>
                    <tr>
                        <td>EBC</td>
                        <td>5</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-3 mt-5 ml-5">
                <h3>Food Pairing</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Food one</td>
                    </tr>
                    <tr>
                        <td>food two</td>
                    </tr>
                    <tr>
                        <td>food three</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h3>Brewing</h3>
        <p>dsvfsassdfsdfdsfsdfsdfsd sdfsdf sdf sdf sdf sd fsdd sdf extends</p>


        <div className="row">
            <div className="col-3 mt-5">

                <h3>Ingredients</h3>

                <table className="table">
                    <tbody>
                    <tr>
                        <td>Food one</td>
                    </tr>
                    <tr>
                        <td>food two</td>
                    </tr>
                    <tr>
                        <td>food three</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-3 mt-5 ml-5">
                <h3>Method</h3>
            </div>
        </div>


    </div>
)
