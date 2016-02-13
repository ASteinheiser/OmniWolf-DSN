import React from 'react';
import Radium from 'radium';

var SensorItem = React.createClass({
  propTypes: {

    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <div style={[styles.sensorItemStyle]}>
        <div style={[styles.sensorNameBox]}>
          {this.props.name}
        </div>
        <div style={[styles.sensorDescriptionBox]}>
          {this.props.description}
        </div>
      </div>
    );
  }
});

SensorItem = Radium(SensorItem);

var styles = {
  sensorItemStyle: {
    borderBottom: '1px solid grey',

    height: '100px',
    width: '100%'
  },
  sensorNameBox: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    marginLeft: '10px',
    float: 'left',
    height: '100px',
    width: '200px'
  },
  sensorDescriptionBox: {

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

export default SensorItem;
