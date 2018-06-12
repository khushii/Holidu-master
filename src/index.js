import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./configurestore";
const title = 'My Minimal React Webpack Babel Setup';

const store = configureStore();
ReactDOM.render(
<Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();