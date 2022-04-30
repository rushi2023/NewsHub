import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/NewsHub" >
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
