import { ASYNC_START, FETCH_PROFILE } from "./types";

const URL = "https://randomuser.me/api/";

export function fetchProfile() {
  return dispatch => {
    console.log("Inside action fetchProfile");
    dispatch({ type: ASYNC_START });
    fetch(URL)
      .then(res => res.json())
      .then(user => {
        const firstName = user.results[0].name.first;
        const picture = user.results[0].picture.thumbnail;
        console.log("About to dispatch user, user is", user);
        dispatch({ type: FETCH_PROFILE, user: { firstName, picture } });
      });
  };
}
