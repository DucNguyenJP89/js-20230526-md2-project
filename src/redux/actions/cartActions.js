import { typeActions } from "../constants/typeActions";

export const addToCart = (product) => {
  return {
    type: typeActions.ADD_TO_CART,
    payload: product
  }
}

export const editItemQuantity = (product) => {
  return {
    type: typeActions.EDIT_ITEM_QUANTITY,
    payload: product
  }
}