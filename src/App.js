import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product-list" element={<ProductList/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
