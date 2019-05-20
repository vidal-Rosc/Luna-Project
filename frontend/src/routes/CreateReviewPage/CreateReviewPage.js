import React, { Component } from 'react';
import CreateReviewBanner from '../../components/CreateReviewBanner/CreateReviewBanner';
import ReviewInput from '../../components/ReviewInput/ReviewInput';

import './CreateReviewPage.css'
import PinguinRatingList from '../../components/PinguinRatingList/PinguinRatingList';

class CreateReviewPage extends Component {
  render() {
    return (
      <div className='create-review-page-main-container'>
        <CreateReviewBanner/>
        <div className='create-review-middle-container'>
          <PinguinRatingList/>
        <ReviewInput/>
        </div>
        
      </div>
    )
  }
}

export default CreateReviewPage;