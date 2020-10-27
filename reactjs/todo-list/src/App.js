import React, { Component } from 'react';
import './App.scss';
import logo from './logo.svg';
import Todoitem from './components/Todoitem';
import Traffficlight from './components/Traffficlight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentColor: RED
    };
    this.state = {
      todoItems:[
        {iphoneversion: "Iphone XS", isComplete: true},
        {iphoneversion: "Iphone XS Max"},
        {iphoneversion: "Iphone XS Max Pro", isComplete: true},
        {iphoneversion: "Iphone 12 Pro Max"},
      ]
    }

    setInterval(() => {
      // console.log(this.state.currentColor);
       this.setState ({
           currentColor: this.getNextColor(this.state.currentColor)
       });
      }, 1000)
     // this.onItemClick = this.onItemClick.bind(this);
  }
  getNextColor(color){
      switch(color){
          case RED:
              return YELLOW;
          case YELLOW:
              return GREEN;
          default:
          return RED;
      }
  }
  onItemClick(item){
    return (evetn) => {
    const isComplete = item.isComplete;
    const { todoItems } = this.state;
    const index = todoItems.indexOf(item);
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoItems.slice(index+1)
      ]
    });
    };
  }
  render(){
    const {currentColor} = this.state;
    return (
      <div className="App">
        {
          this.state.todoItems.length && this.state.todoItems .map((item,index) => 
            <Todoitem 
            key = {index} 
            item={item}
            onClick={this.onItemClick(item)}/>
          )
        }
        {this.state.todoItems.length === 0 && "Nothing here"}

        {/* <Traffficlight currentColor={currentColor}/> */}
      </div>
    )
  }
}

export default App;