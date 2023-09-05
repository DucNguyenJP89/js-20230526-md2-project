import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, categoryReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default reducers;