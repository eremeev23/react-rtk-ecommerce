import React from 'react';
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../store/reducers/cartSlice"

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
  
`

const Bill = styled.div`
  
`

const Item = styled.div`
  height: 200px;
  display: flex;
`

const Image = styled.img`
  height: 100%;
  
`

const ItemName = styled.p`
  font-weight: 500;
`

export const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteAllItems = () => dispatch(clearCart());

  return (
    <div>
      <Navbar/>
      <HomeBtn  onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon />
        Back
      </HomeBtn>
      <CartHeader>
        <Title>CART</Title>
        <Clear onClick={deleteAllItems}>Clear cart</Clear>
      </CartHeader>
      <CartWrapper>
        <CartItems>
          {
            items.map((item, id) => (
              <Item>
                <Image src={item.img}/>
                <ItemName>
                  {item.name}
                </ItemName>
              </Item>
            ))
          }
        </CartItems>
        <Bill>


        </Bill>
      </CartWrapper>
      <Newsletter />
      <Footer />
    </div>
  )
}

