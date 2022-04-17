import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';
import categoriesReducer from './reducers/categoriesSlice';
import clothesReducer from './reducers/clothesSlice';
import accessoriesReducer from './reducers/accessoriesSlice';
import shoesReducer from './reducers/shoesSlice';
import sliderReducer from './reducers/sliderSlice';
import cartReducer from "./reducers/cartSlice";

export default  configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    clothes: clothesReducer,
    accessories: accessoriesReducer,
    shoes: shoesReducer,
    slides: sliderReducer,
    cart: cartReducer,
  }
})