import React, { Component } from 'react'

import './index.css'

export default class FormField extends Component {

  propTypes: {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    type: React.PropTypes.string.isRequired
  }

  defaultProps: {
    placeholder: ""
  }

  render() {
    return <div className='FormField--Container'>
      <input
        className='FormField--Input'
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}/>
    </div>
  }
}
