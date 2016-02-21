import React from 'react';
import Radium from 'radium';

import TopNav from '../components/top-nav/top-nav';
import HomeLayout from '../components/layouts/home-layout';

var LandingPage = React.createClass({
  render () {
    return (
      <HomeLayout>
        <div style={[styles.text]}>
          <font style={[styles.title]}>OmniWolf</font>
          <font style={[styles.title, styles.blue]}>DSN</font>
          <br/>
          <font style={[styles.body]}>An Open Source, Modular, Distributed Sensor Network</font>
          <br/>
          <font>Choose from our pre-assembled kits or design your own, to ensure you get only what you need!</font>
          <br/>
          <font>Currently under development...</font>
        </div>
      </HomeLayout>
    );
  }
});

LandingPage = Radium(LandingPage);

var styles = {
  text: {

    fontSize: '30px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215,215,215)',
    WebkitFontSmoothing: 'antialiased',
    textAlign: 'center',

    paddingTop: '20px',
  },
  title: {

    fontSize: '70px',
  },
  body: {

    fontSize: '45px',
  },
  blue: {

    color: 'rgb(72, 124, 236)',
  }
};

export default LandingPage;
