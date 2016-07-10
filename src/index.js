import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Layout from './pages/layout'
import Account from './pages/account'
import Dashboard from './pages/dashboard'
import NoMatch from './pages/no-match'
import Home from './pages/home'
import KitBuilder from './pages/kit-builder'
import Login from './pages/login'
import PreAssembledKits from './pages/pre-assembled-kits'
import Signup from './pages/signup'
import reducers from './redux/reducers'
import configureStore from './redux/configureStore'

// Add the reducer to your store on the `routing` key
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="account" component={Account}/>
        <Route path="dashboard" component={Dashboard}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="pre-assembled-kits" component={PreAssembledKits}/>
        <Route path="kit-builder" component={KitBuilder}/>

        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
