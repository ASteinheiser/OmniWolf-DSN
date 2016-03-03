import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import TopNav from './components/top-nav'
import Account from './pages/account'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import KitBuilder from './pages/kit-builder'
import Login from './pages/login'
import PreAssembledKits from './pages/pre-assembled-kits'
import Signup from './pages/signup'

render((
  <Router history={browserHistory}>
    <Route path="/" component={TopNav}>
      <Route path="account" component={Account}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="home" component={Home}/>
      <Route path="login" component={Login}/>
      <Route path="signup" component={Signup}/>
      <Route path="pre-assembled-kits" component={PreAssembledKits}/>
      <Route path="kit-builder" component={KitBuilder}/>
    </Route>
  </Router>
), document.getElementById('app'))
