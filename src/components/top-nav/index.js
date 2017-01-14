import React, { PropTypes } from 'react'

import TopNavTab from '../top-nav-tab'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default class TopNav extends React.Component {

  render() {
    return (
      <div>

        <div className={[styles.topNavContainer]}>

          <img className={[styles.logo]} src="https://s3-us-west-2.amazonaws.com/iamandrew.io-images/logo.svg"/>

          <TopNavTab
            text="Dashboard"
            linkTo="/dashboard"
            active={this.props.currentPage === '/dashboard'}
          />

          <TopNavTab
            text="Home"
            linkTo="/"
            active={this.props.currentPage === '/'}
          />

        </div>

        {this.props.children}

      </div>
    )
  }
}

TopNav.propTypes = propTypes
