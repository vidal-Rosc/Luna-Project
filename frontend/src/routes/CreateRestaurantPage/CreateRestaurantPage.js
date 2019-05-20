import React, { Component } from 'react'
import CreateNewRestaurantTitle from "../../components/CreateNewRestaurantTitle/CreateNewRestaurantTitle";
//import NewRestaurantCreateButton from "../../components/NewRestaurantCreateButton/NewRestaurantCreateButton";
import NewRestaurantForm from "../../components/NewRestaurantForm/NewRestaurantForm";

import './CreateRestautantPage.css'

class CreateRestaurantPage extends Component {
  render() {
    return (
      <div className='create-restaurant-main-container'>
        <CreateNewRestaurantTitle/>
        <NewRestaurantForm/>

      </div>
    )
  }
}

export default CreateRestaurantPage;
