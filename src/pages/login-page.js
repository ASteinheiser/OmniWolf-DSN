import React from 'react';

import EmptyLayout from '../components/layouts/empty-layout';
import OpaqueContainer from '../components/containers/opaque-container';
import LoginForm from '../components/form/login-form';

var LoginPage = React.createClass({
  render () {
    return (
      <EmptyLayout>
        <OpaqueContainer>

          <LoginForm />

        </OpaqueContainer>
      </EmptyLayout>
    );
  }
});

export default LoginPage;
