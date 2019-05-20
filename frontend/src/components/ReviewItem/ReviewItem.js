import React, { Component } from 'react';
import './ReviewItem.css'
import pinguin from '../../Assets/PinguinLogo.jpg'

class ReviewItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='review-card-main-container'>
        <div className='card-main-header'>
          <img src={pinguin} alt="avatar"/>
          <h3 className='writer-review-name'>{this.props.review.review_owner.username}</h3>
        </div>
        <p className='text-review-content'>{this.props.review.text_content}</p>
      </div>
    )
  }
}

export default ReviewItem;