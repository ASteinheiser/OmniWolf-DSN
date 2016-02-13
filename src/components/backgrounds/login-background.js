import React from 'react';
import Radium from 'radium';

var LoginBackground = React.createClass({
  render () {
    return (
      <div style={[styles.loginBackground]}>
        {this.props.children}
      </div>
    );
  }
});

LoginBackground = Radium(LoginBackground);

var styles = {
  loginBackground: {

    display: 'flex',
    backgroundColor: 'rgb(130,176,191)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default LoginBackground;
