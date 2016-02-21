import React from 'react';
import Radium from 'radium';

import EmptyLayout from '../components/layouts/empty-layout';

var HomePage = React.createClass({
  render () {
    return (
      <EmptyLayout>
        <div style={[styles.customFont, styles.spacingTop]}>
          <font style={[styles.title]}>OmniWolf</font>
          <font style={[styles.title, styles.blue]}>DSN</font>
          <br/>
          <font style={[styles.body]}>An Open Source, Modular, Distributed Sensor Network</font>
          <br/>
          <font>Choose from our pre-assembled kits or design your own, to ensure you get only what you need!</font>
          <br/>
          <font>Currently under development...</font>
        </div>
      </EmptyLayout>
    );
  }
});

HomePage = Radium(HomePage);

var styles = {
  spacingTop: {

    paddingTop: '20px',
  },
  customFont: {

    fontSize: '30px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215,215,215)',
    WebkitFontSmoothing: 'antialiased',
    textAlign: 'center',
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

export default HomePage;
