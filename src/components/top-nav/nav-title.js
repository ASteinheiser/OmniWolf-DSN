import React from 'react';
import Radium from 'radium';

var NavTitle = React.createClass({
  propTypes: {
    href: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <h1 style={[styles.spacing]}>

        <a href={this.props.href} style={[styles.noUnderline, styles.titleFont]}>OmniWolf</a>
        <a href={this.props.href} style={[styles.noUnderline, styles.titleFont, styles.blue]}>DSN</a>

      </h1>
    );
  }
});

NavTitle = Radium(NavTitle);

var styles = {
  spacing: {

    margin: 'auto 0px auto 15px',
  },
  titleFont: {

    fontSize: '26px',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    WebkitFontSmoothing: 'antialiased',

    cursor: 'pointer',
  },
  noUnderline: {

    textDecoration: 'none',
  },
  blue: {

    color: 'rgb(72, 124, 236)',
  }
}

export default NavTitle;
