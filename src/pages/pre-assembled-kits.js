import React, { Component } from 'react'

import PaperContainer from '../components/paper-container'
import SecondaryButton from '../components/secondary-button'
import StyledText from '../components/styled-text'
import StoreHeader from '../components/store-header'
import StoreItem from '../components/store-item'

export default class PreAssembledKits extends Component {
  render() {
    return <PaperContainer>
      <StoreHeader
        text='Pre-Assembled Kits'
        button='Kit Builder'
        link='/kit-builder'
      />
      <StoreItem
        img='/images/baby-monitor.jpg'
        name='Baby Monitor'
        description='This pre-assembled kit is a basic baby monitor. It includes three sensors: a sound sensor, motion sensor, and flame sensor.'
        price='39.99'
      />
      <StoreItem
        img='/images/fire.png'
        name='Fire Detector'
        description='This is a fire detector that can be placed anywhere in your house.'
        price='29.99'
      />
      <StoreItem
        img='/images/motion.png'
        name='Motion Detector'
        description='This is a motion detector that can be placed near a window, pool, or anywhere you want.'
        price='29.99'
      />
      <StoreItem
        img='/images/carbon-monoxide.png'
        name='Carbon Monoxide Detector'
        description='This is a carbon monoxide detector which is great for your garage.'
        price='29.99'
      />
      <StoreItem
        img='/images/noise.png'
        name='Noise Detector'
        description='This is a noise detector which is great for windows or anywhere you do not want noise.'
        price='29.99'
      />
    </PaperContainer>
  }
}
