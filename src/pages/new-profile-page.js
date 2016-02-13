import React from 'react';

import LoginBackground from '../components/backgrounds/login-background';
import OpaqueBox from '../components/backgrounds/opaque-box';
import FormTitle from '../components/form/form-title';
import NewProfileForm from '../components/page-forms/new-profile-form';

var NewProfilePage = React.createClass({
  render () {
    return (
      <LoginBackground>
        <OpaqueBox>

          <FormTitle />
          <NewProfileForm />

        </OpaqueBox>
      </LoginBackground>
    );
  }
});

export default NewProfilePage;
