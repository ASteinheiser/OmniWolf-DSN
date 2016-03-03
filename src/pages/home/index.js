import React, { Component } from 'react'

import StyledSection from '../../components/styled-section'
import StyledText from '../../components/styled-text'

export default class Home extends Component {
  render() {
    return <StyledSection styles='LargeSection Blue CenterText'>
        <StyledText
          styles='MediumFont GreyText'
          text='This is some dope styled text yo'
        />
      </StyledSection>
  }
}
