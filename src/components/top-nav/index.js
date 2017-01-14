import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default class TopNav extends React.Component {

  render() {
    return (
      <div className={[styles.bodyWidth]}>

        <div className={[styles.topNavContainer]}>

        </div>

        {this.props.children}

      </div>
    )
  }
}

TopNav.propTypes = propTypes
