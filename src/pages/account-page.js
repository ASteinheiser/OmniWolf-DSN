import React from 'react';
import Radium from 'radium';

import LayoutShell from '../components/layouts/layout-shell';
import AccountField from '../components/page-forms/account-field';
import SecondaryButton from '../components/buttons/secondary-button';

var AccountPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <div style={[styles.accountCard]}>
          <AccountField title='Full Name' value='Andrew Steinheiser'/>
          <AccountField title='Email' value='andrew@octoblu.com'/>

          <div style={[styles.buttonStyle]}>
            <SecondaryButton name='changePassword' type='submit' text='Change Password'/>
          </div>
        </div>
      </LayoutShell>
    );
  }
});

AccountPage = Radium(AccountPage);

var styles = {
  buttonStyle: {

    width: '95%',

    marginLeft: '10px',
    marginTop: '15px',
    paddingBottom: '10px'
  },
  accountCard: {

    WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

    width: '400px',
    height: '150px',
    margin: '20px auto 0px auto'
  }
}

export default AccountPage;
