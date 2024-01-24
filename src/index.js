import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LogInForm from "./components/log-in";
import Navigation from "./components/nav-bar";
import Time from "./components/time";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <Time />
    <LogInForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
