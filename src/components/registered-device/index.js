import React, { Component } from 'react'

import StyledText from '../styled-text'
import SecondaryButton from '../secondary-button'

import './index.css'

export default class RegisteredDevice extends Component {
  render() {
    return <div className='RegisteredDevice--Container'>

      <div className='RegisteredDevice--DataContainer'>
        <div className='RegisteredDevice--Title'>
          <StyledText
            styles='MediumFont BlueText'
            text='Sample Device'
          />
        </div>

        <div className='RegisteredDevice--Field'>
          <StyledText
            styles='SmallFont DarkGreyText'
            text='Fire'
          />
        </div>
        <div className='RegisteredDevice--Field'>
          <StyledText
            styles='SmallFont BlackText'
            text='Detected'
          />
        </div>

        <div className='RegisteredDevice--Field'>
          <StyledText
            styles='SmallFont DarkGreyText'
            text='Temperature'
          />
        </div>
        <div className='RegisteredDevice--Field'>
          <StyledText
            styles='SmallFont BlackText'
            text='12 Celsius'
          />
        </div>
      </div>

      <div className='RegisteredDevice--Button'>
        <SecondaryButton
          type='button'
          text='Rename Device'
          name='renameDevice'
        />
        <SecondaryButton
          type='button'
          text='Configure Device Sensors'
          name='configureDevice'
        />
      </div>

    </div>
  }
}
