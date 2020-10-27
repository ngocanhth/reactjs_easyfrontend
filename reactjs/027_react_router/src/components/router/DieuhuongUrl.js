import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
    // useParams
  } from "react-router-dom";

 import { useParams } from "react-router";
import Home from '../Home';
import News from '../News';
import NewDetail from '../NewDetail'; 
import Contact from '../Contact';
// function getidTin() {
//     let { id } = useParams();
//     return {id};
// }
function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    return (
        <div>
        <h3>ID: {id}</h3>
        </div>
    );
}

function BlogPost({ match }) {
    let { slug } = match.params
    return slug;
}

class DieuhuongUrl extends Component {
    render() {
        console.log((this.props.match));
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/tintuc">
                        <News/>
                    </Route>
                    <Route path="/chitiet/:slug.:id.html">
                        <NewDetail />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default DieuhuongUrl;