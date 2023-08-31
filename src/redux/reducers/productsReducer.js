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