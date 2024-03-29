import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function formatDate(date){
    if(!date) return false;
    const hourse = `0${date.getHours()}`.slice(-2);
    const munites = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hourse}:${munites}:${seconds}`;
}

function Clock(props) {
    const [timeString, setTimeString] = useState("");
    useEffect(() => {
       const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return ()=>{
            console.log ("clean up");
            clearInterval(clockInterval);
        }
    },[])
    return (
        <div>
            <p style = {{fontSize: '42px'}}>{timeString}</p>
        </div>
    );
}

export default Clock;