import React, { Component } from "react";

import { withRouter } from "react-router";
import { connect } from "react-redux";

import {reviewsActions } from '../../store/actions/reviewsActions'

import "./CreateReviewButton.css";

class CreateReviewButton extends Component {
  submitReviewHandler = event => {
    event.preventDefault();
    this.props.dispatch(reviewsActions(this.props.review, this.props.match.params.id));
    //     .then(data => {
    //       console.log('in the login page button after disptach', data)
    //   if (data) {
    //     this.props.history.push("/userprofile");
    //   }

    // });
  };
  render() {
    return (
      <div>
        <button
          className="create-review-button"
          onClick={this.submitReviewHandler}
        >
          Submit Review
        </button>
      </div>
    );
  }
}

export default connect()(withRouter(CreateReviewButton));
