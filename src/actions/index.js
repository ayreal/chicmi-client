import {
  ASYNC_START,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_EVENTS_TO_STORE
} from "./types";
import * as adapter from "../services/adapter";

export function fetchProfile(data, history) {
  return dispatch => {
    console.log("Inside action fetchProfile, history is", history);
    dispatch({ type: ASYNC_START });
    adapter.loginUser(data).then(user => {
      localStorage.setItem("token", user.token);
      console.log("About to dispatch user, user is \n", user);
      dispatch({ type: LOGIN_USER, user: user });
      history.push("/");
    });
  };
}

export function fetchCurrentUser() {
  return dispatch => {
    console.log("Inside action fetchCurrentUser");
    dispatch({ type: ASYNC_START });
    adapter.fetchCurrentUser().then(user => {
      dispatch({ type: LOGIN_USER, user: user });
    });
  };
}

export const logoutUser = () => {
  console.log("Inside logoutUser action");
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
};

export const fetchRemoteEvents = () => {
  return dispatch => {
    console.log("Inside action fetchRemoteEvents");
    dispatch({ type: ASYNC_START });
    adapter.fetchRemoteEvents().then(results => {
      dispatch({ type: ADD_EVENTS_TO_STORE, events: results.values.events });
    });
  };
};

// need a fn to fetch userEvents from internal API

export const fetchAddEvent = (userId, event) => {
  return dispatch => {
    console.log("Inside action fetchAddEvent");
    dispatch({ type: ASYNC_START });
    adapter.fetchAddEvent(userId, event).then(result => {
      dispatch({ type: LOGIN_USER, user: result });
    });
  };
};

export const fetchDeleteEvent = (userId, externalEventId) => {
  return dispatch => {
    console.log("Inside action fetchDeleteEvent");
    dispatch({ type: ASYNC_START });
    adapter.fetchDeleteEvent(userId, externalEventId).then(result => {
      dispatch({ type: LOGIN_USER, user: result });
    });
  };
};
