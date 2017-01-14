import React, { PropTypes } from 'react'

import StyledText from '../components/styled-text'
import SensorDisplay from '../components/sensor-display'
import AddAction from '../components/add-action'
import Button from '../components/button'

import styles from './styles.css'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className={[styles.spaceTop]}>

        <div className={[styles.topBar]}>

          <Button type="button" name="add-group">
            <i className="fa fa-plus" />
          </Button>

          <span className={[styles.space]} />

          <Button type="button" name="add-group">
            <i className="fa fa-trash" />
          </Button>

        </div>

        <SensorDisplay title="Font Door">
          <AddAction />
        </SensorDisplay>

        <SensorDisplay title="Baby's Room">
          <AddAction />
        </SensorDisplay>

      </div>
    )
  }
}
