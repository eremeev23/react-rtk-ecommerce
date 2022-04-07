import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/PageNotFound';
import { Policy } from './pages/Policy';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<ProductList/>} />
          <Route path="/:id/:id" element={<Product />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
