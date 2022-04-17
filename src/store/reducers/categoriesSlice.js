import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState: {
    categories: [
      {
        id: 1,
        img: 'https://images.pexels.com/photos/8146448/pexels-photo-8146448.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: "Clothes",
        slug: "clothes",
      },
      {
        id: 2,
        img: 'https://images.pexels.com/photos/5306338/pexels-photo-5306338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: "Accessories",
        slug: "accessories",
      },
      {
        id: 3,
        img: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: "Shoes",
        slug: "shoes",
      }
    ]
  },
  reducers: {
    addCategory(state, action) {
      console.log(state)
      console.log(action)

      state.users.push({
        id: new Date().toISOString(),
        img: action.payload.img,
        title: action.payload.lastName,
        slug: action.payload.email,
      })
    }
  }
})

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer