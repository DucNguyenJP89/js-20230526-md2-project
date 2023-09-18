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

export const setCategory = (category) => {
  return {
    type: typeActions.SET_CATEGORY,
    payload: category,
  }
}

export const addNewProduct = (product) => {
  return {
    type: typeActions.ADD_NEW_PRODUCT,
    payload: product,
  }
}

export const editProduct = (product) => {
  return {
    type: typeActions.EDIT_PRODUCT,
    payload: product,
  }
}

export const deleteProduct = (id) => {
  return {
    type: typeActions.DELETE_PRODUCT,
    payload: id
  }
}