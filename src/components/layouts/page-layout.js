import React from 'react';

import BlankContainer from '../containers/blank-container';
import TopNav from '../top-nav/top-nav';
import PaperContainer from '../containers/paper-container';

var PageLayout = React.createClass({
  render () {
    return (
      <BlankContainer>

        <TopNav/>

        <PaperContainer>
          {this.props.children}
        </PaperContainer>

      </BlankContainer>

    );
  }
});

export default PageLayout;
