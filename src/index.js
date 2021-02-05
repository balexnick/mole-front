import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { rootReduser } from "reducers/reducers";
import "index.css";

export const browserHistory = createBrowserHistory();
export const store = createStore(rootReduser, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
