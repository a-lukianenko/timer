import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createStore, compose, applyMiddleware } from "redux";
import { root } from "./store/root";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Saga imports
import createSagaMiddleware from "redux-saga";
import watchLocalStorage from "./store/sagas";

import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  root,
  compose(
    applyMiddleware(thunk, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(watchLocalStorage);

const app = (
  <Provider store={store}>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </Provider>
);

render(app, document.getElementById("root"));
