import React from 'react';

import EmptyLayout from '../components/layouts/empty-layout';
import HomePageSectionContainer from '../components/containers/home-page-section-container';
import StyledText from '../components/form/styled-text';

var HomePage = React.createClass({
  render () {
    return (
      <EmptyLayout>
        <HomePageSectionContainer>
          <StyledText
            text='OmniWolf' />
          <StyledText
            text='DSN' />
          <br/>
          <StyledText
            text='An Open Source, Modular, Distributed Sensor Network' />
          <br/>
          <StyledText
            text='Choose from our pre-assembled kits or design your own, to ensure you get only what you need!' />
          <br/>
          <StyledText
            text='Currently under development...' />
        </HomePageSectionContainer>
      </EmptyLayout>
    );
  }
});

export default HomePage;
