import { typeActions } from "../constants/typeActions";

const initialState = {
  products: [],
};

export const productsReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case typeActions.SET_PRODUCTS:
      return { ...state, products: payload };
    case typeActions.ADD_NEW_PRODUCT:
      return { 
        ...state, 
        products: [
          ...state.products,
          payload
        ] 
      }
    case typeActions.EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => product.id === payload.id ? payload : product)
      }
    case typeActions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload)
      }
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

export const categoryReducer = (state={}, {type, payload}) => {
  switch (type) {
    case typeActions.SET_CATEGORY:
      return { ...state, ...payload };
    default:
      return state;
  }
}