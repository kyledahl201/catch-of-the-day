import React from "react";
// import ReactDOM from "react-dom";
import { render } from 'react-dom';
// import StorePicker from './components/StorePicker';
import "./index.css";
import './css/style.css';
// import App from "./App";
import Router from "./components/Router"
import * as serviceWorker from "./serviceWorker";

// this renders our router to our main page

render (<Router />, document.querySelector('#main'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
