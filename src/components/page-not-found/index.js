import React, { Component } from 'react'

import './index.css'

export default class PageNotFound extends Component {
  render() {
    console.log(this.props)
    return <div className='PageNotFound'>
      Page Not Found
    </div>
  }
}
