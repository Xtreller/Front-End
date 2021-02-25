import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import Counter from './Counter/Counter';
import Timer from './Timer/Timer';
import reportWebVitals from './reportWebVitals';

const rerender = ReactDOM.render
ReactDOM.render(
  App(),
  document.getElementById('root')
  );

 
  export default rerender;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
