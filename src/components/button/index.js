import React, { Component } from 'react'

import styles from './styles.css'

export default class Button extends Component {

  propTypes: {
    type: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    name: React.PropTypes.string.isRequired,
  }

  render() {
    return <button className={[styles.button]} type={this.props.type} name={this.props.name}>
      {this.props.children}
    </button>
  }
}
