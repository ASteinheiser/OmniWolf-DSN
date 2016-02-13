import React from 'react';

import LoginBackground from '../components/backgrounds/login-background';
import OpaqueBox from '../components/backgrounds/opaque-box';
import FormTitle from '../components/form/form-title';
import SignupForm from '../components/page-forms/signup-form';

var SignupPage = React.createClass({
  render () {
    return (
      <LoginBackground>
        <OpaqueBox>

          <FormTitle />

          <SignupForm />

        </OpaqueBox>
      </LoginBackground>
    );
  }
});

export default SignupPage;
