import React from 'react';
import Radium from 'radium';

var AccountField = React.createClass({
  propTypes: {

    title: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div style={[styles.paddingTop]}>
        <font style={[styles.accountTitle]}>{this.props.title}</font>
        <font style={[styles.accountValue]}>{this.props.value}</font>
      </div>
    );
  }
});

AccountField = Radium(AccountField);

var styles = {
  paddingTop: {

    paddingTop: '10px'
  },
  accountTitle: {

    fontSize: '24px',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    float: 'left',
    marginLeft: '10px',
    width: '120px'
  },
  accountValue: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    marginLeft: '10px',
    width: '80%'
  }
}

export default AccountField;
