import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

import pinguinLogo from '../../Assets/PinguinLogo.jpg'
import pinguin2 from "../../Assets/pinguin2.png"
import "./RestaurantSingleReview.css";


class RestaurantSingleReview extends Component {
    render() {
        return (
            <div className="restaurant-page-single-review-container">
                <div className="restaurant-page-single-review-user">
                    <div className="restaurant-page-single-review-user-left">
                        <img src={pinguin2} className="restaurant-page-pinguin-avatar" alt="User avatar" />
                        <div className="restaurant-page-single-review-user-info">
                            <p>{this.props.review.review_owner.username}</p>
                            <p>Total reviews</p>
                        </div>
                        <div className='restaurant-page-single-review-user-rating-pinguin-list'>
                            <img src={pinguinLogo} alt="" />
                            <img src={pinguinLogo} alt="" />
                            <img src={pinguinLogo} alt="" />
                        </div>
                    </div>
                    <p className="restaurant-page-single-review-user-right">{moment(this.props.review.date_created).format('MMM Do YYYY')}</p>
                </div>
                <div className="restaurant-page-single-review-content">
                    {this.props.review.text_content}
                </div>
                <div className="restaurant-page-single-review-interaction">
                    <div className="restaurant-page-single-review-interaction-buttons">
                        <button className='restaurant-page-single-review-interaction-like-button'>
                            <NavLink className='restaurant-page-single-review-interaction-like-font' to="">Like {this.props.review.likes.length}</NavLink>
                        </button>
                        <button className='restaurant-page-single-review-interaction-comment-button'>
                            <NavLink className='restaurant-page-single-review-interaction-comment-font' to="">Comment</NavLink>
                        </button>
                    </div>
                    <div className="restaurant-page-single-review-interaction-expand-comments">
                        View all comments
                    </div>
                </div>
            </div>
        );
    };
};

export default RestaurantSingleReview;
