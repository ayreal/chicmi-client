import { ASYNC_START, FETCH_PROFILE, LOGIN_USER } from "./types";
import * as adapter from "./adapter";

export function fetchProfile(data) {
  return dispatch => {
    console.log("Inside action fetchUser");
    dispatch({ type: ASYNC_START });
    adapter.fetchUser(data).then(user => {
      debugger;
      console.log("About to dispatch user, user is", user);
      // dispatch({ type: LOGIN_USER, user: user });
    });
  };
}
// export function fetchProfile() {
//   return dispatch => {
//     console.log("Inside action fetchProfile");
//     dispatch({ type: ASYNC_START });
//     adapter.getUser().then(user => {
//       const firstName = user.results[0].name.first;
//       const picture = user.results[0].picture.thumbnail;
//       console.log("About to dispatch user, user is", user);
//       dispatch({ type: FETCH_PROFILE, user: { firstName, picture } });
//     });
//   };
// }
