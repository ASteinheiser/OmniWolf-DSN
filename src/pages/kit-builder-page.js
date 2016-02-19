import React from 'react';
import Radium from 'radium';

import LayoutShell from '../components/layouts/basic-layout';
import SensorItem from '../components/kit/sensor-item';

var KitBuilderPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <SensorItem
          img='images/flame-sensor.jpg'
          name='Flame Sensor'
          description='This is a digital sensor that uses infrared to detect fires.'
          price='2.99'/>
        <SensorItem
          img='images/ir-sensor.jpg'
          name='Motion Sensor'
          description='This is an digital sensor that uses an IR transmitter and reciever to detect motion.'
          price='2.99'/>
        <SensorItem
          img='images/sound-sensor.jpg'
          name='Sound Sensor'
          description='This is an analog sensor that detects noise.'
          price='2.99'/>
        <SensorItem
          img='images/temperature-sensor.jpg'
          name='Temperature Sensor'
          description='This is an analog sensor that can detect the current temperature.'
          price='2.99'/>
        <SensorItem
          img='images/carbon-monoxide-sensor.png'
          name='Carbon Monoxide Sensor'
          description='This is a digital sensor that can notify you of carbon monoxide leaks, great for garages.'
          price='2.99'/>
        <div style={[styles.bullshit]}>.</div>
      </LayoutShell>
    );
  }
});

KitBuilderPage = Radium(KitBuilderPage);

var styles = {
  bullshit: {

    height: '50px'
  }
};

export default KitBuilderPage;
