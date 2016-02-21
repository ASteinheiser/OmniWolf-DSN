import React from 'react';
import Radium from 'radium';

import PageLayout from '../components/layouts/page-layout';
import AccountForm from '../components/form/account-form';
import SecondaryButton from '../components/buttons/secondary-button';

var AccountPage = React.createClass({
  render () {
    return (
      <PageLayout>
        <div style={[styles.accountCard]}>
          <AccountForm title='Full Name' value='Andrew Steinheiser'/>
          <AccountForm title='Email' value='andrew@octoblu.com'/>

          <div style={[styles.buttonContainer]}>
            <SecondaryButton name='changePassword' type='submit' text='Change Password'/>
          </div>
        </div>
      </PageLayout>
    );
  }
});

AccountPage = Radium(AccountPage);

var styles = {
  buttonContainer: {

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
