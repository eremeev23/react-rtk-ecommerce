import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [

    ],

    bill: {
      items: 0,
      price: 0
    }
  },
  reducers: {
    addItem(state, action) {
      state.cartItems.push({
        category: action.payload.category,
        id: action.payload.id,
        img: action.payload.img,
        name: action.payload.name,
        color: action.payload.color,
        price: action.payload.price,
        size: action.payload.size,
        amount: action.payload.amount
      })
    },

    deleteItem(state, action) {
      state.cartItems.splice(state.cartItems.indexOf(item => item.name === action.payload), 1)
    },

    clearCart(state) {
      state.cartItems.splice(0, state.cartItems.length)
    },

    countBill(state, action) {
      state.bill.items += action.payload.amount
      state.bill.price += action.payload.price
    }
  }
})

export const { addItem, clearCart, deleteItem, countBill } = cartSlice.actions;

export default cartSlice.reducer