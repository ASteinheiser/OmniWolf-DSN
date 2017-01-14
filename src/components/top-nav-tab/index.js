import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

import styles from './styles.css'

const propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
}

export default class TopNavTab extends React.Component {

  render() {
    const tabStyles = classnames(
      styles.topNavElement,
      { [`${styles.active}`]: this.props.active }
    )

    return (
      <Link to={this.props.linkTo} className={tabStyles}>
        {this.props.text}
      </Link>
    )
  }
}

TopNavTab.propTypes = propTypes
