// const ROUTE = "https://chicmi-api.herokuapp.com/api/v1";
const ROUTE = "http://localhost:3000//api/v1";

const EXT_ROUTE =
  "https://www.chicmi.com/api/calendar_in_city/?city=new-york&types=sample-sales&sectors=&designers=&stores=&users=&featured_only=&max_results=&days=90&source=embed";
const EXT_ROUTE_EVENT = "https://www.chicmi.com/api/events_get";

const headers = {
  Accepts: "application/json, text/plain",
  "Content-Type": "application/json"
};

export function loginUser(data) {
  return fetch(`${ROUTE}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function signupUser(data) {
  return fetch(`${ROUTE}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function fetchCurrentUser() {
  return fetch(`${ROUTE}/current_user`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ token: localStorage.token })
  }).then(res => res.json());
}

export function fetchRemoteEvents() {
  return fetch(`${EXT_ROUTE}/current_user`).then(res => res.json());
}

// Creates a new event from the external data in EventCard.js
export function fetchCreateEvent(event) {
  return fetch(`${ROUTE}/get_event`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ event: event })
  }).then(res => res.json());
}

// Gets the current event on page refresh
export function fetchEventBySlug(slug) {
  console.log("hit event by slug", slug);
  return fetch(`${ROUTE}/get_event`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ slug: slug })
  }).then(res => res.json());
}

// Adds event to the User's event (UserEvents association table)
export function fetchAddEvent(userId, event) {
  return fetch(`${ROUTE}/events`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: userId, event: event })
  }).then(res => res.json());
}

// Delete UserEvent row in association table
export function fetchDeleteEvent(userId, eventId) {
  return fetch(`${ROUTE}/events/${eventId}`, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ user_id: userId })
  }).then(res => res.json());
}

// Adds designer to the User's designers (UserDesigners association table)
export function fetchAddDesigner(userId, designer) {
  return fetch(`${ROUTE}/designers`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: userId, designer: designer })
  }).then(res => res.json());
}

// Delete UserDesigner row
export function fetchDeleteDesigner(userId, designer) {
  return fetch(`${ROUTE}/designers/${designer.id}`, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ user_id: userId })
  }).then(res => res.json());
}

// Post a comment
export function fetchAddComment(userId, eventId, comment) {
  return fetch(`${ROUTE}/comments`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: userId, event_id: eventId, text: comment })
  }).then(res => res.json());
}

// Delete a comment
export function fetchDeleteComment(comment) {
  // debugger;
  return fetch(`${ROUTE}/comments/${comment.id}`, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ comment: comment })
  }).then(res => res.json());
}

// Get more data from the event-specific route in external API
export function fetchRemoteEvent(externalId) {
  // debugger;
  return fetch(`${EXT_ROUTE_EVENT}/?event_id=${externalId}`).then(res =>
    res.json()
  );
}
