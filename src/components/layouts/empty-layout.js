import React from 'react';
import Radium from 'radium';

import TopNav from '../top-nav/top-nav';

var EmptyLayout = React.createClass({
  render () {
    return (
      <div style={[styles.fillPage]}>

        <TopNav/>

        <div style={[styles.flex]}>
          {this.props.children}
        </div>

      </div>

    );
  }
});

EmptyLayout = Radium(EmptyLayout);

var styles = {
  fillPage: {

    backgroundColor: 'rgb(240,240,240)',

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  flex: {
    display: 'flex',

    height: '94%',
  }
}

export default EmptyLayout;
