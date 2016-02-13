import React from 'react';
import Radium from 'radium';

import LayoutShell from '../components/layouts/basic-layout';
import RegisteredDevice from '../components/kit/registered-device';
import PrimaryButton from '../components/buttons/primary-button';

var DashboardPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <RegisteredDevice name='device1'/>

        <div style={[styles.buttonStyle]}>
          <PrimaryButton name='registerDevice' type='submit' text='Register Device'/>
        </div>
        
      </LayoutShell>
    );
  }
});

DashboardPage = Radium(DashboardPage);

var styles = {
  buttonStyle: {

    width: '90%',

    margin: '15px auto 0px auto'
  }
}

export default DashboardPage;
