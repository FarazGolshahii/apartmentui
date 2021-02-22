import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "argon-dashboard-react/src/assets/scss/argon-dashboard-react.scss";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
