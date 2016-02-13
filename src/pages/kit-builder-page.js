import React from 'react';

import LayoutShell from '../components/layouts/basic-layout';
import SensorItem from '../components/kit/sensor-item';

var KitBuilderPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <SensorItem img='src/images/flame-sensor.jpg' name='Flame Sensor' description='This sensor uses infrared to detect fires.' price='2.99'/>
        <SensorItem img='src/images/ir-sensor.jpg' name='Motion Sensor' description='This sensor uses an IR transmitter and reciever to detect motion.' price='2.99'/>
        <SensorItem img='src/images/sound-sensor.jpg' name='Sound Sensor' description='This sensor detects noise.' price='2.99'/>
        <SensorItem img='src/images/temperature-sensor.jpg' name='Temperature Sensor' description='This sensor can detect the current temperature.' price='2.99'/>
      </LayoutShell>
    );
  }
});

export default KitBuilderPage;