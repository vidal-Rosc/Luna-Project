import React, { Component } from "react";
import {withRouter} from "react-router";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import FilterButton from "../../components/FilterButton/FilterButton";
import WriteAReviewButton from "../../components/WriteAReviewButton/WriteAReviewButton";
import EditDataButton from "../../components/EditDataButton/EditDataButton";
import restaurantPageMap from "../../Assets/restaurantPageMap.jpg";
import RestaurantReview from "../../components/RestaurantReview/RestaurantReview"
import "./RestaurantPage.css";
import clock from "../../Assets/clock.svg";
import money from "../../Assets/money.svg";
import phone from "../../Assets/phone2.svg";
import laptop from "../../Assets/laptop.svg"
import location from "../../Assets/location.svg"


class RestaurantPage extends Component {
    render() {
        return (
            <div className="restaurant-page">
                <nav>
                    <NavigationBar />
                </nav>
                <section className="restaurant-page-top-container">
                    <div className="restaurant-page-infos-container">
                        <div className="restaurant-page-infos">
                            <h2>Läderach Chocolatier Suisse</h2>
                            <p>Chocolatiers and Shops</p>
                            <div className="restaurant-page-infos-rating-container">
                                <div className="restaurant-page-infos-rating">RATING</div>
                                <p>69 reviews</p>
                            </div>
                        </div>
                        <img className="restaurant-page-map" src={restaurantPageMap} alt="Restaurant" />
                    </div>
                    <div className="restaurant-page-address-container">
                        <div className="restaurant-page-address">
                            <div className="restaurant-page-address-street">
                                <img src={location} height="30px" alt=""/>
                                <div>Street</div>
                            </div>
                            <div className="restaurant-page-address-phone">
                                <img src={phone} height="30px" alt=""/>
                                <div>PhoneNr</div>
                            </div>
                            <div className="restaurant-page-address-laptop">
                                <img src={laptop} height="30px" alt=""/>
                                <div>Website</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="restaurant-page-lower-container">
                    <section className="restaurant-page-left-container">
                        <div className="restaurant-page-filter-container">
                            <input className="restaurant-page-filter-input" type="text" placeholder="Filter list..." />
                            <FilterButton />
                        </div>
                        <div className="restaurant-page-review-container">
                            <RestaurantReview restaurantID={this.props.match.params.id} />
                        </div>
                    </section>
                    <section className="restaurant-page-right-container">
                        <div className="restaurant-page-opening-hours-container">
                            <img src={clock} alt="clock" />
                            <div>Opening Hours</div>
                        </div>
                        <div className="restaurant-page-price-level-container">
                            <img src={money} alt="money" />
                            <div>Price level: $$$</div>
                        </div>
                        <div className="restaurant-page-buttons">
                            <WriteAReviewButton />
                            <EditDataButton />
                        </div>
                    </section>
                </section>
            </div>
        );
    };
};


export default withRouter(RestaurantPage)