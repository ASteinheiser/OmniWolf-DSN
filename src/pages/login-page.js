import React from 'react';

import LoginBackground from '../components/backgrounds/login-background';
import OpaqueBox from '../components/backgrounds/opaque-box';
import FormTitle from '../components/form/form-title';
import LoginForm from '../components/page-forms/login-form';

var LoginPage = React.createClass({
  render () {
    return (
      <LoginBackground>
        <OpaqueBox>

          <FormTitle />
          <LoginForm />

        </OpaqueBox>
      </LoginBackground>
    );
  }
});

export default LoginPage;
