import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import TopNav from './components/top-nav/index'

render((
  <Router history={browserHistory}>
    <Route path="/" component={TopNav}>
    </Route>
  </Router>
), document.getElementById('app'))
