import React, { PropTypes } from 'react'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className={[styles.spaceTop]}>
        <div className={[styles.paddingLeft]}>

          <StyledText
            text="About"
            size="billboard"
            color="blue"
          />

        </div>

        <br />
        <br />

        <div className={[styles.borderTop]}>

          <StyledText
            text="I like to make websites with React.js, connect things to the internet, tinker, and write guides on how to make your own IoT(Internet of Things) devices!"
            size="regular"
            color="white"
          />

          <br />
          <br />
          <br />

          <StyledText
            text="You can check out my IoT projects on Hackster.io, and keep up with my code on Github.com... Links are on the side!"
            size="regular"
            color="white"
          />

          <br />
          <br />
          <br />

          <StyledText
            text="If you would like to contact me, my email is"
            size="regular"
            color="white"
          />
          <StyledText
            text=" me@iamandrew.io"
            size="regular"
            color="blue"
          />

          <br />
          <br />

        </div>
      </div>
    )
  }
}
