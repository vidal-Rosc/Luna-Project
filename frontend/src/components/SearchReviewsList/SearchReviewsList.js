import React, { Component } from 'react'
import { connect } from "react-redux"
import './SearchReviewsList.css'
import ReviewItem from "../ReviewItem/ReviewItem";


class SearchReviewsList extends Component {

  render() {
      console.log('');
    return (
      <div className='search-reviews-list'>
        {
            this.props.List_reviews
            ? this.props.List_reviews.map( (review, index) => {
                    return <ReviewItem review={review} key={index}/>
                })
            : ("loading...")
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    List_reviews: state.restaurantReviewReducer.reviews
  };
};
export default connect(mapStateToProps)(SearchReviewsList)