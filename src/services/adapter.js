const ROUTE = "http://localhost:3000/api/v1";
const EXT_ROUTE =
  "https://www.chicmi.com/api/calendar_in_city/?city=new-york&types=sample-sales&sectors=&designers=&stores=&users=&featured_only=&max_results=&days=60&source=embed";
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

export function fetchAddEvent(userId, event) {
  return fetch(`${ROUTE}/events`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: userId, event: event })
  }).then(res => res.json());
}

export function fetchCreateEvent(event) {
  // debugger;
  return fetch(`${ROUTE}/get_event`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ event: event })
  }).then(res => res.json());
}

// this should delete the association, not the Event instance in the back
export function fetchDeleteEvent(userId, eventId) {
  return fetch(`${ROUTE}/events/${eventId}`, {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify({ user_id: userId })
  }).then(res => res.json());
}

export function fetchEventBySlug(slug) {
  console.log("hit event by slug", slug);
  return fetch(`${ROUTE}/get_event`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ slug: slug })
  }).then(res => res.json());
}

export function fetchAddComment(userId, eventId, comment) {
  return fetch(`${ROUTE}/comments`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ user_id: userId, event_id: eventId, text: comment })
  }).then(res => res.json());
}

export function fetchRemoteEvent(externalId) {
  // debugger;
  return fetch(`${EXT_ROUTE_EVENT}/?event_id=${externalId}`).then(res =>
    res.json()
  );
}

export function fetchAddDesigners(data) {
  // debugger;
  return fetch(`${ROUTE}/designers`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ data: data })
  }).then(res => res.json());
}
