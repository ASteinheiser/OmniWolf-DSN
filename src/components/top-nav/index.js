import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'

export default class TopNav extends Component {

  state = {
    loginStatus: false
  }

  renderNavTabs = () =>  {
    var { loginStatus } = this.state

    if (!loginStatus) {
      return <Link to='/login' className='TopNav--tab'>Login</Link>
    }
    if (loginStatus) {
      return <div>
        <Link to='/dashboard' className='TopNav--tab'>Dashboard</Link>
        <Link to='/account' className='TopNav--tab'>Account</Link>
        <Link to='/' className='TopNav--tab'>Logout</Link>
      </div>
    }
  }

  render() {
    return <div className='Page--Container'>

      <div className='TopNav--container'>

        <div className='TopNav--logo'>
          <Link to='/' className='greyRef'>OmniWolf</Link>
          <Link to='/' className='blueRef'>DSN</Link>
        </div>

        <div className='TopNav--tab-container'>
          <Link to='/pre-assembled-kits' className='TopNav--tab'>Store</Link>
          {this.renderNavTabs()}
        </div>

      </div>

      <div className='Content--Container'>
        {this.props.children}
      </div>
    </div>
  }
}
