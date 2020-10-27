import React, { Component } from 'react';

class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 1,
        }
    }

    thongbao = () => console.log("Cach xu ly tuong tac trong Reacjs");
    thongbao2 = () => alert("thong bao 2");
    thongbao3 = (x) => alert(x);
    renderButton = ()  => {
        return (
            <div className="row">
                <div className="btn btn-group">
                    {/* <div className="btn btn-info" onClick={this.thongbao}>Edit</div> */}
                    <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                    <div className="btn btn-warning" onClick={this.thongbao2}>Remove</div>
                    <div className="btn btn-warning" onClick={() => this.thongbao3("Thong bao 3 arrow function")}>Submit</div>
                    <div className="btn btn-warning" onClick={this.thongbao3.bind(this,"Viet tuong tac theo kieu binding cua reacjs")}>Binding</div>
                </div>
            </div>
      )
    }
    renderForm = ()  => (
        <div className="row">
            <div className="form-group">
                <input ref =  {formdata => {this.input = formdata}}  type="text" className="form-control" name="name" id defaultValue={this.props.title} defaultChecked />
                <button className="btn btn-info" onClick={() => this.saveForm()}>Save</button>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="name" id defaultValue="defaultValue TITLE" defaultChecked />
                <button className="btn btn-info" onClick={() => this.saveForm()}>Save</button>
            </div>
        </div>
    )

    displayCheck = ()  => {
        if(this.state.status===1){
          return  this.renderButton();
        } else {
          return  this.renderForm();
        }
    }
    editClick = ()  => {
        this.setState({
            status: 0,
        });
    }
    saveForm = ()  => {
        this.setState({
            status: 1,
        });
        console.log(this.input.value);
        
    }
    render() {
        return (
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={"col-lg-6 " + this.props.order}>
                                <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.src} alt={this.props.title} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                <h2 className="display-4">{this.props.title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                </div>
                            </div>
                        </div> 
                           
                     {this.displayCheck()}
                    </div>
                </section>
        );
    }
}

export default Sections;