import { typeActions } from "../constants/typeActions";

export const setOrders = (orders) => {
  return {
    type: typeActions.SET_ORDERS,
    payload: orders,
  }
}

export const selectedOrder = (order) => {
  return {
    type: typeActions.SELECTED_ORDER,
    payload: order,
  }
}