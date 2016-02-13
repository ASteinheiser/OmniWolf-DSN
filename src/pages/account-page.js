import React from 'react';
import Radium from 'radium';

import LayoutShell from '../components/layouts/basic-layout';
import AccountForm from '../components/page-forms/account-form';
import SecondaryButton from '../components/buttons/secondary-button';

var AccountPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <AccountForm fullName='Bob Jones' email='bobjones@gmail.com'/>

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

    width: '25%',

    marginLeft: '15px'
  }
}

export default AccountPage;
