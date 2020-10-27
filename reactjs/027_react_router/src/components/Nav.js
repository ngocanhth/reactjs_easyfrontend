import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                 {/* Navigation */}
                 
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">Reacjs Router</Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger"  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }} to="/tintuc">Tin tuc</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/chitiet">Chi tiet</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </div>
        );
    }
}

export default Nav;