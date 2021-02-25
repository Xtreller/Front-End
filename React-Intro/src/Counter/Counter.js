import React from 'react';
import '../style/app.css';
import rerender from '../index';
import App from '../App';


let clicks = 0;
let maxClix = 0;
const incrementCntr = () => {
    clicks += 1
    if(maxClix<=clicks)maxClix=clicks;
    rerender(App(),document.getElementById('root'))
}
const resetCntr = () =>{
    clicks = 0;
    rerender(App(),document.getElementById('root'))
}

const Counter =()=>(
    <div className='content centered counter'>
    <span className="counter">
        Max Clicks: {maxClix}
        <br></br>
    <button className="counter" onClick={()=>incrementCntr()}>
        Clicked {clicks} times
    </button>
    <button  className="counter" onClick={()=>resetCntr()}>
        RESET 
    </button>
    </span>
    </div>
)



export default Counter;
