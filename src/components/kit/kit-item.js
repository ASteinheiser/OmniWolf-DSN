import React from 'react';
import Radium from 'radium';

var KitItem = React.createClass({
  propTypes: {

    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <div style={[styles.kitItemStyle]}>
        <div style={[styles.kitNameBox]}>
          <font>{this.props.name}</font>
        </div>
        <div style={[styles.kitDescriptionBox]}>
          <font>{this.props.description}</font>
        </div>
      </div>
    );
  }
});

KitItem = Radium(KitItem);

var styles = {
  kitItemStyle: {
    borderBottom: '1px solid grey',

    height: '100px',
    width: '100%'
  },
  kitNameBox: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    marginLeft: '10px',
    float: 'left',
    height: '100px',
    width: '200px'
  },
  kitDescriptionBox: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    paddingLeft: '10px',
    float: 'left',
    height: '100%',

    borderLeft: '1px solid grey'
  }
}

export default KitItem;
