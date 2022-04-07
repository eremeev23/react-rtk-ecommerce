import { createSlice } from "@reduxjs/toolkit";

const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: {
    accessories: [
      {
        id: 1,
        img: 'https://images.pexels.com/photos/9332189/pexels-photo-9332189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Snowflake earrings",
        colors: ["#E2E2E6", "#AEC8EE"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '100',
        sizes: []
      },
      {
        id: 2,
        img: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: "Wireless headphones",
        colors: ["#eee", "#272727", "#1672a4", "#7d0303"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '24',
        sizes: []
      },
      {
        id: 3,
        img: 'https://gipermarket-online.ru/image/cache/catalog/tovari/Chasi-pattek-phillipe-remen-hermes/3_3-1000x1000.jpg',
        name: "Patek Philippe watches",
        colors: ["#21212E", "#0f496a", "#073200"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '219',
        sizes: []
      },
      {
        id: 4,
        img: 'https://i5.walmartimages.com/asr/dc2da465-fc78-4ee2-9e7f-354299b3683b.7bd262330af82569f79cc9128b2e176a.jpeg',
        name: "Ray-Ban sun glasses",
        colors: ["#232323", "#999999"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '49',
        sizes: []
      },
      {
        id: 5,
        img: 'https://go3.imgsmail.ru/imgpreview?key=1fd14e361092b6f1&mb=storage',
        name: "Transparent woman's glasses",
        colors: ["#232323", "#999999"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '30',
        sizes: []
      },
      {
        id: 6,
        img: 'https://images.pexels.com/photos/5306338/pexels-photo-5306338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: "Straw hat",
        colors: ["#F2DEBB"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '9',
        sizes: []
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

export const { addItem } = accessoriesSlice.actions;

export default accessoriesSlice.reducer