import React from 'react';
import '../style/app.css';
import rerender from '../index';
import App from '../App';

const Timer = () => (<div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )


export default Timer();
