import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, categoryReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { ordersReducer } from "./ordersReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default reducers;