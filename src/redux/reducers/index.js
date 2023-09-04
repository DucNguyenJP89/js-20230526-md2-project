import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, categoryReducer } from "./productsReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  category: categoryReducer
});

export default reducers;