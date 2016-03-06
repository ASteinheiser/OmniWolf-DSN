import React, { Component } from 'react'

import StyledText from '../styled-text'

import './index.css'

export default class PageNotFound extends Component {
  render() {
    return <div className='NotFound--Container'>
      <StyledText
        styles='LargeFont DarkGreyText'
        text='Page Not Found'
      />
    </div>
  }
}
