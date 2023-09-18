import { typeActions } from "../constants/typeActions";

const initialState = {
  orders: [],
  selectedOrder: null,
};

export const ordersReducer = (state=initialState, { type, payload}) => {
  switch (type) {
    case typeActions.SET_ORDERS:
      return { ...state, orders: payload };
    case typeActions.SELECTED_ORDER:
      return { ...state, selectedOrder: payload };
    case typeActions.EDIT_ORDER:
      return { ...state, orders: state.orders.map((order) => order.order_id === payload.id ? payload : order)}
    default:
      return state;
  }
}