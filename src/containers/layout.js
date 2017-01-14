import React, { PropTypes } from 'react'

import TopNav from '../components/top-nav'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

export default class App extends React.Component {
  render() {
    return (
      <div className={[styles.layout]}>

          <TopNav currentPage={window.location.pathname}>

            <div className={[styles.marginLeft]}>

              {this.props.children}

            </div>

          </TopNav>

      </div>
    )
  }
}

App.propTypes = propTypes
