import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import TopNav from './components/top-nav'
import Account from './pages/account'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import KitBuilder from './pages/kit-builder'
import PreAssembledKits from './pages/pre-assembled-kits'

render((
  <Router history={browserHistory}>
    <Route path="/" component={TopNav}>
      <Route path="account" component={Account}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="home" component={Home}/>
      <Route path="kit-builder" component={KitBuilder}/>
      <Route path="pre-assembled-kits" component={PreAssembledKits}/>
    </Route>
  </Router>
), document.getElementById('app'))
