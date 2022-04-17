import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [
      {
        id: 1,
        img: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Girl's summer dress",
        colors: ["#D5A2A1"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["S", "M"],
        price: 5.22
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1574009709841-7e4781f5afef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Man's base boots",
        colors: ["#D17D43"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '35',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1624005340901-e6cffc4e3a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
        name: "Nike sneakers",
        colors: ["#232323", "#999999"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '60',
        sizes: ['39', '41', '42', '43', '44']
      },
    ]
  },
  reducers: {
    addItem(state, action) {
      state.cartItems.push({
        id: new Date().toISOString(),
        img: action.payload.img,
        title: action.payload.lastName,
        slug: action.payload.email,
      })
    },

    deleteItem(state, action, product) {
      state.cartItems.splice(state.cartItems.indexOf(item => item.name === product.name), 1)
    },

    clearCart(state, action) {
      state.cartItems.splice(0, state.cartItems.length)
    }
  }
})

export const { addCategory } = cartSlice.actions;

export default cartSlice.reducer