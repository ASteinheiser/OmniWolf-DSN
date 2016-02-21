import React from 'react';
import Radium from 'radium';

var OpaqueContainer = React.createClass({
  render () {
    return (
      <div style={[styles.opaqueContainer]}>
        {this.props.children}
      </div>
    );
  }
});

OpaqueContainer = Radium(OpaqueContainer);

var styles = {
  opaqueContainer: {

    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    width: '350px',

    padding: '30px',
    borderRadius: '5px',
    margin: 'auto auto auto auto',
  }
}

export default OpaqueContainer;
