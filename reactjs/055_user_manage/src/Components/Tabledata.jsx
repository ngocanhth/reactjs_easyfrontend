import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
class Tabledata extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     users: []
  //   };
  // }
     mappingDataRow = () => this.props.dataUserProps.map((value, key) =>  (
          <TableDataRow key={key} value={value}/>
      ));

    render() {
      // const { users } = this.state;
   //   console.log(this.props.dataUserProps[0]);
        return (
            <div className="col-9">
              <table className="table table-striped table-hover">
                <thead className="thead-inverse">
                  <tr>
                    <th>STT</th>
                    <th> Name</th>
                    <th>Phone</th>
                    <th>Access</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  this.mappingDataRow()
                 }
                </tbody>
              </table>
            </div>
        );
    }
}

export default Tabledata;