import React, { Component } from 'react'

import './index.css'

export default class StyledText extends Component {

  propTypes: {
    styles: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }

  render() {
    return <font className={this.props.styles}>
      {this.props.text}
    </font>
  }
}
