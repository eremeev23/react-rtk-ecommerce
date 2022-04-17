import { createSlice } from "@reduxjs/toolkit";

const popularItems = createSlice({
  name: 'popular',
  initialState: {
    items: [
      {
        category: "clothes",
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
        category: "accessories",
        img: 'https://gipermarket-online.ru/image/cache/catalog/tovari/Chasi-pattek-phillipe-remen-hermes/3_3-1000x1000.jpg',
        name: "Patek Philippe watches",
        colors: ["#21212E", "#0f496a", "#073200"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '219',
        sizes: []
      },
      {
        id: 3,
        category: "clothes",
        img: 'https://images.pexels.com/photos/6342786/pexels-photo-6342786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Unisex sweatshirt',
        colors: ["#203437", "#1D1D1D", "#8AA2A9"],
        description: '',
        sizes: ["S", "L", "XL"],
        price: 9.99,
        date: "03.2021"
      },
      {
        id: 4,
        category: "shoes",
        img: 'https://images.unsplash.com/photo-1624005340901-e6cffc4e3a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
        name: "Nike sneakers",
        colors: ["#232323", "#999999"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '60',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: 5,
        category: "shoes",
        img: 'https://images.unsplash.com/photo-1584633155097-19e7753dba76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        name: "Classic Converse All stars",
        colors: ["#444444", "#f1f1f1", "#384746"],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at iure tempora!',
        price: '30',
        sizes: ['39', '41', '42', '43', '44']
      },
      {
        id: 6,
        category: "accessories",
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

  }
})

export default popularItems.reducer