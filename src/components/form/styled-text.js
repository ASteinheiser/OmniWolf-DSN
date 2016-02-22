import React from 'react';
import Radium from 'radium';

var StyledText = React.createClass({
  propTypes: {

    text: React.PropTypes.string.isRequired,
    styled: React.PropTypes.string,
  },

  render () {
    return (
        <font style={[styles.basicFont]}>
          {this.props.text}
        </font>
    );
  }
});

StyledText = Radium(StyledText);

var styles = {
  basicFont: {

    fontSize: '30px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215,215,215)',
    WebkitFontSmoothing: 'antialiased',
  },
  largeText: {

    fontSize: '70px',
  },
  mediumText: {

    fontSize: '45px',
  },
  largeBlueText: {

    fontSize: '70px',
    color: 'rgb(72, 124, 236)',
  },
  mediumBlueText: {

    fontSize: '45px',
    color: 'rgb(72, 124, 236)',
  },
  blueText: {

    color: 'rgb(72, 124, 236)',
  }
};

export default StyledText;
