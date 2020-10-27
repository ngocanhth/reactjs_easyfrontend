import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function One(){
  return <div>Cach so 1</div>
}
function One1(){
  return (
    <div>
      <div>Cach so 1.1</div>
      <div>Cach so 1.2</div>
    </div>
  )
}

let Anonimous = function(){
  return (
    <div>
      <h3>Anonimous function</h3>
      <h4>Anonimous function</h4>
    </div>
  );
}

var Arrow = ()  => (
    <div>
      <h2>arrow function</h2>
      <h2>arrow function</h2>
    </div>
);

class Four extends Component {
  render() {
    return (
      <div>
        <h3>reacjs tao tu className</h3>
        <button classNameName="btn">
            <span classNameName="badge badge-primary">submit</span>
        </button>
      </div>
    );
  }
}

function Numberone (props){
  return (
    <div classNameName ="col-sm-6">
      <h3>{props.title}</h3>
      <img alt={props.title} src={props.src}></img>
  </div>
  );
}
//Su dung className de dinh nghia props
class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
         <p className="card-text">Su dung className de dinh nghia props</p>
        <div className="card">
          <img className="card-img-top" src={this.props.src} alt={this.props.title}/>
          <div className="card-body">
              <h4 className="card-title">{this.props.title}</h4>
              <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
                Display value
              </label>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

//Su dung ham Map

const arr1 = [1, 2, 3, 4];

const arr2 = arr1.map(x => x*x);

const Ulli = arr1.map(x => (
  <div>
      <ul>
        <li>{x}</li>
      </ul>
  </div>

));

class GetMap extends Component {
  render() {
    return (
      <div>
        <p className="map">Su dung ham MAP</p>
        {arr2}
        {Ulli}
      </div>
    );
  }
}


function App() {
  return (
    <div classNameNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>helllo</p>
          Learn React
        </a>
        <One/>
        <One1>     </One1>
        <Anonimous/>
        <Arrow/>
        <hr></hr>
        <Four/>
        <GetMap/>
        <hr></hr>
        <h3>arrow function</h3>
 
      </header>

        <div classNameName="container">
          <div classNameName="row">
            <Numberone title="San Pham 1" src="https://via.placeholder.com/300/09f/fff.png"/>
            <Numberone title="San Pham 2" src="https://via.placeholder.com/300/57f/fff.png"/>
            <NumberTwo title="San Pham 3" src="https://via.placeholder.com/300/535/fff.png"/>
            
          </div>
        </div>

    </div>
  );
}

export default App;
