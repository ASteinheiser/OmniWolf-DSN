import React, { Component } from 'react'

import './index.css'

export default class PaperContainer extends Component {
  render() {
    return <div className='Paper--Container'>
      <div className='HiddenScrollBar'>
        {this.props.children}
      </div>
    </div>
  }
}
