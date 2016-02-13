import React from 'react';
import Radium from 'radium';

import LayoutShell from '../components/layouts/basic-layout';
import RegisteredDevice from '../components/kit/registered-device';
import PrimaryButton from '../components/buttons/primary-button';

var DashboardPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <RegisteredDevice name='Baby Monitor'/>

        <div style={[styles.buttonStyle]}>
          <PrimaryButton name='registerDevice' type='submit' text='Register New Device'/>
        </div>

      </LayoutShell>
    );
  }
});

DashboardPage = Radium(DashboardPage);

var styles = {
  buttonStyle: {

    width: '94%',

    margin: '15px auto 0px auto'
  }
}

export default DashboardPage;
