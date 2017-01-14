import React, { PropTypes } from 'react'

import StyledText from '../components/styled-text'

import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className={[styles.spaceTop]}>
        <div className={[styles.paddingLeft]}>

          <br />

          <StyledText
            text="What is Omniwolf?"
            size="large"
            color="blue"
          />

        </div>

        <br />
        <br />

        <div className={[styles.borderTop]}>

          <StyledText
            text="Omniwolf is an Open Source, Modular, Distributed Sensor Network."
            size="regular"
            color="white"
          />

          <br />
          <br />

          <StyledText
            text="The goal is to allow regular people access to creating IoT solutions, as well as making it easier for developers through our Integrated Actions and API."
            size="regular"
            color="white"
          />

          <br />
          <br />

          <StyledText
              text="Users can create groups of data from different sources, such as Google APIs, sensors on our system, and more. Then, Actions can be set based on the data group to kick off IoT Automations through Meshblu, a machine-to-machine instant messaging service."
              size="regular"
              color="white"
          />

          <br />
          <br />

          <StyledText
              text="This generic IoT solution platform has a wide range of potential solutions, such as home security, agriculture, patient care, etc."
              size="regular"
              color="white"
          />

          <br/>
          <br/>

          <StyledText
              text="Here's just a few things you could do with"
              size="regular"
              color="white"
          />

          <StyledText
              text=" Omniwolf DSN"
              size="regular"
              color="blue"
          />

          <StyledText
              text=":"
              size="regular"
              color="white"
          />

          <br/>
          <br/>

          <StyledText
              text="-- "
              size="regular"
              color="blue"
          />

          <StyledText
              text="Automatically call Authorities if your back door is opened during the night"
              size="regular"
              color="white"
          />

          <br/>
          <br/>

          <StyledText
              text="-- "
              size="regular"
              color="blue"
          />

          <StyledText
            text="Receive a text if your bike lock is being tampered with"
            size="regular"
            color="white"
          />

          <br/>
          <br/>

          <StyledText
              text="-- "
              size="regular"
              color="blue"
          />

          <StyledText
            text="Alert nursing staff when an older patient should not be leaving their bed"
            size="regular"
            color="white"
          />

          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
    )
  }
}
