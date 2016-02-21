import React from 'react';
import Radium from 'radium';

var BlankContainer = React.createClass({
  render () {
    return (
      <div style={[styles.blankContainer]}>
        {this.props.children}
      </div>
    );
  }
});

BlankContainer = Radium(BlankContainer);

var styles = {
  blankContainer: {

    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(240,240,240)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default BlankContainer;
