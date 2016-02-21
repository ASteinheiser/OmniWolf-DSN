import React from 'react';

import EmptyLayout from '../components/layouts/empty-layout';
import OpaqueBox from '../components/containers/opaque-container';
import SignupForm from '../components/form/signup-form';

var SignupPage = React.createClass({
  render () {
    return (
      <EmptyLayout>
        <OpaqueBox>

          <SignupForm />

        </OpaqueBox>
      </EmptyLayout>
    );
  }
});

export default SignupPage;
