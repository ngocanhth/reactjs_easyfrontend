import React, { Component } from 'react';

class Noidung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('PROPS - componentWillReceiveProps' + nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('PROPS - shouldComponentUpdate Props');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('PROPS -componentWillUpdate Props');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('PROPS - componentDidUpdate Props');
    }
    
    
    
    
    render() {
        console.log("render cua noi dung");
        return (
            <div>
                <h3>{this.props.ten}</h3>
            </div>
        );
    }
}

export default Noidung;