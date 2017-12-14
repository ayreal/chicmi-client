import { ASYNC_START, LOGIN_USER } from "./types";
import * as adapter from "./adapter";

export function fetchProfile(data) {
  return dispatch => {
    console.log("Inside action fetchProfile");
    dispatch({ type: ASYNC_START });
    adapter.fetchCurrentUser(data).then(user => {
      console.log("About to dispatch user, user is \n", user);
      dispatch({ type: LOGIN_USER, user: user });
    });
  };
}
