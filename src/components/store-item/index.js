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
    return <div className='Item--Container'>

      <img className='Item--Image' src={this.props.img}/>

      <div className='Item--Title'>
        {this.props.name}
        <br/>

        <div className='Item--Description'>
          {this.props.description}
        </div>

      </div>

      <div className='Item--Price'>
        Price: ${this.props.price}

        <div className='AddToCartButton--Container'>
          <SecondaryButton name='addToCart' type='button' text='Add To Cart'/>
        </div>

      </div>

    </div>
  }
}
