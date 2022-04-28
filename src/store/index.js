import { createStore, combineReducers } from "redux";
import colorReducer from "./color/reducer";

const reducers = combineReducers({
  colorReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
