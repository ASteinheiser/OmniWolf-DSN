import React, { Component } from 'react'

import PaperContainer from '../../components/paper-container'
import SecondaryButton from '../../components/secondary-button'
import StyledText from '../../components/styled-text'

export default class KitBuilder extends Component {
  render() {
    return <PaperContainer>
      <div className='HeaderContainer'>
        <div className='TextContainer'>
          <StyledText
            styles='MediumFont BlueText'
            text='Kit Builder'
          />
        </div>
        <div className='ButtonContainer'>
          <a href='/pre-assembled-kits'>
            <SecondaryButton
              name='pre-assembled-kits'
              type='button'
              text='Pre-Assembled Kits'
            />
          </a>
        </div>
      </div>
    </PaperContainer>
  }
}
