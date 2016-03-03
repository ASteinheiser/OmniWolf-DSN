import React, { Component } from 'react'

import PaperContainer from '../../components/paper-container'
import SecondaryButton from '../../components/secondary-button'
import StyledText from '../../components/styled-text'

import './index.css'

export default class PreAssembledKits extends Component {
  render() {
    return <PaperContainer>
      <div className='HeaderContainer'>
        <div className='TextContainer'>
          <StyledText
            styles='MediumFont BlueText'
            text='Pre-Assembled Kits'
          />
        </div>
        <div className='ButtonContainer'>
          <a href='/kit-builder'>
            <SecondaryButton
              name='kit-builder'
              type='button'
              text='Kit Builder'
            />
          </a>
        </div>
      </div>
    </PaperContainer>
  }
}
