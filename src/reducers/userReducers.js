import { CREATE_USER, CLEAR_USER, FETCH_USERS} from "../types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { user: action.payload };
    case CLEAR_USER:
      return { user: null };
    case FETCH_USERS:
      return { users: action.payload };
    default:
      return state;
  }
};
export { userReducer };
