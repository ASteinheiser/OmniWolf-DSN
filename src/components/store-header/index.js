import React, { Component } from 'react'
import { Link } from 'react-router'

import StyledText from '../styled-text'
import SecondaryButton from '../secondary-button'

import './index.css'

export default class StoreHeader extends Component {

  propTypes = {
    link: React.PropTypes.string.isRequired,
    button: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }

  render() {
    return <div className='Header--Container'>
      <div className='Text--Container'>
        <StyledText
          styles='MediumFont BlueText'
          text={this.props.text}
        />
      </div>
      <div className='Button--Container'>
        <Link to={this.props.link}>
          <SecondaryButton
            name={this.props.button}
            type='button'
            text={this.props.button}
          />
      </Link>
      </div>
    </div>
  }
}
