import React, { PropTypes } from 'react'
import 'whatwg-fetch'
import Gauge from 'react-svg-gauge'

import StyledText from '../components/styled-text'
import SensorDisplay from '../components/sensor-display'
import AddAction from '../components/add-action'
import Button from '../components/button'
import Search from '../components/search'

import styles from './styles.css'

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    this.state = { fire: false }
    this.state = { motion: false }
    this.state = { temp: 0 }
    this.state = { number: "" }
    this.state = { humidity: 0 }
  }

  componentDidMount() {
    let self = this
    this.intr = setInterval(function() {
      fetch("http://api.omniwolf.io/device/pull", {"mode": "cors"}).then(function(response) {
        return response.json()
      }).then(function(json) {
        self.setState({ temp: Math.round(json.Items[0].Data * 10) / 10 })
        self.setState({ motion: 1 - json.Items[1].Data })
        self.setState({ fire: 1 - json.Items[2].Data })
        self.setState({ humidity: Math.round((json.Items[3].Data / 5) * 10) / 10 })

        if(json.Items[1].Data !== "1") {
          fetch("https://triggers.octoblu.com/v2/flows/01e49ac5-853e-4e30-b1a7-918180aaa170/triggers/a5e7ff50-db45-11e6-bb50-0b8d843e8186",
          {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json"
            },
            "body": JSON.stringify({
              "motion": json.Items[1].Data,
              "number": self.state.number
            })
          })
        }
      })
    }, 1500)
  }

  componentWillUnmount(){
    clearInterval(this.intr)
  }

  onChange(e) {
    this.setState({ number: "1" + e.target.value })
  }

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

        <SensorDisplay title="Alert Systems">
          <span>

            <Gauge value={this.state.motion} width={250} height={150} max={1} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Motion" />

            <Gauge value={this.state.fire} width={250} height={150} max={1} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Fire" />

            <div className={[styles.action]}>

              <StyledText
                text="Action - "
                color="blue"
                size="small"
              />
              <StyledText
                text="Send Text"
                color="white"
                size="small"
              />

              <br />

              <input name="phone" placeholder="phone #" className={[styles.input]} onChange={this.onChange.bind(this)}/>

            </div>

          </span>
        </SensorDisplay>

        <SensorDisplay title="Internal Air Quality">
          <span>

            <Gauge value={this.state.humidity} width={250} height={150} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Humidity(%)" />

            <Gauge value={this.state.temp} width={250} height={150} color={'rgb(72, 124, 236)'} backgroundColor={'rgb(215,215,215)'} label="Temp(F)" />

            <AddAction />

          </span>
        </SensorDisplay>

        <div className={[styles.bottomSpace]} />

      </div>
    )
  }
}
