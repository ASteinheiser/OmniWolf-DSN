import React from 'react';

import EmptyLayout from '../components/layouts/empty-layout';
import OpaqueBox from '../components/containers/opaque-container';
import NewProfileForm from '../components/form/new-profile-form';

var NewProfilePage = React.createClass({
  render () {
    return (
      <EmptyLayout>
        <OpaqueBox>

          <NewProfileForm />

        </OpaqueBox>
      </EmptyLayout>
    );
  }
});

export default NewProfilePage;
