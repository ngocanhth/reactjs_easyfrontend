import React, { Component } from 'react';
import Noidung from './Noidung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      khoitao: "trangthai"
    }
  }
  //3 ham mounting
  componentWillMount() {
    console.log("componentWillMount dang chay");

  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 4 ham update state
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate da chay");
    return true;
    
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate da chay");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate da chay cuoi cung");
  }
  
  capnhatState = () => {
      this.setState({
        trangthai: "cap nhat 1",
        trangthai2: "cap nhat 2",
      }
    );
  }
  render() {
  console.log(this.state.trangthai);
  
    return (
      <div>
        <Noidung ten={this.state.trangthai2}></Noidung>
        <button onClick = {() => this.capnhatState()}>Update State</button>

      </div>
    );
  }
}

export default App;
