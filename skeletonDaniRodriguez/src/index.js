import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter, Route, link } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector(".app-wrapper")
);