const ROUTE = "http://localhost:3000/api/v1";

const headers = {
  Accepts: "application/json, text/plain",
  "Content-Type": "application/json"
};

export function fetchCurrentUser(data) {
  return fetch(`${ROUTE}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// export function fetchCurrentUser() {
//   const token = localStorage.getItem("token");
//   return fetch(`${ROUTE}/current_user`, {
//     headers: { Authorization: token }
//   }).then(res => res.json());
// }
