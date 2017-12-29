import {
  ASYNC_START,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_EVENTS_TO_STORE,
  SET_CURRENT_EVENT,
  SET_MORE_EVENT_DATA
} from "./types";
import * as adapter from "../services/adapter";

// AUTH

export function signupUser(data, history) {
  return dispatch => {
    console.log("inside actions/functions, signupUser");
    console.log("--------------------------------------");

    adapter.signupUser(data).then(user => {
      console.log("response from signup is: ", user);
      localStorage.setItem("token", user.token);
      dispatch({ type: LOGIN_USER, user: user });
      history.push("/");
    });
  };
}

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

// GET EVENTS FROM EXTERNAL API
export const fetchRemoteEvents = () => {
  return dispatch => {
    console.log("Inside action fetchRemoteEvents");
    dispatch({ type: ASYNC_START });
    adapter.fetchRemoteEvents().then(results => {
      dispatch({ type: ADD_EVENTS_TO_STORE, events: results.values.events });
    });
  };
};

// ADD EVENT TO A USER'S EVENTS

export const fetchAddEvent = (userId, event) => {
  return dispatch => {
    console.log("Inside action fetchAddEvent");
    dispatch({ type: ASYNC_START });
    adapter.fetchAddEvent(userId, event).then(payload => {
      dispatch({ type: LOGIN_USER, user: payload.user });
      dispatch({ type: SET_CURRENT_EVENT, event: payload.currentEvent });
    });
  };
};

// REMOVE EVENT FROM A USER'S EVENTS

export const fetchDeleteEvent = (userId, externalEventId) => {
  return dispatch => {
    console.log("Inside action fetchDeleteEvent");
    dispatch({ type: ASYNC_START });
    adapter.fetchDeleteEvent(userId, externalEventId).then(payload => {
      dispatch({ type: LOGIN_USER, user: payload.user });
      dispatch({ type: SET_CURRENT_EVENT, event: payload.currentEvent });
    });
  };
};

// PERSIST AN EVENT TO MY API

export const fetchCreateEvent = (event, history) => {
  // do another fetch to the external API
  // create event in my API with the results
  // dispatch that event to the store
  // debugger;
  return dispatch => {
    adapter.fetchRemoteEvent(event.event_id).then(result => {
      // debugger;
      adapter.fetchCreateEvent(result.values).then(result => {
        dispatch({ type: SET_CURRENT_EVENT, event: result });
        history.push(`${result.slug}`);
      });
    });
  };
};

//     console.log("Inside action fetchCreateEvent");
//     dispatch({ type: ASYNC_START });
//     adapter.fetchCreateEvent(event).then(result => {
//       dispatch({ type: SET_CURRENT_EVENT, event: result });
//       history.push(`${result.slug}`);
//     });
//   };
// };

export const fetchEventBySlug = slug => {
  return dispatch => {
    console.log("Inside action fetchEventBySlug", slug);
    dispatch({ type: ASYNC_START });
    adapter.fetchEventBySlug(slug).then(result => {
      dispatch({ type: SET_CURRENT_EVENT, event: result });
    });
  };
};

export const fetchMoreEventData = externalId => {
  return dispatch => {
    console.log("Inside action fetchMoreEventData", externalId);
    dispatch({ type: ASYNC_START });
    adapter.fetchRemoteEvent(externalId).then(result => {
      dispatch({ type: SET_MORE_EVENT_DATA, payload: result.values });
    });
  };
};

export const fetchAddComment = (userId, eventId, comment) => {
  return dispatch => {
    console.log("Inside action fetchAddComment");
    dispatch({ type: ASYNC_START });
    adapter.fetchAddComment(userId, eventId, comment).then(result => {
      // debugger;
      console.log("FETCH ADDCOMMENTRESULT,", result);
      dispatch({ type: SET_CURRENT_EVENT, event: result });
    });
  };
};
