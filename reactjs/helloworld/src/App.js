import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  showInforProduct (person) {
    if(person.status) {
      return (
      <div>
        <h3>  Myname: {person.lastname+person.name} </h3>
        <h3>  {person.status ? "Active":"Pending"} </h3>
      </div>
    )}
  }
  render() {
    var person = {
      id: 134,
      name: "NgocAnh",
      lastname: "Le",
      yearOld: 1988,
      status: true
    }
    var a = 1;
    var b = 4;
    var c = 6;

    var users = [
      {
        id:1,
        name: "Ngoc Anh",
        age: 9

      },
       {
        id:2,
        name: "Cong Phuong",
        age: 29

      },
       {
        id:3,
        name: "Nguyen Toan",
        age: 18
      }
    ];

    var elements = users.map ((user,index) => {
      return (
          <div key = {user.id} className="user-item">
               <h2>{user.name}</h2>
               <h2>{user.age}</h2>
          </div>
        )
    })
    return (
       <div className="test">
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
            a+b = {a+b} <br/>
          {this.showInforProduct(person)}
          <br/>
          <hr/>
          {elements}
       </div>
    );
  }
}
 export default App;



