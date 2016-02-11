import React from 'react';
import Radium from 'radium';

var FormTitle = React.createClass({
  render () {
    return (
      <h1 style={[styles.titleFont]}>

        <font>OmniWolf</font>
        <font style={[styles.blue]}>DSN</font>

      </h1>
    );
  }
});

FormTitle = Radium(FormTitle);

var styles = {
  titleFont: {

    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',

    textAlign: 'center',
    margin: '0px 10px 20px 10px',
    WebkitFontSmoothing: 'antialiased',

    cursor: 'default',
  },
  blue: {

    color: 'rgb(72, 124, 236)',
  },
}

export default FormTitle;
