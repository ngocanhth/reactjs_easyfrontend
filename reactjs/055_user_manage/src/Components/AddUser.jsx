import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            editStatus: false
        }
    }
    showButton = () => {
        if(this.state.editStatus === true) {
            return  <div onClick = {() => this.changeStatus()} className="btn btn-block btn-secondary">
            Close
         </div>
        }else {
            return  <div onClick = {() => this.changeStatus()} className="btn btn-block btn-info">
            Add new user
        </div>
        }
    }
    changeStatus = () => {
        this.setState({
            editStatus: !this.state.editStatus,
        });
    }
    showForm = () => {
        if(this.state.editStatus === true) {
            return  (
                <div className="card border-primary mb-3 mt-3">
                    <div className="card-header mb-3"> Them moi user vao he thong</div>
                    <div className="card-body text-primary">
                    <h4 className="card-title">ten user</h4>
                    <div className="form-group">
                        <label htmlFor="user">Username</label>
                        <input type="text" className="form-control" name="newuser" id="user" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="selectadmin">
                        <option>Chon quyen default</option>
                        <option>Admin</option>  
                        <option>Moderator</option>
                        <option>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary">Them moi</button>
                    </div>
                    </div>
                </div>
            )
        }
    }
    showForm1 = () => {
        if(this.props.showForm === true) {
            return  (
                <div className="card border-primary mb-3 mt-3">
                    <div className="card-header mb-3"> Them moi user vao he thong</div>
                    <div className="card-body text-primary">
                    <h4 className="card-title">ten user</h4>
                    <div className="form-group">
                        <label htmlFor="user">Username</label>
                        <input type="text" className="form-control" name="newuser" id="user" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="selectadmin">
                        <option>Chon quyen default</option>
                        <option>Admin</option>  
                        <option>Moderator</option>
                        <option>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary">Them moi</button>
                    </div>
                    </div>
                </div>
            )
        }
    }
    render() {
      //  console.log(this.props.showForm);
        return (
            <div className="col-3">
                <div className="raafs">
                    {
                        this.showButton()
                    }
                    {
                        this.showForm()
                    }
                    {
                        this.showForm1()
                    }
                 </div>
            </div>
        );
    }
}

export default AddUser;