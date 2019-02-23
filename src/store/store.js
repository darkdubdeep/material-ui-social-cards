import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReduser from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReduser,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log(store);
export default store;
