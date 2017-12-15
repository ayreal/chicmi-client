import { combineReducers } from "redux";

const currentUserReducer = (state = {}, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, isFetching: true };
    case "LOGIN_USER":
      console.log("Action.user is", action.user);
      return {
        ...state,
        id: action.user.id,
        name: action.user.name,
        email: action.user.email,
        photo: action.user.photo,
        city_id: action.user.city_id,
        username: action.user.username,
        twitter: action.user.twitter,
        instagram: action.user.instagram,
        bio: action.user.bio,
        isFetching: false
      };
    case "LOGOUT_USER":
      debugger;
      return {};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  // how to get an isFetching here set to false?
  currentUser: currentUserReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePaintingId: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
