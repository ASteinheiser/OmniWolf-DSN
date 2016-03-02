import React, { Component } from 'react'

import './index.css'

export default class SecondaryButton extends Component {

  propTypes: {
    type: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  }

  render() {
    return <button className='SecondaryButton' type={this.props.type} name={this.props.name}>
      {this.props.text}
    </button>
  }
}
