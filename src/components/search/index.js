import React, { Component } from 'react'

import styles from './styles.css'

export default class Search extends Component {

  propTypes: {
    type: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  }

  render() {
    return (
      <span>
        <span className={[styles.searchIcon]}>
          <i className="fa fa-search" />
        </span>

        <input
          className={[styles.search]}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
      </span>
    )
  }
}
