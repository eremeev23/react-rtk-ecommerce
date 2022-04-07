import { createSlice } from "@reduxjs/toolkit";

const slidesSlice = createSlice({
  name: 'slides',
  initialState: {
    slides: [
      {
        id: 1,
        img: 'https://images.pexels.com/photos/7948616/pexels-photo-7948616.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        title: 'Summer Dress',
        desc: "New summer '21 collection",
        bg: '6c584c',
        slug: '/clothes/1'
      },
      {
        id: 2,
        img: 'https://images.pexels.com/photos/4560148/pexels-photo-4560148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: "Man's jacket",
        desc: "New summer '21 collection",
        bg: '718355',
        slug: '/clothes/5'
      },
      {
        id: 3,
        img: 'https://images.pexels.com/photos/5368962/pexels-photo-5368962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: "Man's jeans",
        desc: "New summer '21 collection",
        bg: '8f857b',
        slug: '/clothes/3'
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

export const { addItem } = slidesSlice.actions;

export default slidesSlice.reducer