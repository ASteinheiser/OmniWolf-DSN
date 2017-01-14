import React, { PropTypes } from 'react'

import StyledText from '../components/styled-text'
import SensorDisplay from '../components/sensor-display'
import AddAction from '../components/add-action'
import Button from '../components/button'
import Search from '../components/search'

import styles from './styles.css'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className={[styles.spaceTop]}>

        <div className={[styles.topBar]}>

          <Search
            type="text"
            name="search"
            placeholder="Search APIs, sensors, etc"
          />

          <div className={[styles.floatRight]}>
            <Button type="button" name="add-group">
              <i className="fa fa-plus" />
            </Button>

            <span className={[styles.space]} />

            <Button type="button" name="add-group">
              <i className="fa fa-trash" />
            </Button>
          </div>

        </div>

        <SensorDisplay title="Font Door">
          <AddAction />
        </SensorDisplay>

        <SensorDisplay title="Baby's Room">
          <AddAction />
        </SensorDisplay>

        <SensorDisplay title="Back Window">
          <AddAction />
        </SensorDisplay>

        <div className={[styles.bottomSpace]} />

      </div>
    )
  }
}
