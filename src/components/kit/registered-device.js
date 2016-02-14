import React from 'react';
import Radium from 'radium';

import SecondaryButton from '../buttons/secondary-button';

var RegisteredDevice = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var firebaseRef = new Firebase("https://omniwolfdsn.firebaseio.com/Devices");

    this.bindAsArray(firebaseRef, 'Devices');

    firebaseRef.on('value', function(snapshot) {
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });
  },

  componentWillUnmount: function() {
    this.unbind('Devices');
  },

  propTypes: {

    name: React.PropTypes.string.isRequired,
    device: React.PropTypes.string,
    fire: React.PropTypes.string,
    noise: React.PropTypes.string,
    motion: React.PropTypes.string,
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
          {this.props.fire}
        </div>
        <div style={[styles.deviceDataTitle]}>
          Noise
        </div>
        <div style={[styles.deviceDataValue]}>
          {this.props.noise}
        </div>
        <div style={[styles.deviceDataTitle]}>
          Motion
        </div>
        <div style={[styles.deviceDataValue]}>
          {this.props.motion}
        </div>
        <div style={[styles.deviceButtons]}>
          <SecondaryButton name='generateCode' type='submit' text='Generate Code for this Device'/>
          <SecondaryButton name='editCode' type='submit' text='Edit Code for this Device'/>
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

    height: '28px',
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

    height: '28px',
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
