import { typeActions } from "../constants/typeActions";

const initialState = {
  users: [],
  selectedUser: null,
}

export const usersReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case typeActions.SET_USERS:
      return { ...state, users: payload };
    case typeActions.SELECTED_USER:
      return { ...state, selectedUser: payload };
    default:
      return state;
  }
}