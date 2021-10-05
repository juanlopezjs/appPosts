import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "./Styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import App from "./Container/Main";
import store from "./Store/index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
