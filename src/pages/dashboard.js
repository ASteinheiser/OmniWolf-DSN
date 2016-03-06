import React, { Component } from 'react'

import PaperContainer from '../components/paper-container'
import NewDevice from '../components/new-device'
import RegisteredDevice from '../components/registered-device'

export default class Dashboard extends Component {
  render() {
    return <PaperContainer>
      <RegisteredDevice/>
      <NewDevice/>
    </PaperContainer>
  }
}
