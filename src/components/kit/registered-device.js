import React from 'react';
import Radium from 'radium';

import SecondaryButton from '../buttons/secondary-button';

var RegisteredDevice = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      device: null
    }
  },

  componentDidMount: function() {
    this.firebaseRef = new Firebase("https://omniwolfdsn.firebaseio.com/Devices");

    var self = this;

    this.firebaseRef.on('value', function(snapshot) {

      var device = snapshot.val();

      self.setState({
        device: device
      });

    });
  },

  propTypes: {

    name: React.PropTypes.string.isRequired,
  },

  render () {
    console.log('state', this.state);
    if (!this.state.device){
      return <div style={[styles.deviceName]}>loading</div>
    }
    return (
      <div style={[styles.registeredDeviceStyle]}>
        <div style={[styles.deviceName]}>
          {this.props.name}
        </div>
        <div style={[styles.deviceDataTitle]}>
          Fire
        </div>
        <div style={[styles.deviceDataValue]}>
          {this.state.device.RegisterDevice.fire}
        </div>
        <div style={[styles.deviceDataTitle]}>
          Noise
        </div>
        <div style={[styles.deviceDataValue]}>
          {this.state.device.RegisterDevice.sound}
        </div>
        <div style={[styles.deviceDataTitle]}>
          Motion
        </div>
        <div style={[styles.deviceDataValue]}>
          {this.state.device.RegisterDevice.motion}
        </div>
        <div style={[styles.deviceButtons]}>
          <SecondaryButton name='renameDevice' type='submit' text='Rename this Device'/>
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
    WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

    height: '50%',
    width: '47%',
    float: 'left',

    margin: '12px'
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
    margin: '20px 20px 0px 0px',
    float: 'right'
  }
}

export default RegisteredDevice;
