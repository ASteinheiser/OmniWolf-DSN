import React from 'react';
import Radium from 'radium';

var AccountForm = React.createClass({
  propTypes: {

    fullName: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div style={[styles.accountFormStyle]}>
        {this.props.fullName}
        {this.props.email}
      </div>
    );
  }
});

AccountForm = Radium(AccountForm);

var styles = {
  accountFormStyle: {

    height: '200px',
    width: '100%'
  }
}

export default AccountForm;
