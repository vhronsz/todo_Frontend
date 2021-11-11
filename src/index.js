import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Page/Login.jsx";
import Dump from "./Page/Dump.jsx";
import {useRoutes} from "hookrouter";

const route = {
  "/" : ()=> <Login/>,
  "/dump" : ()=> <Dump/>
}

function Router(){
  const router = useRoutes(route);
  return router;
}


ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
