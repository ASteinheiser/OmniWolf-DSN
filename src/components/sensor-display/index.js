import React, { Component, PropTypes } from 'react'

import StyledText from '../styled-text'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}

export default class SensorDisplay extends Component {
  render() {
    return (
      <div className={[styles.container]}>

        <div className={[styles.padding]}>

          <div className={[styles.paddingLeft]}>

            <StyledText
              text={this.props.title}
              size="large"
              color="blue"
            />

          </div>

          <br />

          <div className={[styles.borderTop]}>
            {this.props.children}
          </div>

        </div>

      </div>
    )
  }
}

SensorDisplay.propTypes = propTypes
