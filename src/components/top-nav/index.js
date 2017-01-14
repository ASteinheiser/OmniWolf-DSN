import React, { PropTypes } from 'react'

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

        </div>

        {this.props.children}

      </div>
    )
  }
}

TopNav.propTypes = propTypes
