import React, { Component } from 'react'

import './index.css'

export default class PaperContainer extends Component {
  render() {
    return <div className='PaperContainer'>
      <div className='HiddenScrollBar'>
        {this.props.children}
      </div>
    </div>
  }
}
