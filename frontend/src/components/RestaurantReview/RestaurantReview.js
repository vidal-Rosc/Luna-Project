import React, { Component } from "react";
import { connect } from "react-redux";

import "./RestaurantReview.css";
import "../RestaurantSingleReview/RestaurantSingleReview";
import fetchRestaurantReviews from "../../store/actions/restaurantReviewsActionsCedric";
import RestaurantSingleReview from "../RestaurantSingleReview/RestaurantSingleReview";


class RestaurantReview extends Component {
    componentDidMount() {
        this.props.dispatch(fetchRestaurantReviews(this.props.restaurantID))
    };

    render() {
        return (
            <div>{this.props.reviews ? this.props.reviews.map((review, index) => {
                return <RestaurantSingleReview key={index} review={review} />
            }): []}</div>
        );
    };
};

const mapStateToProps = state => {
    if (state.restaurantReviewReducerCedric) {
        return {
            reviews: state.restaurantReviewReducerCedric.reviews,
            restaurant: state.restaurantReducer.restaurants
        };
    }
    return {
        reviews: [],
        restaurant: []
    }
};

export default connect(mapStateToProps)(RestaurantReview);
