import { combineReducers } from "redux";

import notification from "./notification/reducer";
import register from "./register/reducer";
import login from "./login/reducer";

export default combineReducers({
  register,
  login,
  notification,
});
