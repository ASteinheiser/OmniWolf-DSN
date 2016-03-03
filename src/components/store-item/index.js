import React, { Component } from 'react'

import SecondaryButton from '../secondary-button';

import './index.css'

export default class StoreItem extends Component {

  propTypes: {
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired,
      price: React.PropTypes.string.isRequired
  }

  render() {
    return <div className='ItemContainer'>

      <img className='ItemImage' src={this.props.img}/>

      <div className='ItemName'>
        {this.props.name}
        <br/>

        <div className='ItemDescription'>
          {this.props.description}
        </div>

      </div>

      <div className='ItemPrice'>
        Price: ${this.props.price}

        <div className='AddToCartButton'>
          <SecondaryButton name='addToCart' type='button' text='Add To Cart'/>
        </div>

      </div>

    </div>
  }
}
