import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import categoriesReducer from './reducers/categoriesSlice'
import clothesReducer from './reducers/clothesSlice'

export default  configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    clothes: clothesReducer
  }
})