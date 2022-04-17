import { createSlice } from "@reduxjs/toolkit";

const clothesSlice = createSlice({
  name: 'Clothes',
  initialState: {
    clothes: [
      {
        id: 1,
        img: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Girl's summer dress",
        colors: ["#D5A2A1"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["S", "M"],
        price: 5.22,
        date: "04.2021"
      },
      {
        id: 2,
        img: 'https://images.pexels.com/photos/3552358/pexels-photo-3552358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Girl's white dress",
        colors: ["#f1f1f1"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        sizes: ["XS", "S", "XL"],
        price: 1.99,
        date: "02.2021"
      },
      {
        id: 3,
        img: 'https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Boy's t-shirt",
        colors: ["#8D8986", "#61B3FF"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["XS", "S", "M"],
        price: 2.00,
        date: "06.2021"
      },
      {
        id: 4,
        img: 'https://images.pexels.com/photos/4458518/pexels-photo-4458518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Woman's skirt",
        colors: ["#452522"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        sizes: ["XS", "S", "M", "L", "XL"],
        price: 0.99,
        date: "06.2021"
      },
      {
        id: 5,
        img: 'https://images.pexels.com/photos/6342786/pexels-photo-6342786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Unisex sweatshirt',
        colors: ["#203437", "#1D1D1D", "#8AA2A9"],
        description: '',
        sizes: ["S", "L", "XL"],
        price: 9.99,
        date: "03.2021"
      },
      {
        id: 6,
        img: 'https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Man's Jean jacket",
        colors: ["#9ABCCC", "#2D262C"],
        description: '',
        sizes: ["XS", "L", "XL"],
        price: 3.50,
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