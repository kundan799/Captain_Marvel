import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reduser } from "./Reducer";

//create
const RootReducer = combineReducers({
  Product: Reduser,
});

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk));
