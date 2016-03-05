import React, { Component } from 'react'

import StyledText from '../styled-text'

import './index.css'

export default class NewDevice extends Component {
  render() {
    return <button className='NewDeviceContainer'>
      <StyledText
        styles='SmallFont BlueText'
        text='Add New Device'
      />
  </button>
  }
}
