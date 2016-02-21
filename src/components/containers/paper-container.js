import React from 'react';
import Radium from 'radium';

var PaperContainer = React.createClass({
  render () {
    return (
      <div style={[styles.paper]}>
        <div style={[styles.hiddenScrollbar]}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

PaperContainer = Radium(PaperContainer);

var styles = {
  paper: {

    backgroundColor: 'rgb(240,240,240)',
    WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

    width: '100%',
    height: '100%',
    maxWidth: '900px',
    margin: '0 auto',

    overflow: 'hidden',
  },
  hiddenScrollbar: {

    width: '100%',
    height: '100%',

    overflow: 'auto',
    paddingRight: '20px',
  }
}

export default PaperContainer;
