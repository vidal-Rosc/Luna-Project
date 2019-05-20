import { combineReducers } from "redux";
import userReducer from "./userReducer";
import restaurantReducer from "./restaurantReducer";
import restaurantReviewReducer from "./restaurantReviewReducer";
import restaurantReviewReducerCedric from "./restaurantReviewReducerCedric";
import registrationReducer from "./registrationReducer";
import registrationValidationReducer from "./registrationValidationReducer";
import usersListReducer from "./usersListReducer";
import authReducer from './authorizationReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  restaurantReducer,
  restaurantReviewReducer,
  restaurantReviewReducerCedric,
  registrationReducer,
  registrationValidationReducer,
  usersListReducer,
});

export default rootReducer;
