import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const Bill = styled.div`
  padding: 20px;
  height: fit-content;
  width: 400px;
  border: 2px solid #232323;
  border-radius: 6px;
`

const BillHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #c3c3c3;
`

const BillTitle = styled.h2`
  margin-bottom: 5px;
  font-weight: 700;
`

const BillValue = styled.span`
 color: teal;
`

const BillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

const BillItemName = styled.p`
  font-weight: 500;
  color: #565656;
`

const BillItemValue = styled.p`
  font-size: 17px;
  font-weight: 600;
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
`


const CartItem = () => {
  const delivery = 10;
  const bill = useSelector(state => state.cart.bill)

  console.log(bill)

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