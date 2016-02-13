import React from 'react';

import LayoutShell from '../components/layouts/basic-layout';
import KitItem from '../components/kit/kit-item';

var PreAssembledKitsPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <KitItem name='Baby Monitor' description='this is a baby monitor'/>
        <KitItem name='Fire Detector' description='this is a fire detector'/>
        <KitItem name='Carbon Monoxide Detector' description='this is a carbon monoxide detector'/>
        <KitItem name='Motion Detector' description='this is a motion sensor'/>
        <KitItem name='Temperature Detector' description='this is a temperature sensor'/>
        <KitItem name='Heartrate Detector' description='this is a heartrate sensor'/>
        <KitItem name='Temperature Detector' description='this is a temperature sensor'/>
        <KitItem name='Temperature Detector' description='this is a temperature sensor'/>
        <KitItem name='Temperature Detector' description='this is a temperature sensor'/>
        <KitItem name='Temperature Detector' description='this is a temperature sensor'/>
        <KitItem name='Temperature Detector' description='this is a temperature sensor'/>
      </LayoutShell>
    );
  }
});

export default PreAssembledKitsPage;
