import React, { Component } from 'react'
import { Link } from 'react-router'

import PaperContainer from '../components/paper-container'
import SecondaryButton from '../components/secondary-button'
import StyledText from '../components/styled-text'
import StoreItem from '../components/store-item'

export default class KitBuilder extends Component {
  render() {
    return <PaperContainer>
      <div className='HeaderContainer'>
        <div className='TextContainer'>
          <StyledText
            styles='MediumFont BlueText'
            text='Kit Builder'
          />
        </div>
        <div className='ButtonContainer'>
          <Link to='/pre-assembled-kits'>
            <SecondaryButton
              name='pre-assembled-kits'
              type='button'
              text='Pre-Assembled Kits'
            />
        </Link>
        </div>
      </div>
      <StoreItem
        img='images/flame-sensor.jpg'
        name='Flame Sensor'
        description='This is a digital sensor that uses infrared to detect fires.'
        price='2.99'
      />
      <StoreItem
        img='images/ir-sensor.jpg'
        name='Motion Sensor'
        description='This is an digital sensor that uses an IR transmitter and reciever to detect motion.'
        price='2.99'
      />
      <StoreItem
        img='images/sound-sensor.jpg'
        name='Sound Sensor'
        description='This is an analog sensor that detects noise.'
        price='2.99'
      />
      <StoreItem
        img='images/temperature-sensor.jpg'
        name='Temperature Sensor'
        description='This is an analog sensor that can detect the current temperature.'
        price='2.99'
      />
      <StoreItem
        img='images/carbon-monoxide-sensor.png'
        name='Carbon Monoxide Sensor'
        description='This is a digital sensor that can notify you of carbon monoxide leaks, great for garages.'
        price='2.99'
      />
    </PaperContainer>
  }
}
