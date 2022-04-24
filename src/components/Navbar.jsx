import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useSelector } from "react-redux";

const Header = styled.header`
  height: 60px;
  background-color: #1f1f1f;
  color: #f1f1f1;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  @media screen and (max-width: 1024px) {
    height: 50px;
  }
`
const Wrapper = styled.div`
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
// Left 
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 4px;
`
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: #f1f1f1;
  
  @media screen and (max-width: 768px) {
    width: 0;
  }
`

//Center
const Center = styled.div`
  flex: 1;
  text-align: center;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`
const Logo = styled.h1`
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (max-width: 540px) {
    font-size: 18px;
  }
`

//Right
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media screen and (max-width: 540px) {
    flex: 2;
    justify-content: space-between;
  }
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;

  @media screen and (max-width: 540px) {
    font-size: 10px;
    margin-left: 30px;
  }
`

const Navbar = () => {
  const cartAmount = useSelector(state => state.cart.cartItems.length);

  return (
    <Header>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color: "gray", fontSize: 18}}/> 
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/">EL MODO.</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/sign-up">SIGN UP</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/log-in">LOG IN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={cartAmount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>  
    </Header>
  )
}

export default Navbar