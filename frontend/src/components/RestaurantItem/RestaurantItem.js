import React, { Component } from 'react'
import pinguinLogo from '../../Assets/PinguinLogo.jpg'

import './RestaurantItem.css'
import {withRouter} from "react-router";

class RestaurantItem extends Component {

  restaurantclickHandler = (e) => {
    this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
  }



  render() {
    return (
      <div className='restaurant-card-main-container' onClick={this.restaurantclickHandler}>
        <h1 className='restaurant-card-name'>{this.props.restaurant.name}</h1>
        <h2 className='restaurant-card-address'>{this.props.restaurant.street}</h2>
        <div className='stars-and-counter-section'>
        <div>
            <img className='rating-pinguin' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin' src={pinguinLogo} alt=""/>
          
        </div>
            <p className='stars-number-counter'>68</p>
        </div>
        <div className='restaurant-card-picture' style={{ backgroundImage: `url(${this.props.restaurant.image})`}}></div>
      </div>
    )
  }
}

export default withRouter(RestaurantItem)