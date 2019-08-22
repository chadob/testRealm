
import React from "react";
import {render} from "react-dom";
import reducer from "./reducers";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router'; // react-router v4
import App from "./App.js";

const store = createStore(reducer)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
