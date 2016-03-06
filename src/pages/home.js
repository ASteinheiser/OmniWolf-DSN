import React, { Component } from 'react'

import HomeContainer from '../components/home-container'
import StyledSection from '../components/styled-section'
import StyledText from '../components/styled-text'

export default class Home extends Component {
  render() {
    return <HomeContainer>
      <StyledSection styles='SmallSection Black CenterText'>
        <StyledText
          styles='LargeFont GreyText'
          text='OmniWolf'
        />
        <StyledText
          styles='LargeFont BlueText'
          text='DSN'
        />
        <br/>
        <br/>
        <StyledText
          styles='MediumFont GreyText'
          text='An Open Source, Modular, Distributed Sensor Network'
        />
      </StyledSection>
      <StyledSection styles='SmallSection Grey CenterText'>
        <br/>
        <StyledText
          styles='MediumFont BlueText'
          text='Choose from our pre-assembled kits or...'
        />
        <br/>
        <br/>
        <StyledText
          styles='MediumFont BlueText'
          text='design your own, to ensure you get only what you need!'
        />
      </StyledSection>
      <StyledSection styles='SmallSection Blue CenterText'>
        <br/>
        <br/>
        <br/>
        <StyledText
          styles='MediumFont BlackText'
          text='Monitor your house, business, or even missle systems!'
        />
      </StyledSection>
      <StyledSection styles='SmallSection Black CenterText'>
        <br/>
        <br/>
        <StyledText
          styles='LargeFont BlueText'
          text='Currently under development...'
        />
      </StyledSection>
    </HomeContainer>
  }
}
