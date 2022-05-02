import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 2px;
  position: relative;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  background: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: background .2s ease-in-out, backdrop-filter .2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, .7);
    backdrop-filter: blur(2px);
  }
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 540px) {
    font-size: 15px;
  }
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  background: none;
  border: 2px solid #fff;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 22px;
  transition: color .3s ease-in-out, background .3s ease-in-out;
  
  &:hover {
    color: #191919;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 540px) {
    padding: 5px 7px;
    font-size: 13px;
  }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/${item.slug}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop now </Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
