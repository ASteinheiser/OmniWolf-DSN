import React from 'react';
import Radium from 'radium';

import NavTitle from './nav-title'
import TopNavItem from './top-nav-item'

var TopNav = React.createClass({
  render () {
    return (
      <div style={[styles.navBar]}>

        <NavTitle/>

        <div style={[styles.navTabs]}>
          <TopNavItem href='/#/pre-assembled-kits' text='Pre-Assembled Kits'/>
          <TopNavItem href='/#/part-builder' text='Part Builder'/>
          <TopNavItem href='/#/dashboard' text='Dashboard'/>
          <TopNavItem href='/#/account' text='Account'/>
          <TopNavItem href='/#/login' text='Log Out'/>
        </div>

      </div>
    );
  }
});

TopNav = Radium(TopNav);

var styles = {
  navBar: {

    backgroundColor: 'rgb(36, 41, 46)',
    WebkitBoxShadow: '0px 1px 10px 0px rgba(0,0,0,0.75)',

    zIndex: 0,
    display: 'flex',
    width: '100%',
    minHeight: '46px',
  },
  navTabs: {

    flex: 1,
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'flex-end',
    marginRight: '10px',
  }
}

export default TopNav;
