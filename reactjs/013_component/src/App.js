import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu.js';
import Header from './Component/Header/Header.js';
import Content from './Component/Content/Sections.js';
import Footer from './Component/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
         <TopMenu/>
         <Header/>
         <Content title="Cach su dung props bang calss 1" order="order-lg-2" src="img/01.jpg"/>
         <Content title="Cach su dung props bang calss 2" src="img/02.jpg"/>
         <Content title="Cach su dung props bang calss 3" order="order-lg-2" src="img/03.jpg"/>
         <Footer/>
      </div>
    );
  }
}
export default App;
