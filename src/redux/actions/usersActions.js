import { typeActions } from "../constants/typeActions";

export const setUsers = (users) => {
  return {
    type: typeActions.SET_USERS,
    payload: users,
  }
}

export const selectedUser = (user) => {
  return {
    type: typeActions.SELECTED_USER,
    payload: user,
  }
}