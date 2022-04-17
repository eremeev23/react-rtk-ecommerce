import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';
import categoriesReducer from './reducers/categoriesSlice';
import clothesReducer from './reducers/clothesSlice';
import accessoriesReducer from './reducers/accessoriesSlice';
import shoesReducer from './reducers/shoesSlice';
import sliderReducer from './reducers/sliderSlice';
import cartReducer from "./reducers/cartSlice";
import popularItemsReducer from "./reducers/popularItemsSlice"
import announcementStateReducer from "./reducers/announcementSlice"

export default  configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    clothes: clothesReducer,
    accessories: accessoriesReducer,
    shoes: shoesReducer,
    slides: sliderReducer,
    cart: cartReducer,
    popularItems: popularItemsReducer,
    announcement: announcementStateReducer
  }
})