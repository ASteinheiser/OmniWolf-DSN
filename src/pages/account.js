import React, { Component } from 'react'

import PaperContainer from '../components/paper-container'
import ProfileCard from '../components/profile-card'

export default class Account extends Component {
  render() {
    return <PaperContainer>
      <ProfileCard />
    </PaperContainer>
  }
}
