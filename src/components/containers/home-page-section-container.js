import React from 'react';
import Radium from 'radium';

var HomePageSectionContainer = React.createClass({
  propTypes: {

    styled: React.PropTypes.string,
  },

  render () {
    return (
      <div style={[styles.width]}>
        {this.props.children}
      </div>
    );
  }
});

HomePageSectionContainer = Radium(HomePageSectionContainer);

var styles = {
  width: {

    paddingTop: '30px',
    width: '100%',
  },
  largeSection: {

    height: '500px',
  },
  mediumSection: {
    height: '350px',
  },
  smallSection: {
    height: '200px',
  },
  greyBackground: {

    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  centerText: {

    textAlign: 'center',
  }
};

export default HomePageSectionContainer;
