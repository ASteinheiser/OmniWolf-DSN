import React, { Component } from 'react'

import './index.css'

export default class TopNav extends Component {
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
          <a href='/dashboard' className='TopNav--tab'>Dashboard</a>
          <a href='/account' className='TopNav--tab'>Account</a>
          <a href='/home' className='TopNav--tab'>Logout</a>
        </div>

      </div>

      {this.props.children}

    </div>
  }
}
