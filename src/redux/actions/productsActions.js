import { typeActions } from "../constants/typeActions";

export const setProducts = (products) => {
  return {
    type: typeActions.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product) => {
  return {
    type: typeActions.SELECTED_PRODUCT,
    payload: product,
  }
}