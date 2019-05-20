import React, { Component } from "react";
import { CountryDropdown } from "react-country-region-selector";

import "./NewRestaurantForm.css";

import NewRestaurantCreateButton from "../../components/NewRestaurantCreateButton/NewRestaurantCreateButton";

class NewRestaurantForm extends Component {
  state = {
    name: "Pinguin-Wings",
    category: "",
    country: "",
    city:"North-Pole",
    zip: "9384",
    website: "www.pinguin-wings.com",
    phone: "348-322-3234",
    email: "pinguinwings@email.com",
    openingHours: "5pm-6pm",
    priceLevel: "$$$$$$$",
    image: "",
    imagePreview: ""
  };

  InputHandler = event => {
    const value = event.currentTarget.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  selectInputHandler = event => {
    this.setState({
      country: event
    });
  };

  selectCategoryHandler = event => {
    this.setState({
      category: event.currentTarget.value
    })
  };
  
  imageHandler = e => {
  const reader = new FileReader();
  const image = e.target.files[0];
  reader.onloadend = () => {
    this.setState({
      image:image,
      imagePreview: reader.result
    })
  }
  reader.readAsDataURL(image)
  }

  render() {
    return (
      <div className="new-restautant-form-main-container">
        <div className="new-restaurant-row-container">
          <p>Basic</p>
          <form className="new-restaurant-fields-container">
            <div className="new-restaurant-field-container">
              <label>Name *</label>
              <input
                name="name"
                value={this.state.name}
                onChange={this.InputHandler}
              />
            </div>

            <div className="new-restaurant-field-container">
              <label>Category *</label>
              <select
                value={this.state.category}
                onChange={this.selectCategoryHandler}
                 
              >
                <option defaultValue={this.state.category}>Select a category ... </option>
                <option>MeatLovers</option>
                <option>Wings</option>
                <option>Italian</option>
                <option>Chinese</option>
                <option>French</option>
              </select>
            </div>
            <div className="new-restaurant-field-container">
              <label>Country *</label>
              <CountryDropdown
                value={this.state.country}
                onChange={this.selectInputHandler}
              />
            </div>
          </form>
        </div>

        <div className="new-restaurant-row-container">
          <p>Address</p>
          <form className="new-restaurant-fields-container">
            <div className="new-restaurant-field-container">
              <label>Street *</label>
              <input
                name="street"
                value={this.state.street}
                onChange={this.InputHandler}
              />
            </div>

            <div className="new-restaurant-field-container">
              <label>City *</label>
              <input
                name="city"
                value={this.state.city}
                onChange={this.InputHandler}
              />
            </div>
            <div className="new-restaurant-field-container">
              <label>Zip</label>
              <input
                name="zip"
                value={this.state.zip}
                onChange={this.InputHandler}
              />
            </div>
          </form>
        </div>

        <div className="new-restaurant-row-container">
          <p>Contact</p>
          <form className="new-restaurant-fields-container">
            <div className="new-restaurant-field-container">
              <label>Website</label>
              <input
                name="website"
                value={this.state.website}
                onChange={this.InputHandler}
              />
            </div>

            <div className="new-restaurant-field-container">
              <label>Phone *</label>
              <input
                name="phone"
                value={this.state.phone}
                onChange={this.InputHandler}
              />
            </div>
            <div className="new-restaurant-field-container">
              <label>Email</label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.InputHandler}
              />
            </div>
          </form>
        </div>

        <div className="new-restaurant-row-container">
          <p>Details</p>
          <form className="new-restaurant-fields-container">
            <div className="new-restaurant-field-container">
              <label>Opening Hours *</label>
              <input
                name="openingHours"
                value={this.state.openingHours}
                onChange={this.InputHandler}
              />
            </div>

            <div className="new-restaurant-field-container">
              <label>Price Level</label>
              <input
                name="priceLevel"
                value={this.state.priceLevel}
                onChange={this.InputHandler}
              />
            </div>
            <div className="new-restaurant-field-container">
              <label>Image</label>
              <input type="file" className='choose-file-input' name='image' onChange={(e)=> this.imageHandler(e)}></input>
              {this.state.image ? <img className='file-uploaded-preview' src={this.state.imagePreview} alt=""/> : ""}  
            </div>
          </form>
        </div>
        <NewRestaurantCreateButton restaurantForm={this.state} />
      </div>
    );
  }
}
export default NewRestaurantForm;
