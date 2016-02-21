import React from 'react';
import Radium from 'radium';

import TopNav from '../top-nav/top-nav';

var HomeLayout = React.createClass({
  render () {
    return (
      <div style={[styles.page]}>

        <TopNav/>

        <div>
          {this.props.children}
        </div>

      </div>

    );
  }
});

HomeLayout = Radium(HomeLayout);

var styles = {
  page: {

    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default HomeLayout;
