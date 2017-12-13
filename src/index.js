import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import reduxThunk from "redux-thunk";
import "./index.css";

const defaultState = { profile: {}, loading: false };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, profile: {}, loading: true };
    case "FETCH_PROFILE":
      return {
        ...state,
        profile: {
          firstName: action.user.firstName,
          picture: action.user.picture
        },
        loading: false
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
