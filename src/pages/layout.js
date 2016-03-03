import React, { Component } from 'react'

import TopNav from '../components/top-nav'

export default class Layout extends Component {
  render() {
    return <TopNav>
      {this.props.children}
    </TopNav>
  }
}
