import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from './User';
import HelloMessage from './HelloMessage';
import House from './House';


const root = ReactDOM.createRoot(document.getElementById('root'));
let a = " Amir";
root.render(

  <House/>
    /* <HelloMessage name={a} age=" 23">
      <p>Children Element</p>
    </HelloMessage>
    <HelloMessage name=" Kumar" age=" 25">
    <button type='button ' value="Click"> Click</button>
    </HelloMessage>
    <HelloMessage name=" Amit" age=" 22">
    <h3>Children Element 3</h3>
    </HelloMessage>
  </> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
