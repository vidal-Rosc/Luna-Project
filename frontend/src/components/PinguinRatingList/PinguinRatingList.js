import React, { Component } from 'react'

import './PinguinRatingList.css'

import pinguinLogo from '../../Assets/PinguinLogo.jpg'

export default class PinguinRatingList extends Component {
  render() {
    return (
      <div className='pinguin-rating-container'>
         <img className='rating-pinguin-item' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin-item' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin-item' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin-item' src={pinguinLogo} alt=""/>
            <img className='rating-pinguin-item' src={pinguinLogo} alt=""/>
      </div>
    )
  }
}
