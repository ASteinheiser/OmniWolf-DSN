import React, { Component } from 'react'

import './index.css'

export default class PaperContainer extends Component {
  render() {
    return <div className='PaperContainer'>
      <div className='HiddenScrollbar'>

        {this.props.children}

      </div>
    </div>
  }
}
