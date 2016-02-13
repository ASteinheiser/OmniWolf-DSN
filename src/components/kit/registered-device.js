import React from 'react';
import Radium from 'radium';

import PrimaryButton from '../buttons/primary-button';

var RegisteredDevice = React.createClass({
  propTypes: {

    name: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div style={[styles.registeredDeviceStyle]}>
        <div style={[styles.deviceName]}>
          {this.props.name}
        </div>
        <div style={[styles.deviceDataTitle]}>
          Fire
        </div>
        <div style={[styles.deviceDataValue]}>
          hello
        </div>
        <div style={[styles.deviceDataTitle]}>
          Noise
        </div>
        <div style={[styles.deviceDataValue]}>
          hello
        </div>
        <div style={[styles.deviceDataTitle]}>
          Motion
        </div>
        <div style={[styles.deviceDataValue]}>
          hello
        </div>
        <div style={[styles.deviceButtons]}>
          <PrimaryButton name='generateCode' type='submit' text='Generate Code for this Device'/>
          <PrimaryButton name='editCode' type='submit' text='Edit Code for this Device'/>
        </div>
      </div>
    );
  }
});

RegisteredDevice = Radium(RegisteredDevice);

var styles = {
  registeredDeviceStyle: {
    border: '1px solid grey',

    height: '50%',
    width: '50%',
    float: 'left'
  },
  deviceName: {

    fontSize: '30px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    WebkitFontSmoothing: 'antialiased',

    float: 'left',
    width: '100%',

    paddingTop: '15px',
    paddingBottom: '25px'
  },
  deviceDataTitle: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    WebkitFontSmoothing: 'antialiased',

    float: 'left',
    width: '50%',
    paddingTop: '15px'
  },
  deviceDataValue: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    WebkitFontSmoothing: 'antialiased',

    float: 'left',
    width: '50%',
    paddingTop: '15px'
  },
  deviceButtons: {

    width: '90%',
    margin: '40px 20px 0px 0px',
    float: 'right'
  }
}

export default RegisteredDevice;
