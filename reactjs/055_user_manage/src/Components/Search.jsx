import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempvalue: ""
    }
  }

  isChange = (event) => {
 //  console.log(event.target.value);
    this.setState({
      tempvalue: event.target.value
    });
    this.props.checkConnectProps(this.state.tempvalue);
  }
  showButton = () => {
    if(this.props.showButton){
      return  <div onClick = {() => this.props.connect()} className="btn btn-block btn-secondary">
          Close
      </div>
    } else {
      return  <div onClick = {() =>  this.props.connect()} className="btn btn-block btn-info">
          Add new user
      </div>
    }
  }
    render() {
        return (
            <div className="col-12">
              <div className="form-group">
                <div className="btn-group">
                  <input onChange = {(event) => this.isChange(event)} type="text" name="search" className="form-control" placeholder="Nhập từ khóa" aria-describedby="helpId" />
                  <button onClick = {(dataSearchValue) => this.props.checkConnectProps(this.state.tempvalue)} type="button" className="btn btn-primary">Tìm</button>
                </div>

                {
                  this.showButton()
                }
          
              </div>
            </div>
        );
    }
}

export default Search;