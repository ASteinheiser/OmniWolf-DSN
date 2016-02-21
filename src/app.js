import React from 'react';
import Router from 'react-router';

import LandingPageRoute from './routes/landing';
import LoginRoute from './routes/login';
import SignupRoute from './routes/signup';
import NewProfileRoute from './routes/new-profile';
import NotFoundRoute from './routes/not-found';
import DashboardRoute from './routes/dashboard';
import AccountRoute from './routes/account';
import PreAssembledKitsRoute from './routes/pre-assembled-kits';
import KitBuilderRoute from './routes/kit-builder';

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler />
      </div>
    )
  }
});

var routes = (
  <Route path='/' handler={App}>
    <Route path='home' handler={LandingPageRoute}/>
    <Route path='login' handler={LoginRoute}/>
    <Route path='signup' handler={SignupRoute}/>
    <Route path='signup/profile' handler={NewProfileRoute}/>
    <Route path='dashboard' handler={DashboardRoute}/>
    <Route path='account' handler={AccountRoute}/>
    <Route path='pre-assembled-kits' handler={PreAssembledKitsRoute}/>
    <Route path='kit-builder' handler={KitBuilderRoute}/>
    <Route path='*' handler={NotFoundRoute}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root/>, document.getElementById('root'));
});
