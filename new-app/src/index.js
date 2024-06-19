import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import MyClass from './MyClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
let a = "Adil";
root.render(
  <React.StrictMode>
    <MyClass name={a} age={22}>
<h2>Child No : 1</h2>
    </MyClass>
    <MyClass name="Kumar" age={26}>
    <button type='button' >Submit</button>
    </MyClass>
    <MyClass name="Amit" age={28}>
    <ol>
      <li>Ali</li>
      <li>Zain</li>
      <li>Noman</li>
    </ol>
    </MyClass>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
