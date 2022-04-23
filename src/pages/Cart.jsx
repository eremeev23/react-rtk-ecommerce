import React from 'react';
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import styled from "styled-components"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../store/reducers/cartSlice"
import CartBill from "../components/CartBill";
import EmptyCart from "../components/EmptyCart";

const HomeBtn = styled.button`
    margin-top: 15px;
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
    border: none;
  background-color: transparent;

    svg {
        margin-right: 7px;
    }
`

const CartHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Clear = styled.button`
  cursor: pointer;
  color: #7f7f7f;
  border: none;
  background-color: transparent;
  font-weight: 500;
  text-decoration: underline;
`

const Title = styled.h1`
  
`

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`

const CartItems = styled.div`
  padding-right: 60px;
  width: calc(100% - 420px);
`

export const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteAllItems = () => dispatch(clearCart());

  function showCart() {
    if (items.length) {
      return (
        <>
          <CartHeader>
            <Title>CART</Title>
            <Clear onClick={deleteAllItems}>Clear cart</Clear>
          </CartHeader>
          <CartWrapper>
            <CartItems>
              {
                items.map((item, id) => (
                  <CartItem item={item} key={id}>
                  </CartItem>
                ))
              }
            </CartItems>
            <CartBill />
          </CartWrapper>
        </>
      )
    } else {
      return (
        <>
          <CartHeader>
            <Title>CART</Title>
          </CartHeader>
          <EmptyCart />
        </>
      )
    }
  }

  return (
    <div>
      <Navbar/>
      <HomeBtn  onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon />
        Back
      </HomeBtn>

      {showCart()}

      <Newsletter />
      <Footer />
    </div>
  )
}

