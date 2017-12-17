import { combineReducers } from "redux";

const currentUserReducer = (state = {}, action) => {
  // console.log("currentUserReducer state\n", state, "and action", action);
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
        events: action.user.events,
        isFetching: false
      };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

// fetch events once when the page loads and store to a constant that is passed as the initial state to the store?

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENTS_TO_STORE":
      return [...action.events];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  events: eventReducer
  // userEvents: userEventReducer
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
