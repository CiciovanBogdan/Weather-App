import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MyVersion from './App';
import { Temperature } from './Temperature.js';

// ReactDOM.render(
//   <MyVersion />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Temperature />,
  document.getElementById('temp-app')
);
