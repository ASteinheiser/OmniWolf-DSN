import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

import Layout from './pages/layout'
import Account from './pages/account'
import Dashboard from './pages/dashboard'
import NoMatch from './pages/no-match'
import Home from './pages/home'
import KitBuilder from './pages/kit-builder'
import Login from './pages/login'
import PreAssembledKits from './pages/pre-assembled-kits'
import Signup from './pages/signup'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/account" component={Account}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/pre-assembled-kits" component={PreAssembledKits}/>
      <Route path="/kit-builder" component={KitBuilder}/>

      <Route path="/*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'))
