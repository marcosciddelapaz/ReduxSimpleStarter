// Incorporar el reducer en el listado de reducers

import { combineReducers } from "redux";
import { showUsers } from "./users";

const rootReducer = combineReducers({
  user: showUsers,
});

export default rootReducer;
