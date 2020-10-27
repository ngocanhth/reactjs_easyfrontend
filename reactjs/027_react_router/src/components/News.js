import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, NavLink} from "react-router-dom";
import Footer from './Footer';
import New_item from './New_item';
import dl from './dulieu.json';
class News extends Component {
    render() {
        return (
            <section>
                <h1>landing page</h1>
                <div className="container">
                    <div className="row">
                        {
                            dl.map((value, key) => (
                                    <New_item
                                        key={key}
                                        anh={value.anh}
                                        tieuDe={value.tieude}
                                        trichDan={value.trichdan}
                                        noiDung={value.noiDung}
                                        idTin = {value.id}
                                    >
                                    </New_item>
                                )
                            )
                        }
                    </div>
                   
                </div>
                </section>

        );
    }
}

export default News;