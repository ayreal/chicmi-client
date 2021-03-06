import { combineReducers } from "redux";

const currentUserReducer = (state = { designers: [], events: [] }, action) => {
  // console.log("currentUserReducer state\n", state, "and action", action);
  switch (action.type) {
    case "ASYNC_START":
      return { ...state, isFetching: true };
    case "LOGIN_USER":
      console.log("Action.user is", action.user);
      return {
        ...action.user
      };
    case "RETURN_ERROR":
      return { ...state, errors: [action.error] };
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
      console.log("Action.events is", action.events);
      return [...action.events];
    default:
      return state;
  }
};

const currentEventReducer = (
  state = { comments: [], designers: [] },
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_EVENT":
      console.log("Action for SET_CURRENT_EVENT is", action.event);
      return { ...action.event };
    default:
      return state;
  }
};

// const errorReducer = (state, action) => {
//   switch (action.type) {
//     case "RETURN_ERROR":
//       // console.log("Action for SET_CURRENT_EVENT is", action.event);
//       return [...action.error];
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  currentEvent: currentEventReducer,
  events: eventReducer
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
