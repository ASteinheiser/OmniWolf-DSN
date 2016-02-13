import React from 'react';

import LayoutShell from '../components/layouts/basic-layout';
import KitItem from '../components/kit/kit-item';

var PreAssembledKitsPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <KitItem
          img='src/images/baby-monitor.jpg'
          name='Baby Monitor'
          description='This is a baby monitor with a fire, motion, and sound sensor. You can always add more sensors later.'
          price='39.99'/>
        <KitItem
          img='src/images/fire.png'
          name='Fire Detector'
          description='This is a fire detector that can be placed anywhere in your house.'
          price='29.99'/>
        <KitItem
          img='src/images/motion.png'
          name='Motion Detector'
          description='This is a motion detector that can be placed near a window, pool, or anywhere you want.'
          price='29.99'/>
        <KitItem
          img='src/images/carbon-monoxide.png'
          name='Carbon Monoxide Detector'
          description='This is a carbon monoxide detector which is great for your garage.'
          price='29.99'/>
      </LayoutShell>
    );
  }
});

export default PreAssembledKitsPage;
