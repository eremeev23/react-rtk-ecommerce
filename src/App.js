import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import styled from "styled-components";
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/PageNotFound';
import { Policy } from './pages/Policy';
import { Cart } from './pages/Cart';

const ModalContent = styled.div`
  padding: 20px;
  width: 320px;
  background-color: rgba(255, 255, 255);
  transition: opacity .6s ease-in-out;
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(31, 31, 31, 0.7);
  transition: width .3s ease-in-out .3s, height .3s ease-in-out .3s, opacity .6s ease-in-out;
  
  &.hidden {
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    
    ${ModalContent} {
      opacity: 0;
    }
  }
`

const ModalText = styled.p`
  line-height: 140%;
  font-weight: 500;
  
  a {
    color: teal;
    font-weight: 600;
    text-decoration: none;
  }
`

const Title = styled.h1`
  margin-bottom: 15px;
`

const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  cursor: pointer;
  padding: 15px;
  background-color: transparent;
  border: 2px solid #232323;
  font-weight: 700;
  font-size: 20px;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;

  &:hover {
    background-color: #232323;
    color: #fff;
  }
`

function App() {
  const [modalStatus, setModalStatus] = useState(true);

  return (
    <div className="App">
      <Modal className={modalStatus ? "visible" : "hidden"}>
        <ModalContent>
          <ModalText>
            <Title>Hello, guest!</Title>
            This is not a real store, but my pet-project. So, you can visit
            <a href="https://eremeev-23.vercel.app/"> my site to contact me</a> or
            <a href="mailto:eremeevmiami94@icloud.com"> send me a mail</a>. Enjoy my store!
          </ModalText>
          <Button onClick={() => setModalStatus(false)}>Go to shop!</Button>
        </ModalContent>
      </Modal>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<ProductList/>} />
          <Route path="/:id/:id" element={<Product />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
