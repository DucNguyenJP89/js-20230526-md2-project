import { typeActions } from "../constants/typeActions";

const initState = {
  carts: [],
  selectedItem: null,
}

export const cartReducer = (state=initState, {type, payload}) => {
  switch (type) {
    case typeActions.ADD_TO_CART:
      return {
        ...state,
        carts: [
          ...state.carts,
          payload
        ]
      }
    case typeActions.EDIT_ITEM_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((e) => e.product_id === payload.product_id ? payload : e)
      }
    default:
      return state;
  }
}