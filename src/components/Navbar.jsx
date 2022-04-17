import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';

const Container = styled.div`
  height: 60px;
  background-color: #1f1f1f;
  color: #f1f1f1;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
// Left 
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: #f1f1f1;
`

//Center
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`

//Rigth
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;
`

const Navbar = () => {
  return (
    <Container>
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
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>  
    </Container>
  )
}

export default Navbar