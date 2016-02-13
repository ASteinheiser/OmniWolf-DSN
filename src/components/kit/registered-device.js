import React from 'react';
import Radium from 'radium';

var RegisteredDevice = React.createClass({
  propTypes: {

    name: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div style={[styles.registeredDeviceStyle]}>
        <div style={[styles.deviceNameBox]}>
          <font>{this.props.name}</font>
        </div>
        <div style={[styles.deviceDescriptionBox]}>
        </div>
      </div>
    );
  }
});

RegisteredDevice = Radium(RegisteredDevice);

var styles = {
  registeredDeviceStyle: {
    borderBottom: '1px solid grey',

    height: '100px',
    width: '100%'
  },
  deviceNameBox: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    marginLeft: '10px',
    float: 'left',
    height: '100px',
    width: '200px'
  },
  deviceDescriptionBox: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    paddingLeft: '10px',
    float: 'left',
    height: '100%',

    borderLeft: '1px solid grey'
  }
}

export default RegisteredDevice;
