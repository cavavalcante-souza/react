import React from 'react';
import './Timer.css';

class Timer extends React.Component{
    render(){ 
        return (<div class="timer">
            <span>00</span>
            <span>00</span>
        </div>);
    }
}

export default Timer;