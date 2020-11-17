import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Project quan ly du lieu va tim kiem thanh vien bang reactjs</h1>
                    <p className="lead">Jumbo helper text</p>
                    <hr className="my-2" />
                    <p>More info</p>
                    <p className="lead">
                    <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Header;