import { Component } from 'react';
import './App.css';
import AddUser from './Components/AddUser';
import Header from './Components/Header';
import Search from './Components/Search';
import Tabledata from './Components/Tabledata';
import axios from "axios";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: true,
      users: [],
      dataSearchValue: "",
    }
  }

  componentDidMount() {
    axios.get(`https://1rnts.sse.codesandbox.io/users`)
      .then(res => {
        const users = res.data[0];
        this.setState({ users });
     //   console.log(users);
      })
      .catch(error => console.log(error));
  }

  inForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  getSearchValue = (dl) => {
  //  console.log (`Du lieu component cha nhan duoc laf ${dataSearchValue}`);
    this.setState({
      dataSearchValue: dl,
    });

  }

  render() {
    let searchResult = [];
    this.state.users.forEach((item) => {
      if(item.name.indexOf(this.state.dataSearchValue) !== -1){
        searchResult.push(item);
      }
    })
    console.log(searchResult);
    return (
      <div className="App">
      <Header />
      <div className="sear-form">
        <div className="container">
          <div className="row">
            <Search connect = {() => this.inForm()} showButton = {this.state.showForm}
            checkConnectProps = {(dataSearchValue) => this.getSearchValue(dataSearchValue)}
            />
            <div className="col-12">  </div>
            <Tabledata dataUserProps = {searchResult} />
            <AddUser showForm = {this.state.showForm}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

