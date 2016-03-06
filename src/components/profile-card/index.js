import React, { Component } from 'react'

import StyledText from '../styled-text'
import SecondaryButton from '../secondary-button'

import './index.css'

export default class ProfileCard extends Component {
  render() {
    return <div className='ProfileCard--Container'>

      <div className='ProfileCard--Content'>
        <div className='ProfileCard--Title'>
          <StyledText
            styles='MediumFont BlueText'
            text='Account Information'
          />
        </div>

        <div className='ProfileCard--Field'>
          <StyledText
            styles='SmallFont DarkGreyText'
            text='Name'
          />
        </div>
        <div className='ProfileCard--Field'>
          <StyledText
            styles='SmallFont BlackText'
            text='Andrew Steinheiser'
          />
        </div>

        <div className='ProfileCard--Field'>
          <StyledText
            styles='SmallFont DarkGreyText'
            text='Email'
          />
        </div>
        <div className='ProfileCard--Field'>
          <StyledText
            styles='SmallFont BlackText'
            text='andrew@octoblu.com'
          />
        </div>
      </div>

      <div className='ChangePassword--Button'>
        <SecondaryButton
          type='button'
          name='changePassword'
          text='Change Password'
        />
      </div>

    </div>
  }
}
