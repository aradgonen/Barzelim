import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import dc from "./dc";
import search from "./search";
export default combineReducers({
  auth,
  message,
  dc,
  search,
});
