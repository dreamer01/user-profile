import { combineReducers } from "redux";

import parties from "./parties";
import users from "./users";
import authentication from "./authentication";

const rootReducer = combineReducers({
  parties,
  users,
  authentication
});

export default rootReducer;
