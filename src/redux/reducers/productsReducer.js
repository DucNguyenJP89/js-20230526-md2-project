import { typeActions } from "../constants/typeActions";

const inititalState = {
  products: [],
};

export const productsReducer = (state=inititalState, { type, payload }) => {
  switch (type) {
    case typeActions.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
  switch (type) {
    case typeActions.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
}