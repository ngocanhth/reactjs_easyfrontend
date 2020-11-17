import React, { Component } from 'react';

class TableDataRow extends Component {
    SwitchCase = (props) => {
        switch(props) {
            case 1:
              return 'Admin.';
            case 2:
              return 'Manager.';
            case 3:
                return 'Moderator';
            default:
              return 'User';
          }
    }
    render() {
        return (
            <tr>
               <td>{this.props.value.id}</td>
                <td>{this.props.value.name}</td>
                <td>{this.props.value.phone}</td>
                <td>
                {
                    this.SwitchCase(this.props.value.access)
                }
                </td>
                <td>
                    <div className="btn-group">
                    <button className="btn btn-warning edit"><i className="fa fa-edit" />Edit</button>
                    <button className="btn btn-danger edit "><i className="fa fa-edit" />Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;