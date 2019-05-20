import React, { Component } from "react";
import CreateReviewButton from "../../components/CreateReviewButton/CreateReviewButton";

import "./ReviewInput.css";

class ReviewInput extends Component {
  state = {
    review: "this is a review test"
  };

  reviewInputHandler = event => {
    const review = event.currentTarget.value;
    this.setState({
      review: review
    });
  };

  render() {
    return (
      <div>
        <div className="review-input-main-container">
          <input
            className="review-input"
            placeholder="Your review helps others learn about great local businesses."
            value={this.state.review}
            onChange={this.reviewInputHandler}
          />
        </div>
        <CreateReviewButton review={this.state.review}/>
      </div>
    );
  }
}

export default ReviewInput;
