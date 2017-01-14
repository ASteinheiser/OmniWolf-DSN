import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from '../containers/layout'
import Dashboard from '../containers/dashboard'
import NotFound from '../components/not-found'

export default (
  <Route>

    <Route path="/" component={Layout}>

      <IndexRoute component={Dashboard} />

    </Route>

    <Route path="*" status={404} component={NotFound} />

  </Route>
)
