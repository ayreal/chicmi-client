import {
  ASYNC_START,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_EVENTS_TO_STORE,
  SET_CURRENT_EVENT
} from "./types";
import * as adapter from "../services/adapter";

// AUTH

export function signupUser(data, history) {
  return dispatch => {
    console.log("inside actions/functions, signupUser");
    console.log("--------------------------------------");

    adapter.signupUser(data).then(payload => {
      console.log("response from signup is: ", payload);
      localStorage.setItem("token", payload.token);
      dispatch({ type: LOGIN_USER, user: payload.user });
      history.push("/");
    });
  };
}

export function fetchProfile(data, history) {
  return dispatch => {
    // console.log("Inside action fetchProfile, history is", history);
    dispatch({ type: ASYNC_START });
    adapter.loginUser(data).then(payload => {
      localStorage.setItem("token", payload.token);
      console.log("About to dispatch user, payload is \n", payload);
      dispatch({ type: LOGIN_USER, user: payload.user });
      history.push("/");
    });
  };
}

export function fetchCurrentUser() {
  return dispatch => {
    // console.log("Inside action fetchCurrentUser");
    dispatch({ type: ASYNC_START });
    adapter.fetchCurrentUser().then(user => {
      dispatch({ type: LOGIN_USER, user: user });
    });
  };
}

export const logoutUser = () => {
  // console.log("Inside logoutUser action");
  localStorage.removeItem("token");
  return { type: LOGOUT_USER };
};

// GET EVENTS FROM EXTERNAL API
export const fetchRemoteEvents = () => {
  return dispatch => {
    // console.log("Inside action fetchRemoteEvents");
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

// ADD DESIGNER TO A USER'S DESIGNERS

export const fetchAddDesigner = (userId, designer) => {
  return dispatch => {
    console.log("Inside action fetchAddDesigner");
    dispatch({ type: ASYNC_START });
    adapter.fetchAddDesigner(userId, designer).then(payload => {
      dispatch({ type: LOGIN_USER, user: payload });
    });
  };
};

// REMOVE DESIGNER FROM A USER'S DESIGNERS

export const fetchDeleteDesigner = (userId, event) => {
  return dispatch => {
    console.log("Inside action fetchDeleteDesigner");
    dispatch({ type: ASYNC_START });
    adapter.fetchDeleteDesigner(userId, event).then(payload => {
      dispatch({ type: LOGIN_USER, user: payload });
    });
  };
};

// PERSIST AN EVENT TO MY API

export const fetchCreateEvent = (event, history) => {
  // do another fetch to the external API for event-specific data
  // create event in my API with the results -- this will include creating Designers
  // dispatch that event to the store
  // debugger;
  return dispatch => {
    adapter.fetchRemoteEvent(event.event_id).then(result => {
      // debugger;
      adapter.fetchCreateEvent(result.values).then(result => {
        // debugger;
        dispatch({ type: SET_CURRENT_EVENT, event: result });
        history.push(`${result.slug}`);
      });
    });
  };
};

export const fetchEventBySlug = slug => {
  return dispatch => {
    console.log("Inside action fetchEventBySlug", slug);
    dispatch({ type: ASYNC_START });
    adapter.fetchEventBySlug(slug).then(result => {
      dispatch({ type: SET_CURRENT_EVENT, event: result });
    });
  };
};

export const fetchAddComment = (userId, eventId, comment) => {
  return dispatch => {
    console.log("Inside action fetchAddComment");
    dispatch({ type: ASYNC_START });
    adapter.fetchAddComment(userId, eventId, comment).then(result => {
      console.log("FETCH ADDCOMMENTRESULT,", result);
      dispatch({ type: SET_CURRENT_EVENT, event: result });
    });
  };
};
