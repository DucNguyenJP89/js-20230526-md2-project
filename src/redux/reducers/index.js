import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, categoryReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { ordersReducer } from "./ordersReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  users: usersReducer,
});

export default reducers;