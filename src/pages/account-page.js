import React from 'react';
import Radium from 'radium';

import LayoutShell from '../components/layouts/basic-layout';
import AccountField from '../components/page-forms/account-field';
import SecondaryButton from '../components/buttons/secondary-button';

var AccountPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <AccountField title='Full Name' value='Andrew Steinheiser'/>
        <AccountField title='Email' value='andrew@octoblu.com'/>

        <div style={[styles.buttonStyle]}>
          <SecondaryButton name='changePassword' type='submit' text='Change Password'/>
        </div>
      </LayoutShell>
    );
  }
});

AccountPage = Radium(AccountPage);

var styles = {
  buttonStyle: {

    width: '40%',

    marginLeft: '10px',
    marginTop: '15px'
  }
}

export default AccountPage;
