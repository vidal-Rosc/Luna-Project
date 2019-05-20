import React, { Component } from "react";
import { addRestaurant} from '../../store/actions/addRestaurantAction'
import { connect } from "react-redux";

import { withRouter } from 'react-router'

import "./NewRestaurantCreateButton.css";

class NewRestaurantCreateButton extends Component {


  submitHandler = event => {
    event.preventDefault();    
    const action = addRestaurant(this.props.restaurantForm)
    this.props.dispatch(action).then(()=> {this.props.history.push("/search/")})
  };

  render() {
    return (
      <div>
        <button className="create-button-orange" onClick={this.submitHandler}>Create Restaurant</button>
      </div>
    );
  }
}

export default connect()(withRouter(NewRestaurantCreateButton))
