import React from 'react';
import Radium from 'radium';

import PageLayout from '../components/layouts/page-layout';
import RegisteredItem from '../components/kit/registered-item';
import PrimaryButton from '../components/buttons/primary-button';

var DashboardPage = React.createClass({
  render () {
    return (
      <PageLayout>
        <RegisteredItem name='Baby Monitor'/>

        <div style={[styles.buttonContainer]}>
          <PrimaryButton name='registerDevice' type='submit' text='Register New Device'/>
        </div>

      </PageLayout>
    );
  }
});

DashboardPage = Radium(DashboardPage);

var styles = {
  buttonContainer: {

    width: '94%',

    margin: '15px auto 0px auto'
  }
}

export default DashboardPage;
