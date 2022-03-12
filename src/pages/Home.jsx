import React from 'react';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

