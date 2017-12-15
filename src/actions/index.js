import { ASYNC_START, LOGIN_USER, LOGOUT_USER } from "./types";
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
