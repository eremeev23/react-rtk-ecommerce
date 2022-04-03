import React from 'react';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
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
      <Newsletter />
      <Footer />
    </div>
  )
}

