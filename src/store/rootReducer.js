import { combineReducers } from "redux";

import user from "./register/reducer";

import isLoading from "./loading";

const rootReducer = combineReducers({
  isLoading,
  user,
});

export default rootReducer;
