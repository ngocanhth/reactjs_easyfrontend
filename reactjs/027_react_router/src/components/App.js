import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import News from './News';
import NewDetail from './NewDetail';
import Contact from './Contact';
import Footer from './Footer';
import DieuhuongUrl from './router/DieuhuongUrl';

function App() {
 constructor(props) {
    super(props);
    this.state = {
      khoitao: "trangthai",
      persons: []
    }
  };


  componentDidMount() {
    console.log('componentDidMount');
     axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
      })
  }

  return (
    <Router>
      <div className="App">
        <Nav/>
        {/* <Home/> */}
      {/* <News/> */}
      {/* <NewDetail/> */}
        {/* <Contact/> */}
        <DieuhuongUrl/>
        <Footer/>
      </div>
    </Router>
  );



}

export default App;
