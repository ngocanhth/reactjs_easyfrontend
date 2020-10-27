import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, NavLink, useParams} from "react-router-dom";
import dl from './dulieu.json';
// let child () => {
//     useParams()
// };
let { slug } = useParams();
class NewDetail extends Component {
    render() {
        console.log(slug);
        return (
            
            // dl.map((key,value) => {
            
            // })
            <section className="download bg-primary text-center" id="download">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <img src="http://placehold.it/600x400" alt="" />
                    <h1 className="display-3">Fluid jumbo heading</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>More info</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    </p>
                    <div className="row">
                        <div className="card-deck">
                        <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/200x200" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title"><a href="chitet.html">chitiet</a></h4>
                            <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/200x200" alt="" /></a>
                            <h4 className="card-title"><a href="chitet.html">chitiet</a></h4>
                            <p className="card-text">Text</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>  
                </section>

        );
    }
}

export default NewDetail;