import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ToggleReducers from "./Reducers/ToggleReducers";

const reducers = combineReducers({
  toggle: ToggleReducers,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
