import React, { Component } from 'react'

import StyledText from '../styled-text'

import styles from './styles.css'

export default class AddAction extends Component {
  render() {
    return (
      <div className={[styles.container]}>
        <div className={[styles.padding]}>

          <StyledText
            text="Add Action"
            size="regular"
            color="blue"
          />

        </div>
      </div>
    )
  }
}
