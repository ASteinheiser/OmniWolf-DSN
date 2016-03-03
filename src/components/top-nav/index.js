import React, { Component } from 'react'

import './index.css'

export default class TopNav extends Component {

  state = {
    loginStatus: false
  }

  renderNavTabs = () =>  {
    var { loginStatus } = this.state

    if (!loginStatus) {
      return <a href='/login' className='TopNav--tab'>Login</a>
    }
    if (loginStatus) {
      return <a>
        <a href='/dashboard' className='TopNav--tab'>Dashboard</a>
        <a href='/account' className='TopNav--tab'>Account</a>
        <a href='/home' className='TopNav--tab'>Logout</a>
      </a>
    }
  }

  render() {
    return <div className='PageContainer'>

      <div className='TopNav--container'>

        <div className='TopNav--logo'>
          <a href='/home' className='greyRef'>OmniWolf</a>
          <a href='/home' className='blueRef'>DSN</a>
        </div>

        <div className='TopNav--tab-container'>
          <a href='/pre-assembled-kits' className='TopNav--tab'>Pre-Assembled Kits</a>
          <a href='/kit-builder' className='TopNav--tab'>Kit Builder</a>
          {this.renderNavTabs()}
        </div>

      </div>

      {this.props.children}

    </div>
  }
}
