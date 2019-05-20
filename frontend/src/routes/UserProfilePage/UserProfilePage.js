import React, { Component } from "react";

import "./UserProfilePage.css";

import pinguin2 from "../../Assets/pinguin2.png";
import star from "../../Assets/star.svg";
import comments from "../../Assets/comment.svg";
import restaurant from "../../Assets/restaurant.svg";
import edit from "../../Assets/edit.svg";

class UserProfilePage extends Component {
  render() {
    return (
      <div className="user-profile-main-container">
        <div className="user-profile-banner" />

        <div className="user-profile-container">
          <div className="user-profile-details-section">
            <img src={pinguin2} alt=""/>
            <p> 'name' and Profile</p>
            <div className="user-profile-details-boxes">
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={star} alt=""/>
                </div>
                <p>Reviews</p>
              </div>
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={comments} alt=""/>
                </div>
                <p>Comments</p>
              </div>
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={restaurant} alt=""/>
                </div>
                <p>Restaurants</p>
              </div>
              <div className="user-profile-details-box">
                <div className="icon-container">
                  <img src={edit} alt=""/>
                </div>
                <p>Edit Profile</p>
              </div>
            </div>
          </div>
          <div className='user-profile-middle-section'>
              <div className="user-profile-middle-top-section">
                <h2>Pinguin Smith-Anderson</h2>
                <p>Madagascar</p>
                <p>Reviews</p>
                <p> 34123412451 Comments</p>
          </div>
          <div className="user-profile-middle-bottom-section">
            here goes the list of reviews, comments, restaurants components
          </div>
          </div>
          
          <div className="user-profile-about-section">
          <h2>ABOUT 'PINGUIN' </h2>
            <label>Location</label>
            <label>Lune member since</label>
            <label>Things I love</label>
            <label>Description</label>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
