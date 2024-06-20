import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import MyClass from './MyClass';
import ClassPro from './ClassPro'
import Employee from './Employee';

const root = ReactDOM.createRoot(document.getElementById('root'));
let a = "Adil";
root.render(
  <React.StrictMode>
    <Employee name= "Adil"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
