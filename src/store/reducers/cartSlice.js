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
        amount: 1,
        sizes: ["S", "M"],
        price: 5.22
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1574009709841-7e4781f5afef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Man's base boots",
        colors: ["#D17D43"],
        amount: 1,
        price: '35',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1624005340901-e6cffc4e3a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
        name: "Nike sneakers",
        colors: ["#232323", "#999999"],
        amount: 1,
        price: '60',
        sizes: ['39', '41', '42', '43', '44']
      },
    ]
  },
  reducers: {
    addItem(state, action) {
      console.log(action.payload)

      state.cartItems.push({
        id: 4,
        img: action.payload.img,
        name: action.payload.name,
        colors: action.payload.colors,
        price: action.payload.price,
        sizes: action.payload.size,
        amount: action.payload.amount
      })
    },

    deleteItem(state, action, product) {
      state.cartItems.splice(state.cartItems.indexOf(item => item.name === product.name), 1)
    },

    clearCart(state) {
      state.cartItems.splice(0, state.cartItems.length)
    }
  }
})

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer