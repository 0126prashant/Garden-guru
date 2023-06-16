import {
  compose,
  combineReducers,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import { reducer as authReducer } from "../redux/authReducer/reducer"
// import { productReducer } from './products/productReducer';

const rootReducer = combineReducers({
  authReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
