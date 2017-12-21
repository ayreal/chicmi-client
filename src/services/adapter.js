const ROUTE = "http://localhost:3000/api/v1";
const EXT_ROUTE =
  "https://www.chicmi.com/api/calendar_in_city/?city=new-york&types=sample-sales&sectors=&designers=&stores=&users=&featured_only=yes&max_results=&date_from=2017%2F12%2F11&date_to=2017%2F12%2F16&source=embed";

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
  return fetch(`${ROUTE}/new_event`, {
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
  return fetch(`${EXT_ROUTE}/current_user`).then(res => res.json());
}
