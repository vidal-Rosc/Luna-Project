//Setting up for React:
import React from "react";
import ReactDOM from "react-dom";

//Setting up Redux:
import { Provider } from "react-redux";
import store from "./store/store";

//Setting up React-Router:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Importing the actions:

//Setting up the service worker:
import * as serviceWorker from "./serviceWorker";

//Importing the Route Components:
import App from "./components/App/App";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RestaurantPage from "./routes/RestaurantPage/RestaurantPage";
import UsersListPage from "./routes/UsersListPage/UsersListPage";
import UserProfilePage from "./routes/UserProfilePage/UserProfilePage";
import SignUpPage from "./routes/SignUpPage/SignUpPage";
import ValidationPage from "./routes/ValidationPage/ValidationPage";
import SearchPage from "./routes/SearchPage/SearchPage";
import CreateRestaurantPage from "./routes/CreateRestaurantPage/CreateRestaurantPage";

//Importing High Order Components:
//import AuthComponent from "./Hoc/Hoc";

import SearchReviewsList from "./components/SearchReviewsList/SearchReviewsList";



//importing actions to dispatch the token:
import getRestaurants from "./store/actions/restaurantActions";
import userLoginDispatch from "./store/actions/userLoginAction"
import CreateReviewPage from "./routes/CreateReviewPage/CreateReviewPage";


// Setting up the token for all the components:
const token = localStorage.getItem("token");
if (token) {
  store.dispatch(userLoginDispatch(token));
  store.dispatch(getRestaurants());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/restaurants/:id" component={RestaurantPage} />
          <Route exact path="/userslist" component={UsersListPage} />
          <Route exact path="/userprofile" component={UserProfilePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/validation" component={ValidationPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/newrestaurant" component={CreateRestaurantPage} />
          <Route exact path="/search/reviews" component={SearchReviewsList} />
          <Route exact path="/createreview/:id" component={CreateReviewPage} />
        </App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
