import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 3;
  transition: opacity .3s ease;
`

const Container = styled.div`
  position: relative;
  min-width: 280px;
  height: 350px;
  background-color: #fff;

  &:hover ${Info} {
    opacity: 1;
  }
  
  .product-link {
    box-sizing: border-box;
    padding: 10px 10px 20px;
    text-decoration: none;
    color: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Image = styled.img`
  height: 80%;
  width: 100%;
  z-index: 2;
`

const Name = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 9px 0 2px;
`

const Price = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 4px;
`

const Colors = styled.div`
  display: flex;
`

const Color = styled.input`
  position: relative;
  margin: 10px 20px 0 0;
  width: 0;
  height: 0;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: ${props => props.color};
`

const Icon = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  transition: transform .3s ease, background-color .5s ease;
  z-index: 10;
  
  a {
    color: #000;
  }

  &:hover {
    background-color: #d8eeee;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
    return (
        <Container>
            <Link to={`${item.id}`} className="product-link">
                <Image src={item.img}/>
                <Name> {item.name}</Name>
                <Price> $ {item.price}</Price>
                <Colors>
                  {item.colors.map((elem, id) => {
                    return (
                      <Color type="radio" name="color" id={id} value={elem} color={elem} key={id} />
                    )
                  })}
                </Colors>
                <Info>
                    <Icon>
                        <ShoppingCartIcon />
                    </Icon>
                    <Icon>
                      <Link to={`${item.id}`}>
                        <SearchIcon />
                      </Link>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlinedIcon />
                    </Icon>
                </Info>
            </Link>
        </Container>
    );
};

export default Product;
