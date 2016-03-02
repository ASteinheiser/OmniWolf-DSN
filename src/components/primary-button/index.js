import React, { Component } from 'react'

import './index.css'

export default class PrimaryButton extends Component {

  propTypes: {
    type: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  }

  render() {
    return <button className='primaryButton' type={this.props.type} name={this.props.name}>
      {this.props.text}
    </button>
  }
}
