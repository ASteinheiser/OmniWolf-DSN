import React, { Component } from 'react'

import './index.css'

export default class TopNav extends Component {
  render() {
    return <div className='TopNav--container'>
      <div className='TopNav--logo'>
        <a className='no-underline'>OmniWolf</a>
        <a className='blue no-underline'>DSN</a>
      </div>

      <div className='TopNav--tab-container'>
        <a className='TopNav--tab'>Pre-Assembled Kits</a>
        <a className='TopNav--tab'>Kit Builder</a>
        <a className='TopNav--tab'>Dashboard</a>
        <a className='TopNav--tab'>Account</a>
        <a className='TopNav--tab'>Log Out</a>
      </div>

      {this.props.children}

    </div>
  }
}
