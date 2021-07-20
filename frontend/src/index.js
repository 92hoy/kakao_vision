import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
// import { createStore } from "redux";
// import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
// import { button } from "@material-ui/core";

const store = configureStore();
// const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
