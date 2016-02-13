import React from 'react';

import LayoutShell from '../components/layouts/basic-layout';
import SensorItem from '../components/kit/sensor-item';

var KitBuilderPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Motion Sensor' description='this is a motion sensor'/>
        <SensorItem name='Sound Sensor' description='this is a sound sensor'/>
        <SensorItem name='Temperature Sensor' description='this is a temperature sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
        <SensorItem name='Flame Sensor' description='this is a flame sensor'/>
      </LayoutShell>
    );
  }
});

export default KitBuilderPage;
