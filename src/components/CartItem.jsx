import React, {useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom"
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import Trash from "@material-ui/icons/ClearRounded";
import {useDispatch} from "react-redux";
import {deleteItem} from "../store/reducers/cartSlice";

const Item = styled.div`
  padding: 10px 20px;
  margin-bottom: 30px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #232323;
  
  a {
    max-height: 160px;
  }

  @media screen and (max-width: 1024px) {
    padding: 10px;
  }

  @media screen and (max-width: 940px) {
    box-sizing: border-box;
  }

  @media screen and (max-width: 540px) {
    height: fit-content;
    padding: 10px 0;
  }
`

const Image = styled.img`
  height: 160px;

  @media screen and (max-width: 940px) {
    height: 140px;
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`

const ItemInfo = styled.div`
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 540px) {
    margin-left: 10px;
  }
`

const ItemName = styled.p`
  font-size: 26px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`

const ItemColor = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 40px 0 0;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 46px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #232323;
    background-color: ${props => props.color};
  }

  @media screen and (max-width: 540px) {
    margin-top: 10px;
    font-size: 14px;

    &::before {
      width: 12px;
      height: 12px;
      left: 40px;
    }
  }
`

const ItemSize = styled.span`
  @media screen and (max-width: 540px) {
    margin-top: 10px;
    font-size: 14px;
  }
`

const ItemPrice = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: 500;

  @media screen and (max-width: 540px) {
    margin-top: 14px;
    font-size: 16px;
  }
`

const ItemAmount = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    flex: auto;
  }

  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`

const Amount = styled.span`
  box-sizing: border-box;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid teal;

  @media screen and (max-width: 540px) {
    width: 24px;
    height: 24px;
  }
`

const ItemDelete = styled.button`
  margin-left: 100px;
  cursor: pointer;
  padding: 4px 3px 1px 4px;
  background-color: transparent;
  height: fit-content;
  color: #232323;
  border: none;
  border-radius: 50%;
  transition: background-color .2s ease-in-out, color .2s ease-in-out;
  
  &:hover {
    color: #f1f1f1;
    background-color: #232323;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(item.amount)

  const numHandler = action => {
    if (action === "plus") {
      num < 10 ? setNum(num + 1) : setNum(10)
    } else {
      num > 1 ? setNum(num - 1) : setNum(1)
    }
  }

  const deleteOneItem = item => dispatch(deleteItem(item.name));

  return (
    <Item>
      <Link to={`/${item.category}/${item.id}`}>
        <Image src={item.img}/>
      </Link>
      <ItemInfo>
        <ItemName>
          <Link to={`/${item.category}/${item.id}`}>
            {item.name}
          </Link>
        </ItemName>
        <div>
          <ItemColor color={item.color}>
            Color:
          </ItemColor>
          <ItemSize>
            Size: {item.size}
          </ItemSize>
        </div>
        <ItemPrice>
          Price: {item.price}$
        </ItemPrice>
      </ItemInfo>
      <ItemAmount>
        <Remove onClick={() => numHandler("minus")} style={{cursor: "pointer"}}/>
        <Amount>{num}</Amount>
        <Add onClick={() => numHandler("plus")} style={{cursor: "pointer"}}/>
      </ItemAmount>
      <ItemDelete onClick={deleteOneItem}>
        <Trash />
      </ItemDelete>
    </Item>
  )
};

export default CartItem;