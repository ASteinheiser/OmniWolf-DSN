import { validateToken } from '../../redux/actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'

import './index.css'

class TopNav extends Component {

  renderNavTabs = () =>  {
    this.props.validate()

    if (this.props.isValid) {
      return <div>
        <Link to='/dashboard' className='TopNav--tab'>Dashboard</Link>
        <Link to='/account' className='TopNav--tab'>Account</Link>
        <Link to='/' className='TopNav--tab'>Logout</Link>
      </div>
    } else {
      return <Link to='/login' className='TopNav--tab'>Login</Link>
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

function mapStateToProps(state) {
  return {
    isValid: state.user.isValid
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({validate: validateToken}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
