import React from 'react';
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
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;

  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform .3s ease, background-color .5s ease;

  &:hover {
    background-color: #d8eeee;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartIcon />
                </Icon>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
