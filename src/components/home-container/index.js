import React, { Component } from 'react'

import './index.css'

export default class HomeContainer extends Component {
  render() {
    return <div className='Home--Container'>
      {this.props.children}
    </div>
  }
}
