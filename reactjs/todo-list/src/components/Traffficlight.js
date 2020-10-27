import React, { Component } from 'react';
import classNmaes from 'classnames';
import './Traffficlight.scss';


const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class Traffficlight extends Component {
    render() {
        const {currentColor} = this.props;
        return (
            <div className="trafficlight">
                 <div className={classNmaes("bulb" ,"red",{
                     active:  currentColor === RED
                 })}/>
                 <div className={classNmaes("bulb" ,"yellow",{
                     active: currentColor === YELLOW
                 })}/>
                 <div className={classNmaes("bulb" ,"green",{
                     active:  currentColor === GREEN
                 })}/>
            </div>
        );
    }
}

export default Traffficlight;