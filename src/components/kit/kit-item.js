import React from 'react';
import Radium from 'radium';

import PrimaryButton from '../buttons/primary-button';

var KitItem = React.createClass({
  propTypes: {

    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div style={[styles.kitItemStyle]}>
        <div>
          <img style={[styles.kitImage]} src={this.props.img}/>
        </div>
        <div style={[styles.kitTitle]}>
          {this.props.name}
          <br/>
          <div style={[styles.kitDescription]}>
            {this.props.description}
          </div>
        </div>
        <div style={[styles.kitPrice]}>
          Price: ${this.props.price}
          <div style={[styles.addToCartButton]}>
            <PrimaryButton name='addToCart' type='submit' text='Add To Cart'/>
          </div>
        </div>
      </div>
    );
  }
});

KitItem = Radium(KitItem);

var styles = {
  kitItemStyle: {

    borderBottom: '1px solid grey',

    height: '150px',
    width: '100%'
  },
  kitImage: {

    float: 'left',

    height: '150px',
    width: '200px'
  },
  kitTitle: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    color: 'rgb(72, 124, 236)',

    paddingLeft: '10px',
    float: 'left',
    height: '100%',

    borderLeft: '1px solid grey'
  },
  kitDescription: {

    fontSize: '20px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    color: 'black',

    width: '500px',
    paddingTop: '10px'
  },
  kitPrice: {

    fontSize: '20px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    textAlign: 'center',

    float: 'left',
    borderLeft: '1px solid grey',

    width: '188px',
    height: '140px',
    paddingTop: '10px',
  },
  addToCartButton: {

    width: '90%',

    margin: '50px auto 0px auto',
  }
}

export default KitItem;
