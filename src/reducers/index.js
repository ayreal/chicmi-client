// const defaultState = { currentUser: {}, loading: false };
//
// const rootReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "ASYNC_START":
//       return { ...state, profile: {}, loading: true };
//     case "LOGIN_USER":
//       console.log("Action.user is", action.user);
//       return {
//         ...state,
//         currentUser: action.user,
//         loading: false
//       };
//     default:
//       return state;
//   }
// };
//
// export default rootReducer;

import { combineReducers } from "redux";

const currentUserReducer = (state = {}, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, currentUser: {}, loading: true };
    case "LOGIN_USER":
      console.log("Action.user is", action.user);
      return {
        ...state,
        currentUser: action.user,
        loading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
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
