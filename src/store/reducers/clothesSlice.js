import { createSlice } from "@reduxjs/toolkit";

const clothesSlice = createSlice({
  name: 'Clothes',
  initialState: {
    clothes: [
      {
        id: "summer-dress",
        img: '/assets/dress.jpeg',
        name: "Girl's summer dress",
        colors: ["#D5A2A1"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["S", "M"],
        price: 25,
        date: "04.2021"
      },
      {
        id: "white-dress",
        img: 'https://images.pexels.com/photos/3552358/pexels-photo-3552358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Girl's white dress",
        colors: ["#f1f1f1"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        sizes: ["XS", "S", "XL"],
        price: 11,
        date: "02.2021"
      },
      {
        id: "jeans",
        img: '/assets/jeans.jpeg',
        name: "Man's jeans",
        colors: ["#8D8986", "#61B3FF"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["XS", "S", "M"],
        price: 2,
        date: "06.2021"
      },
      {
        id: "skirt",
        img: 'https://images.pexels.com/photos/4458518/pexels-photo-4458518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Woman's skirt",
        colors: ["#452522"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 2,
        date: "06.2021"
      },
      {
        id: "sweatshirt",
        img: 'https://images.pexels.com/photos/6342786/pexels-photo-6342786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Unisex sweatshirt',
        colors: ["#203437", "#1D1D1D", "#8AA2A9"],
        description: '',
        sizes: ["S", "L", "XL"],
        price: 10,
        date: "03.2021"
      },
      {
        id: "jacket",
        img: '/assets/jaket.jpeg',
        name: "Man's jacket",
        colors: ["#847B68", "#2D262C"],
        description: '',
        sizes: ["XS", "L", "XL"],
        price: 35,
        date: "10.2021"
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

export const { addItem } = clothesSlice.actions;

export default clothesSlice.reducer