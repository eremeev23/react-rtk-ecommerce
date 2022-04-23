import { createSlice } from "@reduxjs/toolkit";

const shoesSlice = createSlice({
  name: 'Shoes',
  initialState: {
    shoes: [
      {
        id: "heeled-shoes",
        img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Heeled shoes",
        colors: ["#265a87", "#b0957c"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '44',
        sizes: ['35', '36', '37', '39']
      },
      {
        id: "moccasins",
        img: 'https://images.unsplash.com/photo-1632748914020-941675839f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=584&q=80',
        name: "Woman's moccasins",
        colors: ["#FCD152", "#219ebc", "#bb3e03"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '16',
        sizes: ['35', '38', '39']
      },
      {
        id: "base-boots",
        img: 'https://images.unsplash.com/photo-1574009709841-7e4781f5afef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Man's base boots",
        colors: ["#D17D43"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '35',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: "nikes",
        img: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: "Nike sneakers",
        colors: ["#fff", "#333333"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '60',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: "converse-all-stars",
        img: 'https://images.unsplash.com/photo-1584633155097-19e7753dba76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Classic Converse All stars",
        colors: ["#444444", "#f1f1f1", "#384746"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '30',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: "running-shoes",
        img: 'https://images.unsplash.com/photo-1584545284372-f22510eb7c26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Running shoes",
        colors: ["#0A4958", "#97CC04", "#474647", "#F58E90"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '9',
        sizes: ['39', '40', '41', '42', '43', '44']
      },
    ]
  },
  reducers: {
    addItem(state, action) {
      console.log(state)
      console.log(action)

      state.clothes.push({
        id: new Date().toISOString(),
        img: action.payload.img,
        name: action.payload.name,
        colors: action.payload.colors,
        description: action.payload.description,
        sizes: action.payload.sizes,
      })
    }
  }
})

export const { addItem } = shoesSlice.actions;

export default shoesSlice.reducer