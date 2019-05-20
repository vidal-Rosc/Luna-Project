import React, { Component } from "react";

import HomePageInput from "../../components/HomePageInput/HomePageInput";
import SearchButton from "../../components/HomePageSearchButton/HomePageSearchButton";
import HomePageTitle from "../../components/HomePageTitle/HomePageTitle";

import SearchRestaurantList from '../../components/SearchRestaurantList/SearchRestaurantList'

import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="home-page-top-container">
          <HomePageInput />
          <SearchButton />
        </div>
        <div className="home-page-title-container">
          <HomePageTitle />
        </div>
        <div className='home-page-restaurant-list'>
        <SearchRestaurantList/>
        </div>
      </div>
    );
  }
}
