import { typeActions } from "../constants/typeActions";

const inititalState = {
  orders: [],
  selectedOrder: null,
};

export const ordersReducer = (state=inititalState, { type, payload}) => {
  switch (type) {
    case typeActions.SET_ORDERS:
      return { ...state, orders: payload };
    case typeActions.SELECTED_ORDER:
      return { ...state, selectedOrder: payload };
    default:
      return state;
  }
}