import axios from "axios";

export const addRestaurant = restaurant => (dispatch, getState) => {
  const token = getState().userReducer.token;
  const body = restaurant;
  const data = new FormData();
  data.append("image", body.image);
  data.append("name", body.name);
  data.append("category", body.category);
  data.append("country", body.country);
  data.append("zip", body.zip);
  data.append("website", body.website);
  data.append("phone", body.phone);
  data.append("email", body.email);
  data.append("street", body.street);
  data.append("city", body.city);
  data.append("openingHours", body.openingHours);
  data.append("priceLevel", body.priceLevel);


  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  };

  return axios
    .post(
      "https://aries.propulsion-learn.ch/app/api/restaurants/new/",
      data,
      config
    )
    .then(response => {
      console.log("response after the fetch", response);
    })
    .catch(err => err);
};
