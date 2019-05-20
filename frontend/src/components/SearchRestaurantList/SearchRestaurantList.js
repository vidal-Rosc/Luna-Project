import React, { Component } from "react";
import { connect } from "react-redux";
import getRestaurants from "../../store/actions/restaurantActions";
import "./SearchRestaurantList.css";


import "./SearchRestaurantList.css";


import "./SearchRestaurantList.css";
import RestaurantItem from "../RestaurantItem/RestaurantItem";

class SearchRestaurantList extends Component {
  componentDidMount() {
    this.props.dispatch(getRestaurants());
  }
  renderRestaurants = () => {
    let restaurants;
    this.props.restaurants
      ? restaurants = this.props.restaurants.map((restaurant, index) => {
          return <RestaurantItem restaurant={restaurant}  key={index}/>;
        })
      : (restaurants = "loading restaurants...please wait");

    return restaurants;
  };

  render() {
    return (
      <div className="search-restaurant-list">{this.renderRestaurants()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantReducer.restaurants
  };
};

export default connect(mapStateToProps)(SearchRestaurantList);
