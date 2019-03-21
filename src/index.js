import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css'
// router
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// store
import store from './redux/store';
import { Provider } from 'react-redux'

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/agoda" render={props => <App {...props} />} />
        <Redirect from="/" to="/agoda" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
