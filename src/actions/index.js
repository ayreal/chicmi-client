import { ASYNC_START, LOGIN_USER } from "./types";
import * as adapter from "./adapter";

export function fetchProfile(data) {
  return dispatch => {
    console.log("Inside action fetchProfile");
    dispatch({ type: ASYNC_START });
    adapter.fetchCurrentUser(data).then(user => {
      localStorage.setItem("token", user.token);
      console.log("About to dispatch user, user is \n", user);
      dispatch({ type: LOGIN_USER, user: user });
      // history.push('/');
    });
  };
}

// export const loginUser = (username, password, history) => dispatch => {
//   dispatch({ type: "ASYNC_START" });
//
//   adapter.auth.login({ username, password }).then(user => {
//     localStorage.setItem("token", user.jwt);
//     dispatch({ type: "SET_CURRENT_USER", user });
//     history.push("/profile");
//   });
// };

export const logoutUser = () => {
  localStorage.removeItem("token");
  return { type: "LOGOUT_USER" };
};
