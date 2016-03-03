import React, { Component } from 'react'

import './index.css'

export default class StyledSection extends Component {

  propTypes: {
    styles: React.PropTypes.string.isRequired
  }

  render() {
    return <div className={this.props.styles}>
        {this.props.children}
      </div>
  }
}
