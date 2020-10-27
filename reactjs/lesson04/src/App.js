import React, {Component} from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
  render () {
    var products = [
      {
        id : 1,
        name : "Iphone 7 Plus",
        price : "57890",
        image : "https://images-na.ssl-images-amazon.com/images/I/61l0Et95kQL._AC_SY445_.jpg",
        status : true
      },
      {
        id : 2,
        name : "Iphone 8 Plus",
        price : "45000",
        image : "https://images-na.ssl-images-amazon.com/images/I/61l0Et95kQL._AC_SY445_.jpg",
        status : false
      },
      {
        id : 3,
        name : "SAMSUNG Glaxy 16",
        price : "65000",
        image : "https://images-na.ssl-images-amazon.com/images/I/61l0Et95kQL._AC_SY445_.jpg",
        status : false
      }
    ];

    let elements = products.map((product, index) => {
      return (
          <Product
            key = {product.id}
            price = {product.price}
            image = {product.image}
            status = {product.status}
            >
            {product.name}
          </Product>
        )
    });
    return (
       <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" >Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" >Action</a>
                      <a className="dropdown-item" >Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" >Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" >Disabled</a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
         </nav> 
          <div className="container">
          <div className="row">
              {elements}
            </div>
          </div>  
       </div>
    );
  }
}

export default App;
