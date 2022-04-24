import { CREATE_USER, CLEAR_USER, FETCH_USERS } from "../types";

export const createUser = (user) => (dispatch) => {
  fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_USER, payload: data });
    });
};
export const clearUser = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
};
export const fetchUsers = () =>  (dispatch) => {
   fetch("/api/users")
    .then((res) =>  res.json())
    .then((data) => {
      dispatch({ type: FETCH_USERS, payload: data });
    });
};
