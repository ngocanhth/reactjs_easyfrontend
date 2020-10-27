import React, { Component } from 'react';
import classNames from 'classnames';
import './Todoitem.scss';
class Todoitem extends Component {
    // constructor(props){
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    // onItemClick(){
    //    console.log(this.props.item);
    //    this.props.item.isComplete = ! this.props.item.isComplete;
    // }
    render() {
        const { item, onClick } = this.props;
        let className = "todoitem";
        if(item.isComplete) {
          className += " todoitem-complete";
        }
        return (
            <div onClick={onClick} className={classNames('todoitem', {
                'todoitem-complete': item.isComplete
                })}>
                <p className={className}>{this.props.item.iphoneversion}</p>
            </div>
        );
    }
}

export default Todoitem;