import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const Bill = styled.div`
  padding: 20px;
  height: fit-content;
  width: 400px;
  border: 2px solid #232323;
  
  @media screen and (max-width: 1300px) {
    max-width: 280px;
  }

  @media screen and (max-width: 940px) {
    box-sizing: border-box;
    max-width: none;
    width: 100%;
    margin-bottom: 20px;
  }


  @media screen and (max-width: 540px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`

const BillHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #c3c3c3;

  @media screen and (max-width: 540px) {
    padding-bottom: 5px;
  }
`

const BillTitle = styled.h2`
  margin-bottom: 5px;
  font-weight: 700;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    margin-bottom: 2px;
  }
`

const BillValue = styled.span`
 color: teal;

  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
`

const BillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  &:not(:last-child) {
    margin-bottom: 15px;

    @media screen and (max-width: 540px) {
      margin-bottom: 10px;
    }
  }
`

const BillItemName = styled.p`
  font-weight: 500;
  color: #565656;

  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`

const BillItemValue = styled.p`
  font-size: 17px;
  font-weight: 600;

  @media screen and (max-width: 540px) {
    font-size: 15px;
  }
`

const TotalPriceName = styled.p`
  font-size: 18px;
  font-weight: 600;
`

const TotalPriceValue = styled.p`
  font-size: 22px;
  font-weight: 600;
`

const GoToOrder = styled.button`
  cursor: pointer;
  padding: 15px;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  text-transform: uppercase;
  color: #f1f1f1;
  background-color: #232323;
  border: 2px solid #232323;
  transition: color .2s ease-in-out, background-color .2s ease-in-out;
  
  &:hover {
    color: #232323;
    background-color: #fff;
  }

  @media screen and (max-width: 540px) {
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
  }
`


const CartItem = () => {
  const delivery = 10;
  const bill = useSelector(state => state.cart.bill)

  return (
    <Bill>
      <BillHeader>
        <BillTitle>
          In your order:
        </BillTitle>
        <BillValue>
          {bill.items} items
        </BillValue>
      </BillHeader>
      <BillItem>
        <BillItemName>All items</BillItemName>
        <BillItemValue>{bill.price} $</BillItemValue>
      </BillItem>
      <BillItem>
        <BillItemName>Delivery</BillItemName>
        <BillItemValue>{delivery} $</BillItemValue>
      </BillItem>
      <BillItem>
        <TotalPriceName>TotalPrice</TotalPriceName>
        <TotalPriceValue>{bill.price + delivery} $</TotalPriceValue>
      </BillItem>
      <GoToOrder>
        Order
      </GoToOrder>
    </Bill>
  )
};

export default CartItem;