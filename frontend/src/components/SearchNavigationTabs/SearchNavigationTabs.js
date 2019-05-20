import React, {Component} from "react";
import {connect} from "react-redux";

import "./SearchNavigationTabs.css";
import SearchRestaurantList from "../SearchRestaurantList/SearchRestaurantList";
import SearchReviewsList from "../SearchReviewsList/SearchReviewsList";
import SearchUsersList from "../SearchUsersList/SearchUsersList";
import {getUsersAction} from "../../store/actions/usersPageAction";


import arrows from "../../Assets/arrows.png";
import getRestaurantReviews from "../../store/actions/restaurantReviewsActions";

class SearchNavigationTabs extends Component {

    state = {
        restaurantTab: false,
        reviewsTab: false,
        usersTab: false
    };

    restaurantHandler = event => {
        this.setState({
            restaurantTab: !this.state.restaurantTab,
            reviewsTab: false,
            usersTab: false
        });
    };

  reviewsHandler = event => {
      this.props.dispatch(getRestaurantReviews());
      this.setState({
      reviewsTab: !this.state.reviewsTab,
      restaurantTab: false,
      usersTab: false
    });
  };

  usersHandler = event => {
    this.setState({
      usersTab: !this.state.usersTab,
      restaurantTab: false,
      reviewsTab: false
    });
  };

    render() {
        return (
            <div>
                <div className="search-tab-main-container">
                    <div onClick={this.restaurantHandler}>RESTAURANTS</div>
                    <div onClick={this.reviewsHandler}>REVIEWS</div>
                    <div onClick={this.usersHandler}>USERS</div>
                </div>
                <div className="search-lists-container">
                    {!this.state.restaurantTab &&
                    !this.state.reviewsTab &&
                    !this.state.usersTab ? (
                        <div className='arrows-container'>
                            <img className="arrows" src={arrows} alt=""/>
                            <p className="select-paragraph">
                                select what you are looking for
                            </p>
                        </div>
                    ) : null}
                    {this.state.restaurantTab ? <SearchRestaurantList/> : null}
                    {this.state.reviewsTab ? <SearchReviewsList/> : null}
                    {this.state.usersTab ? <SearchUsersList/> : null}
                </div>
            </div>
        );
    }
}
export default connect()(SearchNavigationTabs);
